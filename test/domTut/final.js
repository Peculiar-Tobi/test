let lasRenderTime = 0;
const SNAKE_SPEED = 2;
function main(currentTime){
    const secondsSinceLastRender = (currentTime - lasRenderTime)/1000 
    if (secondsSinceLastRender < 1 /SNAKE_SPEED) return
   console.log('Render')
    lasRenderTime = currentTime;
}
window.requestAnimationFrame(main)