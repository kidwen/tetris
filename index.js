// 图形
const shapeMap = [
    {
        type: 'long',
        data: [],
    }
    // ...
]
// 配置信息
const config = {
    speed: 1000,
    shapeLength: shapeMap.length,
}
let ctx;

function init() {
    if (!ctx) return;
    ctx.reset();
    randomShape();
}
function randomShape() {
    const index = parseInt(Math.random() * config.shapeLength);
    drawShape(index);
}
function drawShape() {
    
}

window.onload = () => {
    ctx = tetris.getContext('2d');
    // cLog.innerText = 'ctx';
}
