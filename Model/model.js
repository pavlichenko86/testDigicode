import {app} from "../View/view";

class Figure {
    constructor(posX, x, y, color, type) {
        this.obj = new PIXI.Graphics();
        this.obj.type = type;
        this.obj.beginFill(color ? color : 0x66CCFF);
        this.obj.y = y ? y : 0 - this.obj.height;
        this.obj.x = x ? x : posX > 600 - this.obj.width ? 600 - this.obj.width : posX;

        this.obj.interactive = true;
        this.obj.buttonMode = true;
    }

    drawRect(){
        this.obj.drawRect(0, 0, 100, 50);
        this.obj.endFill();
    }

    drawTriangle(){
        this.obj.drawPolygon([
            -32, 64,
            32, 64,
            0, 0
        ]);
        this.obj.endFill();
    }

    drawFiveangle(){
        this.obj.drawPolygon([
            0, -20,
            20, 80,
            40, 60,
            80, 60,
            60, 0
        ]);
        this.obj.endFill();
    }

    drawSixangle(){
        this.obj.drawPolygon([
            0, -20,
            20, 80,
            40, 60,
            80, 60,
            60, 30,
            0, 0
        ]);
        this.obj.endFill();
    }

    drawCircle(){
        this.obj.drawCircle(0, 0, 50);
        this.obj.endFill();
    }

    drawEllipse(){
        this.obj.drawEllipse(0, 0, 50, 20);
        this.obj.endFill();
    }
}

function runFall(x, y) {
    let randX = Math.floor(Math.random() * 600),
        randFun = Math.floor(Math.random() * 6);

    let figure = new Figure(randX, x, y, getRandomColor(), 'rectangle');

    figure.obj.on('click', function() {
        typeColorChange(this.type);
        this.destroy();
    });

    switch (randFun) {
        case 0 :
            figure.obj.type = 'rectangle';
            figure.drawRect();
            app.stage.addChild(figure.obj);
            break;
        case 1 :
            figure.obj.type = 'triAngle';
            figure.drawTriangle();
            app.stage.addChild(figure.obj);
            break;
        case 2 :
            figure.obj.type = 'fiveangle';
            figure.drawFiveangle();
            app.stage.addChild(figure.obj);
            break;
        case 3 :
            figure.obj.type = 'sixangle';
            figure.drawSixangle();
            app.stage.addChild(figure.obj);
            break;
        case 4 :
            figure.obj.type = 'circle';
            figure.drawCircle();
            app.stage.addChild(figure.obj);
            break;
        case 5 :
            figure.obj.type = 'ellipse';
            figure.drawEllipse();
            app.stage.addChild(figure.obj);
            break;
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF',
        color = '0x';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function typeColorChange(type) {
    let newColor = getRandomColor();

    for(let i = 0; i < app.stage.children.length; i++) {
        if (app.stage.children[i].type && app.stage.children[i].type === type) {
            app.stage.children[i].tint = newColor;
        }
    }
}

export {Figure, runFall};
