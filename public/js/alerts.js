// type is 'success' or 'error'
export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) {
    el.parentElement.removeChild(el);
  }
};

export const showAlert = (type, message) => {
  const markup = `<div class="alert alert--${type}">${message}</div>`;
  hideAlert();
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 3000);
};
