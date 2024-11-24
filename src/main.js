
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade'
		},
		fps: {
			target: 24,
			forceSetTimeOut: true
		  },
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Boot", Boot, true);
	game.scene.add("Level", Level);
	game.scene.add("Fight", Fight);

	game.scene.add("Comic", Comic);
	game.scene.add("Scene1", Scene1);
	game.scene.add("Fight1", Fight1);
	game.scene.add("Scene2", Scene2);
	game.scene.add("Fight2", Fight2);
	game.scene.add("Scene3", Scene3);
	game.scene.add("Fight3", Fight3);
	game.scene.add("Scene4", Scene4);
	game.scene.add("goodEnd", goodEnd);
	game.scene.add("midEnd", midEnd);
	game.scene.add("badEnd", badEnd);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.image("badEnd","images/badEnd.png");
	}

	create() {

		this.scene.start("Preload");
	}
}