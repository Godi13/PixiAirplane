import { Application, loader } from './util'
import hitTestRectangle from './util/hitTestRectangle'
import keyboard from './util/keyboard'
import * as IMG from './images'
import { WIDTH, HEIGHT } from './config'

import oBg from './background'
import oNumber from './number'
import oHero from './hero'
import oEnemy from './enemy'
import databus from './databus'

let frame = 0
let state = play

const app = new Application({
  width: WIDTH,
  height: HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

loader
  .add([
    IMG.bg,
    IMG.hero,
    IMG.enemy,
    IMG.bullet,
    IMG.explosion,
  ])
  .load(setup);

function setup() {
  const bgs = oBg.init()
  const hero = oHero.init()
  const num = oNumber.init()

  app.stage.addChild(bgs, hero, num);

  app.ticker.add(() => state(bgs, hero))
}

function dead() {
  const space = keyboard(32)
  space.press = function() {
    frame = 0
    databus.reset()
    state = play
  }
}

function play(bgs: any, hero: any) {
  frame++

  oBg.loop(bgs)
  oHero.loop(hero)

  databus.bullets.forEach(oHero.bulletLoop)
  databus.enemies.forEach(oEnemy.loop)

  if (frame % 20 === 0) {
    oHero.shoot(hero, app)
  }

  if (frame % 30 === 0) {
    oEnemy.init(app)
  }

  collisionDetection(hero)
}

// 全局碰撞检测
function collisionDetection(hero: any) {
  databus.bullets.forEach((bullet: any) => {
    for (let i = 0; i < databus.enemies.length; i++) {
      const enemy = databus.enemies[i]
      if (bullet.visible && enemy.children[1].visible && hitTestRectangle(bullet, enemy)) {
        oNumber.add()
        bullet.visible = false
        enemy.children[0].visible = true
        enemy.children[1].visible = false
        databus.bulletsPool.push(bullet)
        databus.enemiesPool.push(enemy)
        break
      }
    }
  })

  // databus.enemies
  //   .forEach((e: any) => {
  //     if (e.children[1].visible && hitTestRectangle(hero, e)) {
  //       state = dead
  //     } else {

  //     }
  //   })
}

