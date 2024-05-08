export const feedbackSuccess = (message) => {
  return {
    icon: 'success',
    title: 'Success',
    text: message,
  };
};

export const feedbackError = (message) => {
  return {
    icon: 'error',
    title: 'Oops...',
    text: message,
  };
};
