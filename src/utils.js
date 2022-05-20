// 创建svg
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}
// 挂载父节点
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 转化属性大小写 正则不需要‘’包裹
    const keCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(keCaseKey, value);
  }
}

export function applyTransform(element, transform) {
  const oldTransform = element.getAttribute('transform') || '';
  // 将新的变换指定到后面的变换后，这里需要字符串拼接
  const prefix = oldTransform ? `${oldTransform} ` : '';
  element.setAttribute('transform', `${prefix}${transform}`);
}
