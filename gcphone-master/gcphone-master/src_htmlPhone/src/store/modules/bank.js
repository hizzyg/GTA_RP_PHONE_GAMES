// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// /* eslint-disable no-tabs */
// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable semi */
// var canvas = document.getElementById('myCanvas')
// var ctx = canvas.getContext('2d')
// var x = canvas.width / 2
// var y = canvas.height - 30
// var dx = +2
// var dy = -2
// var paddleWidth = 80
// var paddleHeight = 10
// var paddleX = (canvas.width - paddleWidth) / 2
// var paddleY = canvas.height - paddleHeight
// var rightPressed = false
// var leftPressed = false
// var brickWidth = 75
// var brickHeight = 20
// var brickX = canvas.width / 2 - brickWidth / 2
// var brickY = canvas.height / 2 - brickHeight / 2
// var i, j
// var flag = []
// var score
// var count = 0
// score = 0
// var brickCount = 0
//
// for (i = 0; i <= 600; i++) {
// eslint-disable-next-line no-tabs
// 	  flag[i] = []
//   for (j = 0; j <= 600; j++) {
//     flag[i][j] = { x: 0, y: 0 }
//   }
// }
//
// // eslint-disable-next-line no-undef
// document.addEventListener('keydown', keyDownHandler, false);
// // eslint-disable-next-line no-undef
// document.addEventListener('keyup', keyUpHandler, false);
//
// function keyDownHandler (e) {
//   if (e.keyCode === 39) {
//     rightPressed = true;
//   } else if (e.keyCode === 37) {
//     leftPressed = true;
//   }
// }
// function keyUpHandler (e) {
//   if (e.keyCode === 39) {
//     rightPressed = false;
//   } else if (e.keyCode === 37) {
//     leftPressed = false;
//   }
// }
//
// function drawScore () {
//   ctx.beginPath();
//   ctx.font = '15px Arial';
//   ctx.fillStyle = '#0095DD';
//   ctx.fillText('Score: ' + score, 8, 11);
//   ctx.closePath();
// }
//
// function drawBrick () {
//   for (i = 8; i + brickWidth < canvas.width; i = i + brickWidth + 10) {
//     for (j = 20; j + brickHeight < canvas.height / 2 + 20; j = j + brickHeight + 10) {
//       if (flag[i][j].x === 0 && flag[i][j].y === 0) {
//         ctx.beginPath();
//         ctx.rect(i, j, brickWidth, brickHeight);
//         ctx.fillStroke = '#0095DD';
//         ctx.stroke();
//         ctx.fillStyle = 'red';
//         ctx.fill();
//         ctx.closePath();
//         brickCount++;
//       }
//     }
//   }
// }
//
// function drawPaddle () {
//   ctx.beginPath();
//   ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
//   ctx.fillStyle = '#0095DD';
//   ctx.fill();
//   ctx.closePath();
// }
//
// function drawBall () {
//   ctx.beginPath();
//   ctx.arc(x, y, 10, 0, Math.PI * 2);
//   ctx.fillStyle = '#0095DD';
//   ctx.fill();
//   ctx.closePath();
// }
//
// function draw () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawScore();
//
//   drawPaddle();
//   drawBrick();
//   drawBall();
//
//   if (rightPressed && paddleX + paddleWidth < canvas.width) { paddleX += 4; } else if (leftPressed && paddleX > 0) { paddleX -= 4; } else {
//     paddleX += 0;
//   }
//
//   if (x + dx > canvas.width - 10 || x + dx < 10) {
//     dx = -dx; hitSound.play();
//   }
//   if (y + dy < 10) {
//     dy = -dy; hitSound.play();
//   }
//   if (y + dy + 10 === canvas.height - paddleHeight && ((x + dx + 10 >= paddleX || x + dx > paddleX) && x + dx <= paddleX + paddleWidth)) {
//     dy = -dy; hitSound.play();
//   } else if (y + dy + 10 > canvas.height) {
//     document.location.reload();
//   }
//
//   for (i = 8; i + brickWidth < canvas.width; i = i + brickWidth + 10) {
//     for (j = 20; j + brickHeight < canvas.height / 2 + 20; j = j + brickHeight + 10) {
//       if (y + dy >= j && y <= j + brickHeight && x + dx + 10 >= i && x <= i + brickWidth) {
//         if (flag[i][j].x === 0 && flag[i][j].y === 0) {
//           dy = -dy;
//           brakeSound.play();
//           score++;
//         }
//         if (score === brickCount) {
//           alert('Tebrikler Kazandın!');
//           document.location.reload();
//         }
//         flag[i][j].x = 1;
//         flag[i][j].y = 1;
//       }
//     }
//   }
//
//   x += dx;
//   y += dy;
// }

// setInterval(draw, 10);
