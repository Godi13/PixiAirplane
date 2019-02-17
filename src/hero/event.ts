import keyboard from '../util/keyboard'

export default function event(sprite: any) {
  const left = keyboard(37)
  const up = keyboard(38)
  const right = keyboard(39)
  const down = keyboard(40)

  left.press = () => {
    sprite.vx = -5;
    sprite.vy = 0;
  };
  left.release = () => {
    if (!right.isDown && sprite.vy === 0) {
      sprite.vx = 0;
    }
  };

  //Up
  up.press = () => {
    sprite.vy = -5;
    sprite.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && sprite.vx === 0) {
      sprite.vy = 0;
    }
  };

  //Right
  right.press = () => {
    sprite.vx = 5;
    sprite.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && sprite.vy === 0) {
      sprite.vx = 0;
    }
  };

  //Down
  down.press = () => {
    sprite.vy = 5;
    sprite.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && sprite.vx === 0) {
      sprite.vy = 0;
    }
  };
}