// 上下文主要是保存一些绘制或者其他功能需要的全局信息，比如挂载画布的容器，当前的填充颜色，边框粗细等

// 本次简单实现，只保留画布节点，挂载节点
import { createSVGElement, mount } from '../utils';

export function createContext(width, height) {
  // 创建画布svg节点，并设置宽高
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  // 创建挂载g节点， 并把g节点挂载到
  /* 元素g是用来组合对象的容器。添加到g元素上的变换会应用到其所有的子元素上。
    添加到g元素的属性会被其所有的子元素继承。此外，g元素也可以用来定义复杂的对象，
    之后可以通过<use>元素来引用它们。
  */
  const g = createSVGElement('g');
  mount(svg, g);

  return {
    node: svg,
    group: g,
  };
}
