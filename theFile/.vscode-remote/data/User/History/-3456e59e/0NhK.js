// You can write more code here
var keypad;
/* START OF COMPILED CODE */
class Fight extends Phaser.Scene 
{

	constructor() {
        super({ key: 'Fight' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	} 

	preload(){
		this.load.image("guapen", "assets/guapen");
	}

	/** @returns {void} */
	editorCreate() {
		
		//creates keypad
		keypad = this.input.keyboard.createCursorKeys();

		
	}

	/* START-USER-CODE */
	textbox (input, imageKey){
		console.log("this");
		//this.physics.add.image(600,300, "guapen");
		var whiteHexCode = 0xFFFFFF;
		var blackHexCode = 0x1000000;
		
		const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
		const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
		colorWhite.fillRectShape(backRect);
	
		const frontRect = new Phaser.Geom.Rectangle(105,505,1070,190);
		const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
		colorBlack.fillRectShape(frontRect);
		console.log("this is good");
	
		const welcome = this.add.text(600, 600, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = input;
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		this.add.image(200,600, imageKey);
	}
	// Write more your code here

	create() {

		this.editorCreate();

	}

	update(){
		
		//arrow keys
		var isUpDown = keypad.up.isDown;
		var isDownDown = keypad.down.isDown;
		var isLeftDown = keypad.left.isDown;
		var isRightDown = keypad.right.isDown;
		//special keys
		var isSpaceDown = keypad.space.isDown;
		var isShiftDown = keypad.shift.isDown;

		if (isDownDown){
			this.textbox("enter","guapen");
			//console.log("work");
		}
	}

	/* END-USER-CODE */
	
}

function consoleLog(){
	consoleLog("this is it");
}

/* END OF COMPILED CODE */
// You can write more code here

