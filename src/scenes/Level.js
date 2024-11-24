//imports
//var math = require('mathjs');

/*
VARIABLES
VARIABLES
VARIABLES
*/
var walker;
var keypad;
var pointer;
var tx;
var outside;
var  menu;

var turn;


//health
var hesterHP = 100;
var pearl = {
    hp: 30,
    heal: 30,
    dmg: 15,
    inventory: true
}
var wood = {
    hp: 30,
    heal: 0, 
    dmg: 5,
    inventory: true
}
var needle = {
    hp: 50,
    heal: -20,
    dmg: 7,
    inventory: true
}
var water = {
    hp: 40,
    heal: 15,
    dmg: 4,
    inventory: false

}

var Dimmesdale = {
	hp: 60,
	preachingDmg: 3,
	dagger: 5
}
if (Dimmesdale.hp < 1){
	Dimmesdale.hp = 0;
}

var Rodger = {
	hp: 	100,
	bookDmg: 4,
	chemDmg: 7
}

var mob = {
	hp: 160,
	stoneDmg: 5,
	fatDmg: 7
}
/*
FUNCTIONS
FUNCTIONS
FUNCTIONS
*/


function randomNumber(){
	return Math.floor((Math.random() * 5)+1);
}

//big stinky fumble
function missed(){
	var num = Math.floor(Math.random() * 9);
  	if (num === 0){
		return true;
	} else {
		return false;
	}
}

function attack (item, target){
	var multiplier = randomNumber();
	var damage = multiplier * item.dmg;
	var wear = Math.floor(damage *0.25);
	target.hp = target.hp - damage;
	if (target.hp <0){
		target.hp = 0;
	}
	item.hp = item.hp - wear;
	if (item.hp <0){
		item.hp = 0;
	}
}

function heal (item){
	var multiplier = randomNumber();
	var healed = item.heal *multiplier;
	var wear = Math.floor(healed *0.25);

	if(wear < 0){
		wear = wear * -1;
	}

	hesterHP = hesterHP + healed;
	item.hp = item.hp - wear;

	if(hesterHP > 100){
		hesterHP = 100;
	}

	if(hesterHP < 1){
		hesterHP = 0;
	}

	if (item.hp <0){
		item.hp = 0;
	}
}
//should enemy use first or second attack
function firstAttack(){
	var atk = Math.floor((Math.random()*2));
	if (atk === 0){
		return true;
	} else {
		return false;
	}
}

