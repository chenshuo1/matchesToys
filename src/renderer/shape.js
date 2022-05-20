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
  return shape('rect', context, {
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

export function ring(context, attributes) {
  // r1 是内圆的半径，r2 是外圆的半径
  const {
    cx, cy, r1, r2, ...styles
  } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const innerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}
