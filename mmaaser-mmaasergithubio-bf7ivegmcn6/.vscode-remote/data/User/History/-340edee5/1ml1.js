export function textbox (){
        var whiteHexCode = 0xFFFFFF;
		var blackHexCode = 0x1000000;
		
        const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
		const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
		colorWhite.fillRectShape(backRect);

		const frontRect = new Phaser.Geom.Rectangle(112.5,512.5,1055,175);
		const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
		colorBlack.fillRectShape(frontRect);
        console.log("this is good");

        /*const welcome = this.add.text(640, 478, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = input;
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });*/
}