function dimmesdaleAttack(){

	this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
				var multiplier = randomNumber();
				var damage = multiplier * Dimmesdale.preachingDmg;
				hesterHP = hesterHP - damage;
				this.add.text(260, 550,"Dimmesdale used Preaching Words. You took that damage in your soul.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.rectangle(640, 600, 1080, 200, white.color);
				this.add.rectangle(640, 600, 1070, 190, black.color);
					var multiplier = randomNumber();
					var damage = multiplier * Dimmesdale.preachingDmg;
					hesterHP = hesterHP - damage;
					this.add.text(260, 550,"Dimmesdale used Preaching Words. You took that damage in your soul.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					
					if(hesterHP < 1){
						hesterHP = 0;
					}
}



/* SCENES */
/* SCENES */
/* SCENES */

/* START OF COMPILED CODE */

class Comic extends Phaser.Scene {
	constructor() {
        super({ key: 'Comic' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("panel1", "assets/panel1.png");
		this.load.image("panel2", "assets/panel1.png");
		this.load.image("panel3", "assets/panel1.png");
		this.load.image("panel4", "assets/panel1.png");
		this.load.image("panel5", "assets/panel1.png");
		this.load.image("panel6", "assets/panel1.png");
		this.load.image("bgSUB", "assets/bgSUB.png");

	}

	/** @returns {void} */
	editorCreate() {
	var clicks = 0;
	//pointer = scene.input.activePointer;
	this.add.image(640, 360, "bgSUB");
	//pointer = scene.input.activePointer;

var comicPanel = 1;
	this.input.on('pointerdown', function (event) {
		
	if (comicPanel === 1){
		this.add.image(650,360,"panel1");
		 comicPanel = 2;
	 }else if (comicPanel === 2){
		this.add.image(650,360,"panel2");
		comicPanel = 3;
	} else if (comicPanel === 3){
		this.add.image(650,360,"panel3");
		comicPanel = 4;
	} else if (comicPanel === 4){
		this.add.image(650,360,"panel4");
		comicPanel = 5;
	} else if (comicPanel === 5){
		this.add.image(650,360,"panel5");
		comicPanel = 6;
	} else if (comicPanel === 6){
		this.add.image(650,360,"panel6");
		comicPanel = 7;
	} else if (comicPanel === 7){
		this.scene.start("Scene1");
	}
	}, this);


	}
	create() {

		this.editorCreate();

	}

	
		

	update(){

}
}

class Scene1 extends Phaser.Scene {
	constructor() {
        super({ key: 'Scene1' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.timer;

		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.spritesheet("walksprite", "assets/walksprite.jpg",{ frameWidth: 100, frameHeight:100 });
		this.load.image("street", "assets/street.png");
		this.load.image("dimmesdale", "assets/dimmesdale.png");
		this.load.image("hester", "assets/hester.png");
	}

	editorCreate(){
		this.add.image(640,360,"street");
		walker = this.physics.add.sprite(600,600,"walksprite");
		walker.setCollideWorldBounds(true);
		walker.setInteractive();

		const welcome = this.add.text(640, 40, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "^^^^^ Exit Up Here ^^^^^^";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		const framerate = 7;

		this.anims.create({
            key: 'still',
            frames: [ { key: 'walksprite', frame: 0 } ],
            frameRate: 20
        });

		this.anims.create({
            key: 'front',
            frames: this.anims.generateFrameNumbers('walksprite', { start: 1, end: 2 }),
            frameRate: framerate,
            repeat: -1
        });

		this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('walksprite', { start: 3, end: 4 }),
            frameRate: framerate,
            repeat: -1
        });

		this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('walksprite', { start: 5, end: 6 }),
            frameRate: framerate,
            repeat: -1
        });

		this.anims.create({
            key: 'back',
            frames: this.anims.generateFrameNumbers('walksprite', { start: 7, end: 8 }),
            frameRate: framerate,
            repeat: -1
        });
		keypad = this.input.keyboard.createCursorKeys();

		walker.anims.play('still', true);

	
//this.ddale();

var comicPanel = 1;
	this.input.on('pointerdown', function (event) {
		
	if (comicPanel === 1){
		outside = this.physics.add.image(640,360,"dimmesdale");
outside.scaleX = 0.2;
outside.scaleY = 0.2;
		 comicPanel = 2;
	 }else if (comicPanel === 2){
			var bigDim = this.physics.add.image(940,360,"dimmesdale");
			this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			bigDim.scaleX = 0.7;
			bigDim.scaleY = 0.7;
this.add.text(130, 550,"Hester! Oh, most wayward and afflicted soul! Dost thou not see that thy flight avails thee naught?", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
this.add.text(130, 580,"Wherefore wouldst thou heap shame upon shame, compounding thy burden by rebellion?", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
this.add.text(130, 610,"Thou dost flee from-", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

		comicPanel = 3;
	} else if (comicPanel === 3){
		this.add.image(640,360,"street");


		const aaa = this.add.text(640, 40, "", {});
		aaa.setOrigin(0.5, 0.5);
		aaa.text = "^^^^^ Exit Up Here ^^^^^^";
		aaa.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		
		outside = this.physics.add.image(640,360,"dimmesdale");
		outside.scaleX = 0.2;
		outside.scaleY = 0.2;

		var her = this.physics.add.image(940,360,"hester"); 
		her.scaleX = 0.6;
		her.scaleY = 0.6;

		this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(130, 550,"I'll kill you, Dimmesdale.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

		comicPanel = 4;
	} else if (comicPanel === 4){
		this.scene.start("Fight1");
	}
	}, this);

	
	
	}
	create(){
		this.editorCreate();
	}



	update(){
	
}
}
class Fight1 extends Phaser.Scene {
	constructor() {
        super({ key: 'Fight1' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("hester", "assets/hester.png");
		this.load.image("dimmesdale", "assets/dimmesdale.png");
		this.load.image("needles", "assets/needles.png" );
		this.load.image("wood", "assets/wood.png" );
		this.load.image("pearlItem", "assets/pearlItem.png" );
		this.load.image("wearPearl", "assets/wearPearl.jpg");
		this.load.image("wearNeedles", "assets/wearNeedles.jpg");
		this.load.image("wearWood", "assets/wearWood.jpg");
	}

	editorCreate(){
		turn = 0;
		menu = true;
		var h = this.add.image(250,320,"hester");
		h.scaleX = 0.5;
		h.scaleY = 0.5;
		var d = this.add.image(1000,220, "dimmesdale");
		d.scaleX = 0.5;
		d.scaleY = 0.5;


		keypad = this.input.keyboard.createCursorKeys();

		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);
		const red = new Phaser.Display.Color(255, 0, 0);
	



			this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
			this.input.keyboard.on('keydown-Z', event =>	{
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
				var multiplier = randomNumber();
				var damage = multiplier * Dimmesdale.preachingDmg;
				hesterHP = hesterHP - damage;
				this.add.text(260, 550,"Dimmesdale used Preaching Words. You took that damage in your soul.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(260, 600,"[b] back to your menu", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});

			this.input.keyboard.on('keydown-C', event =>	{
				menu = false;
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			if (needle.hp > 24) {var img = this.add.image(300,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(300,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(900,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(900,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(600,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(550,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(230, 550,"[n] consume a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(500, 550,'[w] consume a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(850, 550,'[p] consume pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
	
			this.add.text(500, 650,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			this.add.text(230, 550,"You ate a few needles. You do not feel good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			heal(needle);

			this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
	});

			this.input.keyboard.on('keydown-P', event =>
				{	this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					if(hesterHP != 100){
						this.add.text(230, 550,"The second you eat her, you feel her life force rushing through your veins.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"You only get an HP regain out of this, no other buffs. Womp womp.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					
					} else {
						this.add.text(230, 550,"You ate Pearl. You don't feel any different. She tasted good, though.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 580,"You consider trying again when you're injured, but then remember you can't.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 610,"Unfortunately, you can't eat her twice.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });


					}
						heal(pearl);
						pearl.hp = 0;
						this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

				});
				
			this.input.keyboard.on('keydown-W', event =>
					{
						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					this.add.text(230, 550,"You gnaw on the wood. Nothing happens.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

						});
					});
			
				
			this.input.keyboard.on('keydown-A', event =>
					{
						turn = 1;
						menu = false;
						this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			if (needle.hp > 24) {var img = this.add.image(300,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(300,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(900,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(900,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(600,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(550,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(230, 550,"[n] attack with a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(500, 550,'[w] attack with a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(850, 550,'[p] attack with pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
	
			this.add.text(500, 650,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
					

						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You threw a needle at Dimmesdale. It missed.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} else {
					attack(needle, Dimmesdale);
					this.add.text(230, 550,"You threw a needle at Dimmesdale. It hit. You now have less needles.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				});
				
			this.input.keyboard.on('keydown-W', event =>
					{

						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You swung at Dimmesdale with your wooden board and tripped.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} else {
					this.add.text(230, 550,"You hit Dimmesdale over the head with your wooden board. A bit of it broke off on his head.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(wood, Dimmesdale);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					});
			
			this.input.keyboard.on('keydown-P', event =>
						
				{

							this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You tried to throw your baby at Dimmesdale, but she wouldn't let go of your arm. ", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"It's alarming how strong she's gotten.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					} else {
					this.add.text(230, 550,"You threw Pearl at Dimmesdale, and she hit him like a bullet.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(230, 600,"If only she could heal like a bullet, and not like a baby. She doesn't look so good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(pearl, Dimmesdale);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						});
		
		});

			this.input.keyboard.on('keydown-I', event =>
			{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);

			if (needle.hp > 24) {var img = this.add.image(300,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(300,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(900,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(900,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(600,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(550,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(230, 550,"sewing needles", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(500, 550,'wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(850, 550,'pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
	

			this.add.text(850, 550,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
				});


				this.input.keyboard.on('keydown-B', event =>
					{menu = true;
						this.add.rectangle(640, 600, 1080, 200, white.color);
						this.add.rectangle(640, 600, 1070, 190, black.color);
						this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});
		


	
			
		//textbox
       // const rect1 = this.add.rectangle(640, 600, 1080, 200, white.color);
        //const rect2 = this.add.rectangle(640, 600, 1070, 190, black.color);
//hesterHP = -81	

		if (hesterHP < 1){
			this.scene.start("badEnd");
		} 
		
		

		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);

	}


	create(){
		this.editorCreate();
	}

	update(){
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		this.add.rectangle(240,80,350,80,black.color);
		this.add.text(70, 50,hesterHP + '/100', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);
		this.add.rectangle(300,64,180*(hesterHP/100),10, white.color);

		this.add.rectangle(905,50,390,80,black.color);
		this.add.text(770, 30,Dimmesdale.hp + '/60', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(1000,45,200,30, white.color);
		this.add.rectangle(1000,45,195,25, black.color);
		this.add.rectangle(1000,44,180*(Dimmesdale.hp/60),10, white.color);
			console.log("F");

			this.add.rectangle(400,670,590,50, black.color);

			this.add.text(120, 650, "needle: " + needle.hp + "/50 hp", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(320, 650,"wood: " + wood.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(520, 650,"pearl: " +pearl.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });		
			
			if (Dimmesdale.hp === 0){
		
				this.add.rectangle(640, 600, 1080, 200, white.color);
				this.add.rectangle(640, 600, 1070, 190, black.color);
				this.add.text(230, 550,"Dimmesdale died, and dropped a container of HOLY WATER.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(1000, 600,"[u] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.input.keyboard.on('keydown-U', event =>{
					this.scene.start("Scene2");
				});
					
	
			}

			if (needle.hp === 0 && wood.hp === 0 && pearl.hp === 0){
		
				this.add.rectangle(640, 600, 1080, 200, white.color);
				this.add.rectangle(640, 600, 1070, 190, black.color);
				this.add.text(230, 550,"The HP of your last item hit 0.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(230, 580,"With nothing to defend yourself with, Dimmesdale was able to kill you.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(1000, 600,"[u] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.input.keyboard.on('keydown-U', event =>{
					this.scene.start("badEnd");
				});
					
	
			}

			if (hesterHP === 0){
				this.scene.start("badEnd");
			}

}
}

class Scene2 extends Phaser.Scene {
	constructor() {
        super({ key: 'Scene2' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.spritesheet("walksprite", "assets/walksprite.jpg",{ frameWidth: 100, frameHeight:100 });
		this.load.image("street", "assets/street.png");
		this.load.image("dimmesdale", "assets/dimmesdale.png");
		this.load.image("hester", "assets/hester.png");
		this.load.image("rodger", "assets/rodger.png")
	}

	editorCreate(){
		this.add.image(640,360,"street");
		walker = this.physics.add.sprite(600,400,"walksprite");

		const welcome = this.add.text(640, 40, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "^^^^^ Exit Up Here ^^^^^^";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		const framerate = 7;

		this.anims.create({
            key: 'still',
            frames: [ { key: 'walksprite', frame: 0 } ],
            frameRate: 20
        });

		outside = this.physics.add.image(440,390,"dimmesdale");
outside.scaleX = 0.2;
outside.scaleY = 0.2;

this.add.text(400, 390,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });

var comicPanel = 1;
	this.input.on('pointerdown', function (event) {
		
	if (comicPanel === 1){
		let rod = this.add.image(650,250,"rodger");
		rod.scaleX = 0.2;
		rod.scaleY = 0.2;
		 comicPanel = 2;
	 }else if (comicPanel === 2){
		let rod = this.add.image(950,300,"rodger");
		rod.scaleX = 0.6;
		rod.scaleY = 0.6;
		comicPanel = 3;
		this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(130, 550,"Hello, I am Rodger Chillingworth. So this is what thou hast become, Hester—an adulteress, ", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(130, 580," a murderer, a scourge upon the very earth thou treadest! ", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

	} else if (comicPanel === 3){
		this.scene.start("Fight2");
	}
	}, this);

	}

	create(){
		this.editorCreate();
	}

	update(){}
}

class Fight2 extends Phaser.Scene {
	constructor() {
        super({ key: 'Fight2' });

		/* START-USER-CTR-CODE */
		// Write your code ere.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("hester", "assets/hester.png");
		this.load.image("rodger", "assets/rodger.png");
		this.load.image("needles", "assets/needles.png" );
		this.load.image("wood", "assets/wood.png" );
		this.load.image("pearlItem", "assets/pearlItem.png" );
		this.load.image("wearPearl", "assets/wearPearl.jpg");
		this.load.image("wearNeedles", "assets/wearNeedles.jpg");
		this.load.image("wearWood", "assets/wearWood.jpg");
		this.load.image("holywater", "assets/holywater.jpg");
	}

	editorCreate(){
		turn = 0;
		menu = true;
		var h = this.add.image(250,320,"hester");
		h.scaleX = 0.5;
		h.scaleY = 0.5;
		var r = this.add.image(1000,220, "rodger");
		r.scaleX = 0.5;
		r.scaleY = 0.5;

		keypad = this.input.keyboard.createCursorKeys();

		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);
		const red = new Phaser.Display.Color(255, 0, 0);
	



			this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
			this.input.keyboard.on('keydown-Z', event =>	{
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
				var multiplier = randomNumber();
				var damage = multiplier * Rodger.chemDmg;
				hesterHP = hesterHP - damage;
				this.add.text(260, 550,"Rodger threw assorted chemicals at you.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(260, 600,"[b] back to your menu", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});

			this.input.keyboard.on('keydown-C', event =>	{
				menu = false;
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
		
			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550,"[n] consume a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'[w] consume a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,'[p] consume pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,'[h] consume holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			this.add.text(230, 550,"You ate a few needles. You do not feel good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			heal(needle);

			this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
	});


	this.input.keyboard.on('keydown-H', event =>
		{
			this.add.rectangle(640, 600, 1080, 200, white.color);
	this.add.rectangle(640, 600, 1070, 190, black.color);
	
	this.add.text(230, 550,"You drank some holy water and felt oddly refreshed. Regain some HP.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	heal(water);

	this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

	
});

			this.input.keyboard.on('keydown-P', event =>
				{	this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					if(hesterHP != 100){
						this.add.text(230, 550,"The second you eat her, you feel her life force rushing through your veins.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"You only get an HP regain out of this, no other buffs. Womp womp.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					
					} else {
						this.add.text(230, 550,"You ate Pearl. You don't feel any different. She tasted good, though.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 580,"You consider trying again when you're injured, but then remember you can't.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 610,"Unfortunately, you can't eat her twice.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });


					}
						heal(pearl);
						pearl.hp = 0;
						this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

				});
				
			this.input.keyboard.on('keydown-W', event =>
					{
						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					this.add.text(230, 550,"You gnaw on the wood. Nothing happens.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

						});
					});
			
				
			this.input.keyboard.on('keydown-A', event =>
					{
						turn = 1;
						menu = false;
						this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550,"[n] attack with a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'[w] attack with a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,'[p] attack with pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,'[h] attack with holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	
	this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You threw a needle at Rodger. It missed.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} if (miss === false) {
					attack(needle, Rodger);
					this.add.text(230, 550,"You threw a needle at Rodger. It hit. You now have less needles.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				});

				this.input.keyboard.on('keydown-H', event =>
					{
							this.add.rectangle(640, 600, 1080, 200, white.color);
						this.add.rectangle(640, 600, 1070, 190, black.color);
						var miss = missed();
						if (miss){
							this.add.text(230, 550,"You tried to splash Rodger with Holy Water, but it got on your shoes.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						} if (miss === false) {
						attack(water, Rodger);
						this.add.text(230, 550,"You splashed Holy Water on Rodger. He didn't seem to care that much.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						}
						this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					});
				
			this.input.keyboard.on('keydown-W', event =>
					{

						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You swung at Rodger with your wooden board and tripped.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} else {
					this.add.text(230, 550,"You hit Rodger over the head with your wooden board. A bit of it broke off on his head.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(wood, Rodger);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					});
			
			this.input.keyboard.on('keydown-P', event =>
						
				{

							this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You tried to throw your baby at Rodger, but she wouldn't let go of your arm. ", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"It's alarming how strong she's gotten.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					} else {
					this.add.text(230, 550,"You threw Pearl at Rodger, and she hit him like a bullet.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(230, 600,"If only she could heal like a bullet, and not like a baby. She doesn't look so good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(pearl, Rodger);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						});
		
		});

			this.input.keyboard.on('keydown-I', event =>
			{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);

			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550," many sewing needles", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,' pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,' holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	

			this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
				});


				this.input.keyboard.on('keydown-B', event =>
					{menu = true;
						this.add.rectangle(640, 600, 1080, 200, white.color);
						this.add.rectangle(640, 600, 1070, 190, black.color);
						this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});
		


	
			
		//textbox
       // const rect1 = this.add.rectangle(640, 600, 1080, 200, white.color);
        //const rect2 = this.add.rectangle(640, 600, 1070, 190, black.color);
//hesterHP = -81	

		if (hesterHP < 1){
			this.scene.start("badEnd");
		} 
		
		

		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);

	}


	create(){
		this.editorCreate();
	}

	update(){
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);
		const red = new Phaser.Display.Color(255, 0, 0);


		this.add.rectangle(240,80,350,80,black.color);
		this.add.text(70, 50,hesterHP + '/100', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);
		this.add.rectangle(300,64,180*(hesterHP/100),10, white.color);

		this.add.rectangle(905,50,390,80,black.color);
		this.add.text(770, 30,Rodger.hp + '/100', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(1000,45,200,30, white.color);
		this.add.rectangle(1000,45,195,25, black.color);
		this.add.rectangle(1000,44,180*(Rodger.hp/100),10, white.color);
			console.log("F");

			this.add.rectangle(520,670,820,50, black.color);

			this.add.text(120, 650, "needle: " + needle.hp + "/50 hp", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(320, 650,"wood: " + wood.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(520, 650,"pearl: " +pearl.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });		
			this.add.text(720, 650, "holywater: " + water.hp + "/40 hp", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			if (Rodger.hp === 0){
				
					this.scene.start("Scene3");
				
	
			}

			if (hesterHP === 0){
				this.scene.start("badEnd");
			}

			if (needle.hp === 0 && wood.hp === 0 && pearl.hp === 0 && water.hp === 0){
		
				this.add.rectangle(640, 600, 1080, 200, white.color);
				this.add.rectangle(640, 600, 1070, 190, black.color);
				this.add.text(230, 550,"The HP of your last item hit 0.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(230, 580,"With nothing to defend yourself with, Dimmesdale was able to kill you.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });				this.add.text(1000, 600,"[u] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.input.keyboard.on('keydown-U', event =>{
					this.scene.start("badEnd");
				});
					
	
			}

}

}

class Scene3 extends Phaser.Scene {
	constructor() {
        super({ key: 'Scene3' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.spritesheet("walksprite", "assets/walksprite.jpg",{ frameWidth: 100, frameHeight:100 });
		this.load.image("street", "assets/street.png");
		this.load.image("dimmesdale", "assets/dimmesdale.png");
		this.load.image("hester", "assets/hester.png");
		this.load.image("rodger", "assets/rodger.png");
		this.load.image("mob", "mob/rodger.png");
	}

	editorCreate(){
		this.add.image(640,360,"street");
		walker = this.physics.add.sprite(600,400,"walksprite");

		const welcome = this.add.text(640, 40, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "^^^^^ Exit Up Here ^^^^^^";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		const framerate = 7;

		this.anims.create({
            key: 'still',
            frames: [ { key: 'walksprite', frame: 0 } ],
            frameRate: 20
        });

		outside = this.physics.add.image(440,390,"dimmesdale");
outside.scaleX = 0.2;
outside.scaleY = 0.2;

let rod = this.add.image(440,250,"rodger");
		rod.scaleX = 0.2;
		rod.scaleY = 0.2;

this.add.text(400, 390,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });
this.add.text(400, 250,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });

var comicPanel = 1;
	this.input.on('pointerdown', function (event) {
		
	if (comicPanel === 1){
		let mo = this.add.image(650,650,"mob");
		mo.scaleX = 0.35;
		mo.scaleY = 0.35;
		 comicPanel = 2;
	 }else if (comicPanel === 2){
		let mo = this.add.image(650,400,"mob");
		mo.scaleX = 0.7;
		mo.scaleY = 0.7;
		comicPanel = 3;
		this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(130, 550,'BLACKSMITH: "God in Heaven! What devilry is this?"', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(130, 580,'BRUTISH WOMAN":"Tis her! Hester Prynne! The adulteress, the cursed woman! And now... ', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(130, 610,'a murderess!" ', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	} else if (comicPanel === 3){
		this.add.rectangle(640, 600, 1080, 200, white.color);
		this.add.rectangle(640, 600, 1070, 190, black.color);
		this.add.text(130, 550,'TIMID WOMAN: "Hester, please stop! This is maniacal! We have families and lovers too. ', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		comicPanel = 4;

		this.add.text(130, 580,'just like you. Please, just think about it."', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	} else if (comicPanel === 4){
		this.add.image(640,360,"street");
		walker = this.physics.add.sprite(600,400,"walksprite");

		const welcome = this.add.text(640, 40, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "^^^^^ Exit Up Here ^^^^^^";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		comicPanel = 5;

		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		const framerate = 7;

		this.anims.create({
            key: 'still',
            frames: [ { key: 'walksprite', frame: 0 } ],
            frameRate: 20
        });

		outside = this.physics.add.image(440,390,"dimmesdale");
outside.scaleX = 0.2;
outside.scaleY = 0.2;

let rod = this.add.image(440,250,"rodger");
		rod.scaleX = 0.2;
		rod.scaleY = 0.2;

this.add.text(400, 390,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });
this.add.text(400, 250,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });
let mo = this.add.image(650,400,"mob");
		mo.scaleX = 0.35;
		mo.scaleY = 0.35;

		var her = this.physics.add.image(940,360,"hester"); 
		her.scaleX = 0.6;
		her.scaleY = 0.6;

		this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(130, 550,"...", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

		comicPanel = 5;
		//this.scene.start("Scene1");
	} else if (comicPanel === 5){
		comicPanel = 6;
		this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(130, 550,"Bring them along, I'll kill them too.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

	} else if (comicPanel === 6){
		this.scene.start("Fight3");

	}
	}, this);

	}

	create(){
		this.editorCreate();
	}

	update(){}
}

class Fight3 extends Phaser.Scene {
	constructor() {
        super({ key: 'Fight3' });

		/* START-USER-CTR-CODE */
		// Write your code ere.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("hester", "assets/hester.png");
		this.load.image("rodger", "assets/rodger.png");
		this.load.image("needles", "assets/needles.png" );
		this.load.image("wood", "assets/wood.png" );
		this.load.image("pearlItem", "assets/pearlItem.png" );
		this.load.image("wearPearl", "assets/wearPearl.jpg");
		this.load.image("wearNeedles", "assets/wearNeedles.jpg");
		this.load.image("wearWood", "assets/wearWood.jpg");
	}

	preload(){
		this.load.image("hester", "assets/hester.png");
		this.load.image("mob", "assets/mob.png");
		this.load.image("needles", "assets/needles.png" );
		this.load.image("wood", "assets/wood.png" );
		this.load.image("pearlItem", "assets/pearlItem.png" );
		this.load.image("wearPearl", "assets/wearPearl.jpg");
		this.load.image("wearNeedles", "assets/wearNeedles.jpg");
		this.load.image("wearWood", "assets/wearWood.jpg");
		this.load.image("holywater", "assets/holywater.jpg");
	}

	editorCreate(){
		turn = 0;
		menu = true;
		var h = this.add.image(250,320,"hester");
		h.scaleX = 0.5;
		h.scaleY = 0.5;
		var r = this.add.image(1000,220, "mob");
		r.scaleX = 0.5;
		r.scaleY = 0.5;

		keypad = this.input.keyboard.createCursorKeys();

		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);
		const red = new Phaser.Display.Color(255, 0, 0);
	



			this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
			this.input.keyboard.on('keydown-Z', event =>	{
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
				var multiplier = randomNumber();
				var damage = multiplier * mob.stoneDmg;
				hesterHP = hesterHP - damage;
				this.add.text(260, 550,"The mob threw stones at you.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(260, 600,"[b] back to your menu", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});

			this.input.keyboard.on('keydown-C', event =>	{
				menu = false;
				this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
		
			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550,"[n] consume a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'[w] consume a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,'[p] consume pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,'[h] consume holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			this.add.text(230, 550,"You ate a few needles. You do not feel good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			heal(needle);

			this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

			
	});


	this.input.keyboard.on('keydown-H', event =>
		{
			this.add.rectangle(640, 600, 1080, 200, white.color);
	this.add.rectangle(640, 600, 1070, 190, black.color);
	
	this.add.text(230, 550,"You drank some holy water and felt oddly refreshed. Regain some HP.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	heal(water);

	this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

	
});

			this.input.keyboard.on('keydown-P', event =>
				{	this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					if(hesterHP != 100){
						this.add.text(230, 550,"The second you eat her, you feel her life force rushing through your veins.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"You only get an HP regain out of this, no other buffs. Womp womp.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					
					} else {
						this.add.text(230, 550,"You ate Pearl. You don't feel any different. She tasted good, though.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 580,"You consider trying again when you're injured, but then remember you can't.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 610,"Unfortunately, you can't eat her twice.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });


					}
						heal(pearl);
						pearl.hp = 0;
						this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

				});
				
			this.input.keyboard.on('keydown-W', event =>
					{
						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					this.add.text(230, 550,"You gnaw on the wood. Nothing happens.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

						});
					});
			
				
			this.input.keyboard.on('keydown-A', event =>
					{
						turn = 1;
						menu = false;
						this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);
			
			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550,"[n] attack with a needle", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'[w] attack with a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,'[p] attack with pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,'[h] attack with holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	
	this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
			this.input.keyboard.on('keydown-N', event =>
				{
						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You tried to grab a needle, but your shaking hands dropped it.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} if (miss === false) {
					attack(needle, mob);
					this.add.text(230, 550,"You threw a needle at the mob. It hit. You now have less needles.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				});

				this.input.keyboard.on('keydown-H', event =>
					{
							this.add.rectangle(640, 600, 1080, 200, white.color);
						this.add.rectangle(640, 600, 1070, 190, black.color);
						var miss = missed();
						if (miss){
							this.add.text(230, 550,"You tried to splash the mob with Holy Water, but it got on your shoes.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						} if (miss === false) {
						attack(water, mob);
						this.add.text(230, 550,"You splashed Holy Water on the mob. They don't seem to care.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						}
						this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					});
				
			this.input.keyboard.on('keydown-W', event =>
					{

						this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You swung at the mob with your wooden board and tripped.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					} else {
					this.add.text(230, 550,"You hit a mob member over the head with your wooden board. A bit of it broke off on his head.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(wood, mob);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					});
			
			this.input.keyboard.on('keydown-P', event =>
						
				{

							this.add.rectangle(640, 600, 1080, 200, white.color);
					this.add.rectangle(640, 600, 1070, 190, black.color);
					var miss = missed();
					if (miss){
						this.add.text(230, 550,"You tried to throw your baby at the mob, but she wouldn't let go of your arm. ", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(230, 600,"It's alarming how strong she's gotten.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });

					} else {
					this.add.text(230, 550,"You threw Pearl at the mob, and she hit them like a bullet.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					this.add.text(230, 600,"If only she could heal like a bullet, and not like a baby. She doesn't look so good.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
					attack(pearl, mob);
					}
					this.add.text(1000, 600,"[z] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						});
		
		});

			this.input.keyboard.on('keydown-I', event =>
			{
					this.add.rectangle(640, 600, 1080, 200, white.color);
			this.add.rectangle(640, 600, 1070, 190, black.color);

			if (needle.hp > 24) {var img = this.add.image(220,630, "needles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (needle.hp < 24 && needle.hp > 0) {var img = this.add.image(220,630,"wearNeedles"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp > 15) {var img = this.add.image(850,630, "pearlItem"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (pearl.hp < 24 && pearl.hp > 0) {var img = this.add.image(850,630,"wearPearl"); img.scaleX = 0.5; img.scaleY = 0.5;}
			if (wood.hp > 15) {var img = this.add.image(520,630, "wood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (wood.hp < 24 && wood.hp > 0) {var img = this.add.image(520,630,"wearWood"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp > 19) {var img = this.add.image(1000,630, "holywater"); img.scaleX = 0.7; img.scaleY = 0.7;}
			if (water.hp < 21 && water.hp > 0) {var img = this.add.image(1000,630,"wearWater"); img.scaleX = 0.7; img.scaleY = 0.7;}

			if (needle.hp > 0) {
				this.add.text(130, 550," many sewing needles", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			}
			if (wood.hp > 0) {this.add.text(375, 550,'a wooden board', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		}
			if (pearl.hp > 0) {this.add.text(700, 550,' pearl', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}
		if (water.hp > 0){this.add.text(900, 550,' holy water', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
	}	
	

			this.add.text(950, 520,'[b] go back', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			
				});


				this.input.keyboard.on('keydown-B', event =>
					{menu = true;
						this.add.rectangle(640, 600, 1080, 200, white.color);
						this.add.rectangle(640, 600, 1070, 190, black.color);
						this.add.text(260, 550,"[i] view inventory", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(500, 550,'[a] attack with a weapon', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
						this.add.text(780, 550,'[c] consume an item', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			});
		


	
			
		//textbox
       // const rect1 = this.add.rectangle(640, 600, 1080, 200, white.color);
        //const rect2 = this.add.rectangle(640, 600, 1070, 190, black.color);
//hesterHP = -81	

		if (hesterHP < 1){
			this.scene.start("badEnd");
		} 
		
		

		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);

	}


	create(){
		this.editorCreate();
	}

	update(){
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);
		const red = new Phaser.Display.Color(255, 0, 0);


		this.add.rectangle(240,80,350,80,black.color);
		this.add.text(70, 50,hesterHP + '/100', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(300,65,200,30, white.color);
		this.add.rectangle(300,65,195,25, black.color);
		this.add.rectangle(300,64,180*(hesterHP/100),10, white.color);

		this.add.rectangle(905,50,390,80,black.color);
		this.add.text(770, 30,mob.hp + '/160', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
		this.add.rectangle(1000,45,200,30, white.color);
		this.add.rectangle(1000,45,195,25, black.color);
		this.add.rectangle(1000,44,180*(mob.hp/160),10, white.color);
			console.log("F");

			this.add.rectangle(520,670,820,50, black.color);

			this.add.text(120, 650, "needle: " + needle.hp + "/50 hp", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(320, 650,"wood: " + wood.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			this.add.text(520, 650,"pearl: " +pearl.hp + '/30 hp', { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });		
			this.add.text(720, 650, "holywater: " + water.hp + "/40 hp", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
			if (mob.hp === 0){
				
					this.scene.start("Scene3");
				
	
			}

			if (hesterHP === 0){
				this.scene.start("badEnd");
			}

			if (needle.hp === 0 && wood.hp === 0 && pearl.hp === 0 && water.hp === 0){
		
				this.add.rectangle(640, 600, 1080, 200, white.color);
				this.add.rectangle(640, 600, 1070, 190, black.color);
				this.add.text(230, 550,"The HP of your last item hit 0.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.add.text(230, 580,"With nothing to defend yourself with, Dimmesdale was able to kill you.", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });				this.add.text(1000, 600,"[u] continue", { fontFamily: 'Serif', fontSize: 25, color: '#ffffff' });
				this.input.keyboard.on('keydown-U', event =>{
					this.scene.start("badEnd");
				});
					
	
			}

}

}

class Scene4 extends Phaser.Scene {
	constructor() {
        super({ key: 'Scene4' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.spritesheet("walksprite", "assets/walksprite.jpg",{ frameWidth: 100, frameHeight:100 });
		this.load.image("street", "assets/street.png");
		this.load.image("dimmesdale", "assets/dimmesdale.png");
		this.load.image("hester", "assets/hester.png");
		this.load.image("rodger", "assets/rodger.png");
		this.load.image("mob", "mob/rodger.png");
	}

	editorCreate(){
		this.add.image(640,360,"street");
		walker = this.physics.add.sprite(600,400,"walksprite");

		const welcome = this.add.text(640, 40, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "^^^^^ Exit Up Here ^^^^^^";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px", "color": "#000" });
		
		const white = new Phaser.Display.Color(255, 255, 255);
        const black = new Phaser.Display.Color(0, 0, 0);

		const framerate = 7;

		this.anims.create({
            key: 'still',
            frames: [ { key: 'walksprite', frame: 0 } ],
            frameRate: 20
        });

		outside = this.physics.add.image(440,390,"dimmesdale");
outside.scaleX = 0.2;
outside.scaleY = 0.2;

let rod = this.add.image(440,250,"rodger");
		rod.scaleX = 0.2;
		rod.scaleY = 0.2;

		let mo = this.add.image(440,650,"mob");
		mo.scaleX = 0.35;
		mo.scaleY = 0.35;

this.add.text(400, 390,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });
this.add.text(400, 250,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });
this.add.text(400, 650,"dead", { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });


var comicPanel = 1;
	this.input.on('pointerdown', function (event) {
		
	if (comicPanel === 1){
	walker.setVelocityY(-200);
		 comicPanel = 2;
	 }else if (comicPanel === 2){
		if (pearl.hp = 0){
			this.scene.start("midEnd");
		} else {
			this.scene.start("goodEnd");
		}
	} 
	}, this);

	}

	create(){
		this.editorCreate();
	}

	update(){}
}

class midEnd extends Phaser.Scene{
	constructor() {
        super({ key: 'midEnd' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("midEnd", "assets/midEnd.png");
	}

	editorCreate(){
		this.add.image(640, 360, "midEnd");
	}

	create(){
		this.editorCreate();
	}
}

class goodEnd extends Phaser.Scene{
	constructor() {
        super({ key: 'goodEnd' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("goodEnd", "assets/goodEnd.png");
	}

	editorCreate(){
		this.add.image(640, 360, "goodEnd");
	}

	create(){
		this.editorCreate();
	}
}

class badEnd extends Phaser.Scene {
	constructor() {
        super({ key: 'badEnd' });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(){
		this.load.image("badEnd", "assets/badEnd.png");
	}

	editorCreate(){
		this.add.image(640, 360, "badEnd");
		this.add.text(400, 390,, { fontFamily: 'Arial', fontSize: 40, color: '#5c0000' });

	}

	create(){
		this.editorCreate();
	}

	update(){}
}

// 
class Level extends Phaser.Scene {

	constructor() {
        super({ key: 'Level' });


	}

	preload(){
		this.load.image("guapen", "assets/guapen");

	}

	editorCreate() {
	
		// dino
		
		const dino = this.add.image(640, 288, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);

		walker = this.physics.add.image(300,300, "guapen");
		walker.setInteractive();
		walker.setCollideWorldBounds(true);

		keypad = this.input.keyboard.createCursorKeys();


		walker.setCollideWorldBounds(true);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(dino);

		//const onWalkerDownScript = new On

		// pushActionScript
		new PushActionScript(onPointerDownScript);
		///new PushActionScript(onWalkerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(dino);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// welcome
		const welcome = this.add.text(640, 478, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "Phaser 3 + Phaser Editor 2D";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(welcome);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "TOP";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 1000;

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.events.emit("scene-awake");

		this.input.once('pointerdown', function (event) {
			console.log("mouse recongized");
			this.scene.start('Fight');
        }, this);
	
		
	}

	

	// Write more your code here

	create() {

		this.editorCreate();

	}

	update(){

		var isUpDown = keypad.up.isDown;
		var isDownDown = keypad.down.isDown;
		var isLeftDown = keypad.left.isDown;
		var isRightDown = keypad.right.isDown;

		if (isUpDown){
			walker.setVelocityY(-200);
		} else if (isDownDown){
			walker.setVelocityY(200);
		} else if (isLeftDown){
			walker.setVelocityX(-200);
		} else if (isRightDown){
			walker.setVelocityX(200);
		} else {
			walker.setVelocityX(0);
			walker.setVelocityY(0);
		}

	}

	
}

// You can write more code here
class Fight extends Phaser.Scene 
{

	constructor() {
        super({ key: 'Fight' });

		// Write your code here.
	} 

	preload(){
		this.load.image("guapen", "assets/guapen");
	}

	/** @returns {void} */
	editorCreate() {
		//creates keypad
		//TEXTBOX();

		const backRect = new Phaser.Geom.Rectangle(100,500,1080,200);
		//const colorWhite = this.add.graphics({ fillStyle: { color: whiteHexCode } });
		//colorWhite.fillRectShape(backRect);
	
		//const frontRect = new Phaser.Geom.Rectangle(105,505,1070,190);
		//const colorBlack = this.add.graphics({ fillStyle: { color: blackHexCode } });
		//colorBlack.fillRectShape(frontRect);

		keypad = this.input.keyboard.createCursorKeys();
		this.add.image(300,300, "guapen");
		this.add.text(100, 200, 'aaa', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
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
			//textbox("enter","guapen");
			this.add.image(200,600, "guapen");
			//console.log("work");
		}
	}

	/* END-USER-CODE */
	
}


/* END OF COMPILED CODE */
// You can write more code here

/* END OF COMPILED CODE */

// You can write more code here

