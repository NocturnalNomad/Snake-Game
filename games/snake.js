const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;

let snake = [{x: 200, y: 200}];

let food = {
    x: Math.floor(Math.random()*19+1)*box,
    y: Math.floor(Math.random()*19+1)*box
};

let direction = "";

document.addEventListener("keydown", changeDirection);

function changeDirection(e){
    if(e.key=="ArrowLeft" && direction!="RIGHT") direction="LEFT";
    else if(e.key=="ArrowUp" && direction!="DOWN") direction="UP";
    else if(e.key=="ArrowRight" && direction!="LEFT") direction="RIGHT";
    else if(e.key=="ArrowDown" && direction!="UP") direction="DOWN";
}

function draw(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,400,400);

    for(let i=0;i<snake.length;i++){
        ctx.fillStyle=i==0?"lime":"green";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
    }

    ctx.fillStyle="red";
    ctx.fillRect(food.x,food.y,box,box);

    let x = snake[0].x;
    let y = snake[0].y;

    if(direction=="LEFT") x-=box;
    if(direction=="RIGHT") x+=box;
    if(direction=="UP") y-=box;
    if(direction=="DOWN") y+=box;

    if(x==food.x && y==food.y){
        food={
            x: Math.floor(Math.random()*19+1)*box,
            y: Math.floor(Math.random()*19+1)*box
        };
    } else {
        snake.pop();
    }

    if(x<0 || y<0 || x>=400 || y>=400){
        clearInterval(game);
        alert("Game Over");
    }

    snake.unshift({x,y});
}

let game = setInterval(draw,100);
