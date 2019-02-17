import { Sprite, TextureCache, Container } from './util'
import * as IMG from './images'

export default {
  init() {
    const bgs = new Container()
    const bg1 = new Sprite(TextureCache[IMG.bg]);
    const bg2 = new Sprite(TextureCache[IMG.bg]);

    bg1.scale.set(0.6, 1)
    bg2.scale.set(0.6, 1)
    bg2.position.set(0, -bg2.height)

    bgs.addChild(bg1)
    bgs.addChild(bg2)

    return bgs
  },
  loop(bgs: any) {
    bgs.y += 1
    if (bgs.y > bgs.height >> 1) {
      bgs.y = 0
    }
  }
}