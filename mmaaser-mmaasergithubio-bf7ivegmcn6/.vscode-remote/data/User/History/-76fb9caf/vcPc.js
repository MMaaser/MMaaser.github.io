
window.addEventListener('load', function () {
https://www.reddit.com/r/learnprogramming/comments/8ycvh8/phaser_problems_phaser_not_defined_possible/
	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade'
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Boot", Boot, true);
	game.scene.add("Level", Level);
	game.scene.add("Fight", Fight);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}