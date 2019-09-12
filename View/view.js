let app = new PIXI.Application({width: 600, height: 400});

app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.margin = '0 auto';
app.renderer.view.style.display = 'block';
app.renderer.autoDensity = true;

const body = document.querySelector('.top_wrapper');
body.appendChild(app.view);

const wrapper = new PIXI.Graphics();

wrapper.beginFill(0x061639);
wrapper.drawRect(0, 0, app.screen.width, app.screen.height);
wrapper.endFill();
wrapper.name = 'wrapper';

app.stage.addChild(wrapper);

wrapper.interactive = true;
wrapper.buttonMode = true;

export {app, wrapper};
