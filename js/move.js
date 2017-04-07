const renderMovedPlayer = (x, y, side) => {
	removePlayer(x, y, playerSquareSize)
	movePointerTo(x,y);
	drawSquare({x:x,y:y}, playerSquareSize);
	renderDylo[side](x, y, dyloSize);
	render();
}

const movePlayer = (x, y, side) => {
	renderMovedPlayer(startX += x, startY += y, side);
}

let moveCommands = {
	'w': (speed) => movePlayer(0, -speed, 'top'),
	's': (speed) => movePlayer(0, speed, 'bottom'),
	'a': (speed) => movePlayer(-speed, 0, 'left'),
	'd': (speed) => movePlayer(speed, 0, 'right'),
}

let handleMoveCommands = (command) => {
	moveCommands[command](speed);
}

window.onkeypress = function(e){
	handleMoveCommands(e.key);
}
