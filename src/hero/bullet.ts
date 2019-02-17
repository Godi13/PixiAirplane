import { Sprite, TextureCache } from '../util'
import * as IMG from '../images'
import databus from '../databus'

const { bulletsPool, bullets } = databus

export default {
  init(plane: any, app: any) {
    const hasBullet = bulletsPool.length
    const bullet = hasBullet
      ? bulletsPool.shift()
      : new Sprite(TextureCache[IMG.bullet])

    bullet.visible = true
    bullet.vy = -8
    bullet.scale.set(0.3, 0.3)
    bullet.position.set(
      plane.x + (plane.width >> 1) - (bullet.width >> 1),
      plane.y - (plane.height >> 1)
    )

    if (!hasBullet) {
      app.stage.addChild(bullet)
    }

    if (!bullets.includes(bullet)) {
      bullets.push(bullet)
    }
  },
  loop(bullet: any) {
    if (bullet.y + bullet.height > 0) {
      bullet.y += bullet.vy
    } else if (!bulletsPool.includes(bullet)) {
      bulletsPool.push(bullet)
    }
  },
}