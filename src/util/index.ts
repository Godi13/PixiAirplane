import * as PIXI from 'pixi.js'

export const Application = PIXI.Application
export const loader = PIXI.loader
export const resources = PIXI.loader.resources
export const Sprite = PIXI.Sprite
export const Container = PIXI.Container
export const TextureCache = PIXI.utils.TextureCache
export const Text = PIXI.Text
export const TextStyle = PIXI.TextStyle
export const autoDetectRenderer = PIXI.autoDetectRenderer
export const AnimatedSprite = PIXI.extras.AnimatedSprite
export const fromFrame = PIXI.Texture.fromFrame

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
