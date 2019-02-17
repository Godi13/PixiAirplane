import { Text, TextStyle } from './util'
import databus from './databus'

const style = new TextStyle({
  fill: 'white'
})

const number = new Text('0', style);

export default {
  init() {
    number.position.set(10, 10);
    return number
  },
  add() {
    number.text = `${++databus.number}`
  }
}