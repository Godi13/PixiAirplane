export default {
  number: 0,
  bullets: [],
  enemies: [],
  bulletsPool: [],
  enemiesPool: [],
  reset() {
    this.number = 0
    this.bullets.length = 0
    this.enemies.length = 0
    this.bulletsPool.length = 0
    this.enemiesPool.length = 0
  }
}

// export default Object.create(databus)


// let instance: any

// export default class DataBus {
//   number: number = 0;
//   bullets: any[] = []
//   enemies: any[] = []
//   bulletsPool: any[] = []
//   enemiesPool: any[] = []

//   constructor() {
//     if (instance) {
//       return instance
//     }

//     instance = this
//     this.reset()
//   }

//   reset() {
//     this.number = 0;
//     this.bullets = []
//     this.enemies = []
//     this.bulletsPool = []
//     this.enemiesPool = []
//   }
// }

