// You can write more code here
/* START OF COMPILED CODE */

exports.textbox = textbox;
	/* START-USER-CODE */
		function textbox (input, imageKey){
		console.log("this");
		var whiteHexCode = 0xFFFFFF;
		var blackHexCode = 0x1000000;
		
		const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
		const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
		colorWhite.fillRectShape(backRect);
	
		const frontRect = new Phaser.Geom.Rectangle(105,505,1070,190);
		const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
		colorBlack.fillRectShape(frontRect);
	
		const welcome = this.add.text(600, 600, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = input;
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		this.add.image(200,600, imageKey);
	}
	

/* END OF COMPILED CODE */
// You can write more code here
