var ui = {
  show: function (element) {
    if (!element) return
    element.classList.remove('hidden')
  },
  hide: function (element) {
    if (!element) return
    element.classList.add('hidden')
    element.classList.remove('shown')
  },
  containers: {
    content: document.querySelector('.content-container'),
    contentControls: document.querySelector('.content-controls')
  },
  buttons: {
    showContent: document.querySelector('#show-content'),
    hideContent: document.querySelector('#hide-content')
  }
};

export default ui
