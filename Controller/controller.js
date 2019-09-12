import {app, wrapper} from "../View/view";
import {runFall} from "../Model/model";

let contr = function () {
    wrapper.on('click', function(event) {
        let position = {
            x: event.data.global.x,
            y: event.data.global.y
        };
        runFall(position.x, position.y);
    });

    let gravity = 1,
        shapesSec = 1,
        count = 0,
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

    app.ticker.add((aaa) => {
        count += aaa;
        if (count > 60) {
            let call = document.querySelector('.num_of_shapes');

            for (let i = 1; i <= call.innerText; i++) {
                runFall();
            }

            count = 0;
        }
        for(let i = 0; i < app.stage.children.length; i++) {
            if (app.screen.height < app.stage.children[i].y) {
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
    });
};

export {contr};
