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
    // 转化属性大小写
    const keCaseKey = key.replace('/[A-Z]/g', (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttributes(keCaseKey, value);
  }
}
