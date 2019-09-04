let app = new PIXI.Application({width: 600, height: 400});

app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.margin = '0 auto';
app.renderer.view.style.display = 'block';
app.renderer.autoDensity = true;

const body = document.querySelector('.top_wrapper');
body.appendChild(app.view);

const wrapper = new PIXI.Graphics();

// Rectangle
wrapper.beginFill(0x061639);
wrapper.drawRect(0, 0, app.screen.width, app.screen.height);
wrapper.endFill();
wrapper.name = 'wrapper';

app.stage.addChild(wrapper);

wrapper.interactive = true;
wrapper.buttonMode = true;


wrapper.on('click', function(event) {

    let position = {
        x: event.data.global.x,
        y: event.data.global.y
    };
    runFall(position.x, position.y);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF',
        color = '0x';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rectangle(posX, x, y, color) {
    let rectangle = new PIXI.Graphics();

    rectangle.beginFill(color ? color : 0x66CCFF);
    rectangle.drawRect(0, 0, 100, 50);
    rectangle.y = y ? y : 0;
    rectangle.x = x ? x : posX > 600 - rectangle.width ? 600 - rectangle.width : posX;
    rectangle.endFill();

    rectangle.interactive = true;
    rectangle.buttonMode = true;

    rectangle.on('click', function() {
        this.destroy();
    });

    return rectangle;
}

function triangle(posX, x, y, color) {
    let triangle = new PIXI.Graphics();

    triangle.beginFill(color ? color : 0x66FF33);
    triangle.drawPolygon([
        -32, 64,
        32, 64,
        0, 0
    ]);
    triangle.endFill();
    triangle.x = x ? x : posX > 600 - triangle.width ? 600 - triangle.width : posX;
    triangle.y = y ? y : 0;

    triangle.interactive = true;
    triangle.buttonMode = true;

    triangle.on('click', function() {
        this.destroy();
    });

    return triangle;
}

function fiveangle(posX, x, y, color) {
    let fiveangle = new PIXI.Graphics();

    fiveangle.beginFill(color ? color : 0xcccccc);
    fiveangle.drawPolygon([
        0, -20,
        20, 80,
        40, 60,
        80, 60,
        60, 0
    ]);
    fiveangle.x = x ? x : posX > 600 - fiveangle.width ? 600 - fiveangle.width : posX;
    fiveangle.y = y ? y : 0;
    fiveangle.endFill();

    fiveangle.interactive = true;
    fiveangle.buttonMode = true;

    fiveangle.on('click', function() {
        this.destroy();
    });

    return fiveangle;
}

function sixangle(posX, x, y, color) {
    let sixangle = new PIXI.Graphics();

    sixangle.beginFill(color ? color : 0xffffff);
    sixangle.drawPolygon([
        0, -20,
        20, 80,
        40, 60,
        80, 60,
        60, 30,
        0, 0
    ]);
    sixangle.x = x ? x : posX > 600 - sixangle.width ? 600 - sixangle.width : posX;
    sixangle.y = y ? y : 0;
    sixangle.endFill();


    sixangle.interactive = true;
    sixangle.buttonMode = true;

    sixangle.on('click', function() {
        this.destroy();
    });

    return sixangle;
}

function circle(posX, x, y, color) {
    let circle = new PIXI.Graphics();

    circle.beginFill(color ? color : 0x9966FF);
    circle.drawCircle(0, 0, 50);
    circle.y = y ? y : 0;
    circle.x = x ? x : posX > 600 - circle.width ? 600 - circle.width : posX;
    circle.endFill();


    circle.interactive = true;
    circle.buttonMode = true;

    circle.on('click', function() {
        this.destroy();
    });

    return circle;
}

function ellipse(posX, x, y, color) {
    let ellipse = new PIXI.Graphics();

    ellipse.beginFill(color ? color : 0xFFFF00);
    ellipse.drawEllipse(0, 0, 50, 20);
    ellipse.y = y ? y : 0;
    ellipse.x = x ? x : posX > 600 - ellipse.width ? 600 - ellipse.width : posX;
    ellipse.endFill();

    ellipse.interactive = true;
    ellipse.buttonMode = true;

    ellipse.on('click', function() {
        this.destroy();
    });

    return ellipse;
}


// function checkShape(shapeObj) {
//     let shape = new PIXI.Graphics();
//
//     switch (shapeObj){
//         case 'rectangle':
//             shape.beginFill(0x66CCFF);
//             shape.drawRect(0, 0, 100, 50);
//             shape.y = 0 - shape.height;
//             shape.endFill();
//
//             break;
//         case 'triangl':
//             shape.beginFill(0x66FF33);
//             shape.drawPolygon([
//                 -32, 64,
//                 32, 64,
//                 0, 0
//             ]);
//             shape.endFill();
//             shape.x = 180;
//             shape.y = 0 - shape.height;
//
//             break;
//         case 'circle':
//             shape.beginFill(0x9966FF);
//             shape.drawCircle(200, 0, 50);
//             shape.endFill();
//             shape.y = 0 - shape.height;
//
//             break;
//         case 'ellipse':
//             shape.beginFill(0xFFFF00);
//             shape.drawEllipse(100, 0, 50, 20);
//             shape.y = 0 - shape.height;
//             shape.endFill();
//
//             break;
//         case 'fiveangle':
//             shape.beginFill(0xffffff);
//             shape.drawPolygon([
//                 0, -20,
//                 20, 80,
//                 40, 60,
//                 80, 60,
//                 60, 0
//             ]);
//             shape.endFill();
//             shape.x = 380;
//             shape.y = 0 - shape.height;
//
//             break;
//     }
//
//     return shape;
// }

function runFall(x, y) {
    let randX = Math.floor(Math.random() * 600),
        randFun = Math.floor(Math.random() * 6);


    switch (randFun) {
        case 0 :
            app.stage.addChild(rectangle(randX, x, y, getRandomColor()));
            break;
        case 1 :
            app.stage.addChild(triangle(randX, x, y, getRandomColor()));
            break;
        case 2 :
            app.stage.addChild(fiveangle(randX, x, y, getRandomColor()));
            break;
        case 3 :
            app.stage.addChild(sixangle(randX, x, y, getRandomColor()));
            break;
        case 4 :
            app.stage.addChild(circle(randX, x, y, getRandomColor()));
            break;
        case 5 :
            app.stage.addChild(ellipse(randX, x, y, getRandomColor()));
            break;
    }
}

runFall();
setInterval(function () {
    let call = document.querySelector('.num_of_shapes');
 for (let i = 1; i <= call.innerText; i++) {

     runFall();
 }
}, 1000);

let gravity = 4,
    shapesSec = 1,
    add_gravity = document.querySelector('.add_gravity'),
    remove_gravity = document.querySelector('.remove_gravity'),
    gravity_res = document.querySelector('.gravity_res'),
    add = document.querySelector('.add'),
    remove = document.querySelector('.remove'),
    num_of_shapes = document.querySelector('.num_of_shapes');

add.addEventListener('click', function() {
    shapesSec++;
    num_of_shapes.innerText = shapesSec;
});
remove.addEventListener('click', function() {
    if (shapesSec === 1) {
        alert('Value mast be more than 1');
    } else {
        shapesSec--;
        num_of_shapes.innerText = shapesSec;
    }
});

add_gravity.addEventListener('click', function() {
    gravity++;
    gravity_res.innerText = gravity;
});
remove_gravity.addEventListener('click', function() {
    if (gravity === 1) {
        alert('Gravity value mast be more than 1');
    } else {
        gravity--;
        gravity_res.innerText = gravity;
    }
});
setInterval(function () {
    for(let i = 0; i < app.stage.children.length; i++) {
        if (app.screen.height < app.stage.children[i].y) {
            app.stage.children[i].onStage = false;
            app.stage.children[i].clear();
            app.stage.children[i].destroy();
        } else {
            if (app.stage.children[i].name !== 'wrapper') {
                app.stage.children[i].y += gravity;
            }
        }
    }

    let count_shapes = document.querySelector('.count_shapes');

    count_shapes.innerText = app.stage.children.length - 1;
}, 300);






