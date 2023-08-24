// 图形
const shapeMap = [
    {
        type: 'long',
        data: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
        model: 0,
    }
    // ...
];
const randomColor = ['#999', '#aa0', '#0bb', '#c0c', '#ddd'];
// 配置信息
const config = {
    speed: 1000,
    shapeLength: shapeMap.length,
    currentShapeIndex: 0,
    currentShapeStep: 0,
    color: '#aaa',
    fallTimer: 0,
    horizontalOffset: 0,
};
let result = [];
let ctx;

function init() {
    if (!ctx) return;
    randomShape();
}
function randomShape() {
    const index = parseInt(Math.random() * config.shapeLength);
    config.currentShapeStep = 0;
    config.currentShapeIndex = index;
    const colorIndex = parseInt(Math.random() * randomColor.length);
    config.color = randomColor[colorIndex];
    drawShape();
    config.fallTimer = setInterval(() => {
        fallShape();
    }, 1000);
}
function drawShape() {
    ctx.reset();
    const { currentShapeStep, currentShapeIndex, color } = config;
    const { data } = shapeMap[currentShapeIndex];
    ctx.fillStyle = color;
    data.forEach(cell => {
        const { x, y } = cell;
        ctx.fillRect(x * 20, (y + currentShapeStep) * 20, 20, 20);
    });
}
function fallShape() {
    config.currentShapeStep++;
    if (isCollision()) {
        const { data } = shapeMap[config.currentShapeIndex];
        data.forEach(cell => {
            const { x, y } = cell;
            result.push({ x: x + config.horizontalOffset, y: y + config.currentShapeStep - 1 });
        });
        cLog.innerText = config.currentShapeStep;
        restart();
        return;
    }
    drawShape();
}
function restart() {
    clearInterval(config.fallTimer);
    // randomShape();
}
function isCollision() {
    // todo: 计算碰撞(左右下)
    if (config.currentShapeStep === 2) {
        return true;
    }
}

window.onload = () => {
    ctx = tetris.getContext('2d');
    init();
}

// todo: 监听上下左右按键
