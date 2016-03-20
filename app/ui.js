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
    users: document.querySelector('#users'),
    content: document.querySelector('#content'),
    media: document.querySelector('#media'),
    mediaInputs: document.querySelector('#media-inputs'),
    mediaControls: document.querySelector('#media-controls')
  },
  buttons: {
    showContent: document.querySelector('#show-media'),
    hideContent: document.querySelector('#hide-media')
  }
};

export default ui
