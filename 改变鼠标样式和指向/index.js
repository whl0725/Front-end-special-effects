
const pointer = document.querySelector('.pointer');

let rad = 0;
window.onmousemove = function (e) {
  // 鼠标移动距离大于3,重新计算角度
  if (Math.abs(e.movementX) + Math.abs(e.movementY) >= 3) {
    // e.movementX 鼠标移动的x轴距离
    // e.movementY 鼠标移动的y轴距离
    // 反正切
    rad = Math.atan2(e.movementX, -e.movementY)
  }
  // 图标跟随鼠标移动
  pointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${rad}rad)`;

}
