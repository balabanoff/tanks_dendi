window.onclick = (e) => {
	renderShot[dyloSide](shotCoordinate);
}

const animateShoot = (shotCoordinate, xSd, ySd, clearCoordinate) => {
	const {x, y} = shotCoordinate;	
	let i = x; 
	let k = y;

	let anim = setInterval(() => {
		if(i == sceneWidth) clearInterval(anim);
		i+=xSd;
		k+=ySd;
		clearRegion(i+clearCoordinate[0], k+clearCoordinate[1], 8, 8);
		drawSquare({x: i, y: k}, 5);
	},shootSpeed);	
}

const drawDylo = (x, y, dyloSize) => {
	drawSquare({x:x,y:y}, dyloSize)
}

let renderDylo = {
	'top': (x, y, dyloSize) => {		
		let currentDyloX = x+(playerSquareSize/2);
		let currentDyloY = y-dyloSize;

		shotCoordinate = {
			x: currentDyloX, 
			y: currentDyloY - shotStart
		};

		drawDylo(currentDyloX, currentDyloY, dyloSize);
		dyloSide='top';
	},
	'bottom': (x, y, dyloSize) => {
		let currentDyloX = x+(playerSquareSize/2);
		let currentDyloY = y+playerSquareSize;

		shotCoordinate = {
			x: currentDyloX, 
			y: currentDyloY + shotStart
		};

		drawDylo(currentDyloX, currentDyloY, dyloSize);
		dyloSide='bottom';
	},
	'left': (x, y, dyloSize) => {		
		let currentDyloX = x-dyloSize;
		let currentDyloY = y+(playerSquareSize/2);

		shotCoordinate = {
			x: currentDyloX-shotStart,
			y: currentDyloY
		};

		drawDylo(currentDyloX, currentDyloY, dyloSize);
		dyloSide='left';
	},
	'right': (x, y, dyloSize) => {
		let currentDyloX = x+playerSquareSize;
		let currentDyloY = y+(playerSquareSize/2);
		
		shotCoordinate = {
			x: currentDyloX + shotStart, 
			y: currentDyloY
		};

		drawDylo(currentDyloX, currentDyloY, dyloSize);
		dyloSide='right';
	}
}

let renderShot = {
	'top': () => {
		animateShoot(shotCoordinate, 0, -sd, [-1, 8])
	},
	'bottom': () => {
		animateShoot(shotCoordinate, 0, sd, [-1, -8])
	},
	'left': () => {
		animateShoot(shotCoordinate, -sd, 0, [8, -1])
	},
	'right': () => {
		animateShoot(shotCoordinate, sd, 0, [-8, -1])
	}
}
