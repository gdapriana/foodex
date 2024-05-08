import WsNotif from './ws-notif';

let socket = null;

export const WsInitiator = {
  init(url) {
    socket = new WebSocket(url);
    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const dataReview = JSON.parse(message.data);

    WsNotif.sendNotification({
      title: dataReview.name,
      options: {
        body: dataReview.review,
        icon: 'icons/icon-128.png',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export const sendDataToWs = (dataReview) => {
  const data = JSON.stringify(dataReview);
  socket.send(data);
};
