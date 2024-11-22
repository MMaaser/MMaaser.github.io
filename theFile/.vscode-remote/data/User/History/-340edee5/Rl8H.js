function textbox (text){
    var whiteHexCode = 0xFFFFFF;
		var blackHexCode = 0x1000000;
		
        const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
		const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
		colorWhite.fillRectShape(backRect);

		const frontRect = new Phaser.Geom.Rectangle(112.5,512.5,1055,175);
		const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
		colorBlack.fillRectShape(frontRect);
}