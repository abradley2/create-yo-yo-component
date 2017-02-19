const html = require('yo-yo')
const component = require('./component')

const props = {
  message: 'Yo-Yo!',
  editMessage: function (msg) {
    props.message = msg
    update()
  }
}

const appNode = document.createElement('div')

function update () {
  html.update(appNode, html`${component(props)}`)
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(appNode)
  update()
})
