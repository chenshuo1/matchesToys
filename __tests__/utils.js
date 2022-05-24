// __tests__/utils.js

export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent && child) {
    parent.appendChild(child);
  } else {
    // eslint-disable-next-line no-console
    console.warn('no parent');
  }
}

export function getAttributes(node, attributes) {
  // return attributes.reduce((total, cur) => (total[cur] = node.getAttribute(cur), total), {});
  return attributes.reduce((total, cur) => (total[cur] = node.getAttribute(cur), total), {});
}
