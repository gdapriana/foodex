const WsNotif = {
  sendNotification({ title, options }) {
    if (!this._availabilityCheck()) {
      console.log('Notification not support');
      return;
    }

    if (!this._permissionCheck()) {
      console.log('Permission dennied');
      this._requestPermission().then();
      return;
    }

    this._showNotification({ title, options }).then();
  },

  _availabilityCheck() {
    return 'Notification' in window;
  },

  _permissionCheck() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();
    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({ title, options }) {
    const swRegistration = await navigator.serviceWorker.ready;
    await swRegistration.showNotification(title, options);
  },
};

export default WsNotif;
