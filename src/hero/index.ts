import { Sprite, resources, Container } from '../util'
import event from './event'
import * as IMG from '../images'
import { WIDTH, HEIGHT } from '../config'
import bullet from './bullet'

export default {
  init() {
    const plane = new Sprite(resources[IMG.hero].texture)

    plane.scale.set(0.4, 0.5)
    plane.position.set(WIDTH - plane.width >> 1, HEIGHT - plane.height)

    plane.addChild(plane)
    event(plane)

    return plane
  },
  loop(plane: any) {
    const x = plane.x + plane.vx;
    if (x > 0 && x < WIDTH - plane.width) {
      plane.x = x;
    }

    const y = plane.y + plane.vy
    if (y > 0 && y < HEIGHT - plane.height) {
      plane.y = y;
    }
  },
  shoot: bullet.init,
  bulletLoop: bullet.loop
}