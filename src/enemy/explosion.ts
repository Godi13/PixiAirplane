import { fromFrame, AnimatedSprite } from '../util'

const explosion = {
  init() {
    const explosions = [];
    const EXPLO_FRAME_COUNT = 19;
    for (let i = 1; i <= EXPLO_FRAME_COUNT; i++) {
      explosions.push(fromFrame(`explosion${i}.png`))
    }

    const anim = new AnimatedSprite(explosions)

    anim.scale.set(2)
    anim.animationSpeed = 0.5
    anim.visible = false
    anim.play()

    return anim
  },
}

export default explosion