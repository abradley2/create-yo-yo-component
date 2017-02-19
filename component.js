const html = require('yo-yo')
const css = require('sheetify')

const styles = css`
  :host > h3 {
    color: green;
  }
`

function component (props) {
  return html`<div class=${styles + (props.styles || '')}>
    <input
      type='text'
      value=${props.message}
      oninput=${onEditMessage}
    />
    <h3>${props.message}</h3>
  </div>`

  function onEditMessage (e) {
    props.editMessage(e.target.value)
  }
}

module.exports = component
