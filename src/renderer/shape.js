import { applyAttributes, createSVGElement, mount } from '../utils';

export function shape(type, context, attributes) {
  const { group } = context;
  const el = createSVGElement(type);
  applyAttributes(el, attributes);
  mount(group, el);
  return el;
}

export function line(context, attributes) {
  return shape('line', context, attributes);
}

// rect 不支持width height负数
export function rect(context, attributes) {
  const {
    width, height, x, y,
  } = attributes;
  return shape('rect', {
    ...attributes,
    height: Math.abs(height),
    width: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
}

export function circle(context, attributes) {
  return shape('circle', context, attributes);
}

// text的text 不是属性而是在标签内部
export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const textEl = shape('text', context, rest);
  textEl.textContent = text;// textContent 设置标签内容
  return textEl;
}

// path的属性d（路径）是一个字符串 拼接起来比较麻烦，我们用数组去生成
// path元素是用来定义形状的通用元素。所有的基本形状都可以用path元素来创建。
export function path(context, attributes) {
  const { d } = attributes;
  return shape('path', context, {
    ...attributes,
    d: d.flat().join(' '),
  });
}
// 支持圆环

// export function ring(context, attributes){

// }
