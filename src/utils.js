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
