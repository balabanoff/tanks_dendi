const canvas = document.querySelector('#canvasInit');
const context = canvas.getContext('2d');
const default_color = 'white';
const sceneWidth = canvas.width;
const sceneHeight = canvas.height;

const setColor = (color) => {	
	context.strokeStyle = color;
}

const movePointerTo = (x, y) => {		
	context.moveTo(x,y);
	render();
}

const drawLine = (x, y) => {	
	context.lineTo(x,y);
	render();
}

const drawSquare = (coordinates, side) => {	
	const {x, y} = coordinates;
	context.strokeStyle = goldTank;
	context.strokeRect(x, y, side, side);
	render();	
	context.strokeStyle = default_color;
}

const render = () => {	
	context.stroke();
}

const clearCanvas = () => {	
    context.clearRect(0, 0, canvas.width, canvas.height);
}



//should calc speed and dyly size and player size
const removePlayer = (x, y, size) => {	
    context.clearRect(x-12, y-12, size+27, size+27);
}

const clearRegion = (x, y, sizeX, sizeY) => {	
    context.clearRect(x, y, sizeX, sizeY);
}







