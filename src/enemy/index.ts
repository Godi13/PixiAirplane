import { Sprite, TextureCache, Container, randomInt } from '../util'
import { WIDTH, HEIGHT } from '../config'
import * as IMG from '../images'
import explosion from './explosion'
import databus from '../databus'

const { enemies, enemiesPool } = databus

export default {
  init(app: any) {
    const hasEnemy = enemiesPool.length

    const enemyContainer = hasEnemy ? enemiesPool.shift() : new Container()

    if (!hasEnemy) {
      const enemy = new Sprite(TextureCache[IMG.enemy])
      enemyContainer.addChild(explosion.init())
      enemyContainer.addChild(enemy)
    }

    const x = randomInt(0, WIDTH - 60);

    enemyContainer.vy = 4
    enemyContainer.children[0].visible = false
    enemyContainer.children[1].visible = true
    enemyContainer.position.set(x, -enemyContainer.height)
    enemyContainer.scale.set(0.5, 0.6)

    if (!enemies.includes(enemyContainer)) {
      enemies.push(enemyContainer)
    }

    if (!hasEnemy) {
      app.stage.addChild(enemyContainer);
    }
  },
  loop(enemy: any) {
    if (enemy.y < HEIGHT) {
      enemy.y += enemy.vy;
    } else if (!enemiesPool.includes(enemy)) {
      enemiesPool.push(enemy)
    }
  },
}