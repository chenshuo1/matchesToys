import { createContext } from './context';
import {
  line, circle, text, rect, path, ring,
} from './shape';
import {
  restore, save, scale, translate, rotate,
} from './transfrom';

export function createRenderer(width, height) {
  const context = createContext(width, height); // 创建上下文对象
  return {
    line: (options) => line(context, options),
    circle: (options) => circle(context, options),
    text: (options) => text(context, options),
    rect: (options) => rect(context, options),
    path: (options) => path(context, options),
    ring: (options) => ring(context, options),
    restore: () => restore(context),
    save: () => save(context),
    scale: (...args) => scale(context, ...args),
    rotate: (...args) => rotate(context, ...args),
    translate: (...args) => translate(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
}
