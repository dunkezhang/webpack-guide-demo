import _ from 'lodash'
import printMe from './print.js'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  element.innerHTML = _join(['Hello', 'webpack'], ' ')
  btn.innerHTML = '点击这里，然后查看console!'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())