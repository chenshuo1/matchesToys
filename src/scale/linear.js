import { normalize } from './utils';

export function interpolateNumber(t, start, stop) {
  return start * (1 - t) + stop * t;
}
// function interolateColor(t, start, stop) {
//   const r = interpolateNumber(t, start[0], stop[0]);
//   const g = interpolateNumber(t, start[1], stop[1]);
//   const b = interpolateNumber(t, start[2], stop[2]);
//   return `rgb(${r}, ${g}, ${b})`;
// }
export function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}) {
  return (x) => {
    const t = normalize(x, d0, d1);
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return interpolate(t, r0, r1);
  };
}
