var button1, button2, button3, button4;
var form, placeholder, comfirmButton, greeting;
var player, allPlayers;
var logoBg;
var forestBackround, jungleBackround, castleBackground, villageBackground;
var startButton, storyButton, constrolsButton;
var coinPile;
var shield, shield1;
var heart1, heart2, heart3, emptyHeart1, emptyHeart2, emptyHeart3;
var story1, story2;
var death;
var firebase;
var Robin;
var friend;
var knight, warrior1, HP;
var storyImg, howToPlayImg;
var title;
var scoreCounter;
var message1;
var ground1, ground2, ground3;
var countDown;
var waveCount;
var input, confirmButton, greeting;
var form, game;

var enemiesGroup = [];
var arrowsGroup = [];

var gameState = 0;
var playerLife = 3;
var wave = 0;
var coins = 0;
var time = 0;
var dead = 0;

function preload() {
	forestBackround = loadImage("assets/backgrounds/forestBg.png");
	jungleBackround = loadImage("assets/backgrounds/jungleBg.png");
	castleBackground = loadImage("assets/backgrounds/castleBg.png");
	villageBackground = loadImage("assets/backgrounds/village_bg-transformed.jpeg");

	RobinDyingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1DyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinDyingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1DyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinWalkingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	RobinWalkingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	player2DyingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2DyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2DyingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2DyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2WalkingLeftAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	player2WalkingRightAnimation = loadAnimation(
		"assets/playerSpriteImages/A1_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A2_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A3_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A4_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/playerSpriteImages/A5_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	knightDyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightDyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightDyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightDyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightWalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	knightWalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_knightWalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);



	warrior1DyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1DyingLeftSpriteSheet-transformed-removebg-preview-removebg-preview.png"
	);
	warrior1DyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1DyingRightSpriteSheet-transformed-removebg-preview-removebg-preview.png"
	);
	warrior1WalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview (1).png",
		"assets/enemiesSpriteImages/A5_warrior1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	warrior1WalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_warrior1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);


	HPDyingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPDyingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPDyingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPDyingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPWalkingLeftAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPWalkingLeftSpriteSheet-removebg-preview-removebg-preview.png"
	);
	HPWalkingRightAnimation = loadAnimation(
		"assets/enemiesSpriteImages/A1_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A2_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A3_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A4_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png",
		"assets/enemiesSpriteImages/A5_HPWalkingRightSpriteSheet-removebg-preview-removebg-preview.png"
	);

	startButton = loadImage("assets/UI/start_button-removebg-preview.png");
	storyButton = loadImage("assets/UI/story_button-removebg-preview.png");
	constrolsButton = loadImage("assets/UI/controls_button-removebg-preview.png");

	coinPile = loadImage("assets/UI/stackOfCoins-removebg-preview.png");
	bagOfCoins = loadImage("assets/UI/bagOfCoins-removebg-preview.png");
	shield = loadImage("assets/UI/shield-removebg-preview.png");
	emptyShield = loadImage("assets/UI/shield_empty-removebg-preview.png");
	heart = loadImage("assets/UI/heart-removebg-preview (1).png");
	emptyHeart = loadImage("assets/UI/greyHeart-removebg-preview.png");

	story1 = loadImage("assets/UI/story1.png");
	story2 = loadImage("assets/UI/story2.png");

	idleLeftP1 = loadImage("assets/playerSpriteImages/A1_player1WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png");
	idleRightP1 = loadImage("assets/playerSpriteImages/A1_player1WalkingRightSpriteSheet-removebg-preview-removebg-preview.png");

	idleLeftP2 = loadImage("assets/playerSpriteImages/A1_player2WalkingLeftSpriteSheet-removebg-preview-removebg-preview.png");
	idleRightP2 = loadImage("assets/playerSpriteImages/A1_player2WalkingRightSpriteSheet-removebg-preview-removebg-preview.png");

	death = loadImage("assets/UI/skullAndCrossbones-removebg-preview.png");

	button1Img = loadImage("assets/UI/start_button-removebg-preview.png");
	button2Img = loadImage("assets/UI/story_button-removebg-preview.png");
	button3Img = loadImage("assets/UI/controls_button-removebg-preview.png");

	backImg = loadImage("assets/UI/backButtonImage-removebg-preview.png")

	leftArrow = loadImage("assets/UI/leftArrow-removebg-preview-removebg-preview.png");
	rightArrow = loadImage("assets/UI/rightArrow-removebg-preview-removebg-preview.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	database = firebase.database;

	button1 = createSprite(windowWidth / 2 - 30, 250, 275, 140);
	button1.addImage(button1Img);
	button1.scale = 0.4;

	button2 = createSprite(windowWidth / 2 - 30, 420, 250, 170);
	button2.addImage(button2Img);
	button2.scale = 0.75;

	button3 = createSprite(windowWidth / 2 - 30, 590, 220, 110);
	button3.addImage(button3Img);
	button3.scale = 0.35;

	Robin = createSprite(100, windowHeight - 100, 50, 100);
	Robin.addAnimation(
		"RDLA", RobinDyingLeftAnimation,
		"RDRA", RobinDyingRightAnimation,
		"RWLA", RobinWalkingLeftAnimation,
		"RWRA", RobinWalkingRightAnimation
	);
	Robin.addImage("idleLeftImgP1", idleLeftP1, "idleRightImgP1", idleRightP1, "deathImage", death);
	Robin.changeImage("idleLeftImgP1");

	friend = createSprite(windowWidth - 100, windowHeight - 100, 50, 100);
	friend.addAnimation(
		"P2DLA", player2DyingLeftAnimation,
		"P2DRA", player2DyingRightAnimation,
		"P2WLA", player2WalkingLeftAnimation,
		"P2WRA", player2WalkingRightAnimation
	);
	friend.addImage("idleLeftImgP2", idleLeftP2, "idleRightImgP2", idleRightP2);
	friend.changeImage("idleLeftImgP2");
	/*
		knight = createSprite(100, windowHeight - 100, 50, 100);
		knight.addAnimation(
			"RDLA", knightDyingLeftAnimation,
			"RDRA", knightDyingRightAnimation,
			"RWLA", knightWalkingLeftAnimation,
			"RWRA", knightWalkingRightAnimation
		);
		knight.addImage("idleLeftImgP1", idleLeftP1, "idleRightImgP1", idleRightP1);
		knight.changeImage("idleLeftImgP1");
	
	*/

	title = createElement("h2");
	title.position(windowWidth / 3, 5);
	title.class("customTitle");
	message = `Rogue Robin Hood!
	<br> and Friends!`
	title.html(message)

	logoBg = createSprite(445, 90, 110, 160);
	logoBg.shapeColor = rgb(3, 46, 4);

	logo = createImg("assets/UI/RRHF-transformed-removebg-preview.png");
	logo.position(windowWidth / 8 + 150, 10);
	logo.size(200, 175);

	backButton = createSprite(windowWidth - 150, windowHeight - 100, 600, 500);
	backButton.addImage(backImg);
	backButton.scale = 0.35;
	backButton.visible = false;

	howToPlayImg = createSprite(windowWidth / 2, 425, 600, 500);
	howToPlayImg.addImage("howToPlayImage", story1);
	howToPlayImg.scale = 0.55;
	howToPlayImg.visible = false;

	storyImg = createSprite(windowWidth / 2, 440, 600, 500);
	storyImg.addImage("storyImage", story2);
	storyImg.scale = 0.75;
	storyImg.visible = false;

	form = new Form();
	game = new Game();
}

function draw() {
	background("black");

	if (gameState === 0) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		textSize(25);
		fill("white");
		text("Created by Michael Tom", 20, windowHeight - 20);

		if (mousePressedOver(button1)) {
			gameState = 3
			game.updateGameState(3);
		}

		if (mousePressedOver(button2)) {
			gameState = 1
			game.updateGameState(1);
			backButton.visible = true;
		}

		if (mousePressedOver(button3)) {
			gameState = 2
			game.updateGameState(2);
			backButton.visible = true;
		}

		backButton.visible = false;
		howToPlayImg.visible = false;
		storyImg.visible = false;

		button1.visible = true;
		button2.visible = true;
		button3.visible = true;

	}

	if (gameState === 1) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		backButton.visible = true;
		howToPlayImg.visible = true;

		if (mousePressedOver(backButton)) {
			gameState = 0
		}

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

	}

	if (gameState === 2) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		backButton.visible = true;
		storyImg.visible = true;

		if (mousePressedOver(backButton)) {
			gameState = 0
		}

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;
	}

	if (gameState === 3) {
		image(jungleBackround, 0, 0, windowWidth, windowHeight);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		form.display();
	}

	if (gameState === 4) {
		image(forestBackround, 0, 0, windowWidth, windowHeight);
		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");
		Robin.velocityY += 1.5;

		ground1 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		Robin.collide(ground1);
		friend.collide(ground1);

		playerLife = 3;
		time = 120;
		wave = 1;

		showLife();
		showUI();
		constrols();

	}

	if (gameState === 5) {
		image(villageBackground, 0, 0, windowWidth, windowHeight);
		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");
		Robin.velocityY += 1.5;

		ground2 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		Robin.collide(ground1);
		friend.collide(ground1);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		playerLife = 3
		showLife();
		showUI();
		constrols();
	}

	if (gameState === 6) {
		image(castleBackground, 0, 0, windowWidth, windowHeight);
		Robin.changeImage("idleLeftImgP1");
		friend.changeImage("idleLeftImgP2");

		ground3 = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, 100);

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;

		playerLife = 3
		showLife();
		showUI();
		constrols();
	}

	//the end of the game when unsuccessful
	if (gameState === 7) {

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;
		swal({
			title: `Failed`,
			text: "You died and didn't complete the mission. Try again next time. <br> Thanks for playing!",
			imageUrl:
				"https://i.im.ge/2022/07/25/FDnGZW.png",
			imageSize: "100x100",
			confirmButtonText: "Ok"
		},
			function (isConfirm) {
				if (isConfirm) {
					location.reload();
				}
			}
		);
	}

	//the end of the game when successful
	if (gameState === 8) {

		button1.visible = false;
		button2.visible = false;
		button3.visible = false;
		swal({
			title: `Congratulations, you win!!!`,
			text: "Good job, you finished the mission. You shall go down in history! <br> Thanks for playing!",
			imageUrl:
				"https://i.im.ge/2022/07/25/FD4dXz.png",
			imageSize: "100x100",
			confirmButtonText: "Yay!"
		},
			function (isConfirm) {
				if (isConfirm) {
					location.reload();
				}
			}
		);
	}

	drawSprites();
}

function showLife() {

	emptyHeart1 = createSprite(50, 50, 20, 20);
	emptyHeart1.addImage("emptyHeartImage1", emptyHeart);
	emptyHeart1.scale = 0.3;
	emptyHeart2 = createSprite(120, 50, 20, 20);
	emptyHeart2.addImage("emptyHeartImage2", emptyHeart);
	emptyHeart2.scale = 0.3;
	emptyHeart3 = createSprite(190, 50, 20, 20);
	emptyHeart3.addImage("emptyHeartImage3", emptyHeart);
	emptyHeart3.scale = 0.3;

	heart1 = createSprite(50, 50, 20, 20);
	heart1.addImage("heartImg1", heart);
	heart1.scale = 0.25;
	heart2 = createSprite(120, 50, 20, 20);
	heart2.addImage("heartImg2", heart);
	heart2.scale = 0.25;
	heart3 = createSprite(190, 50, 20, 20);
	heart3.addImage("heartImg3", heart);
	heart3.scale = 0.25;
	//
	if (Robin.collide(enemiesGroup[i]) && keyDown("a")) {
		playerLife -= 1;
		Robin.x = Robin.x - 100
	}

	if (Robin.collide(enemiesGroup[i]) && keyDown("d")) {
		playerLife -= 1;
		Robin.x = Robin.x + 100
	}

	if (Robin.collide(enemiesGroup[i])) {
		playerLife -= 1;
	}
	//
	if (playerLife === 2) {
		heart3.visible = false;
	}

	if (playerLife === 1) {
		heart2.visible = false;
	}

	if (playerLife >= 0) {
		heart1.visible = false;
		dead = 1;
		gameState = 7;
	}
}

function spawnEnemies() {
	if (enemiesGroup.length > 0) {

		if (enemiesGroup.length < 10 && frameCount % 60 === 0) {
			//var positions = [0, windowWidth];
			//var position = random(positions);
			var enemy = createSprite(0, windowHeight - 100, 50, 100);

			var rand = Math.round(random(1, 6));
			switch (rand) {
				case 1:
					enemy.addAnimation(
						"KDLA", knightDyingLeftAnimation,
						//"KDRA", knightDyingRightAnimation,
						"KWLA", knightWalkingLeftAnimation,
						//"KWRA", knightWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("KWLA");
					enemy.x = 0;

					arrowsGroup[0].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("KDLA");
						setTimeout(enemiesGroup[0].remove(), 1000);
						collected.remove();
					});

					break;
				case 2:
					enemy.addAnimation(
						"WDLA", warrior1DyingLeftAnimation,
						//"WDRA", warrior1DyingRightAnimation,
						"WWLA", warrior1WalkingLeftAnimation,
						//"WWRA", warrior1WalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("WWLA");
					enemy.x = 0;

					arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("WDLA");
						collector.remove();
						collected.remove();
					});

					break;
				case 3:
					enemy.addAnimation(
						"HPDLA", HPDyingLeftAnimation,
						//"HPDRA", HPDyingRightAnimation,
						"HPWLA", HPWalkingLeftAnimation,
						//"HPWRA", HPWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX += 5;
					enemy.changeAnimation("HPWLA");
					enemy.x = 0;

					arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("HPDLA");
						collector.remove();
						collected.remove();
					});

					break;
				case 4:
					enemy.addAnimation(
						//"KDLA", knightDyingLeftAnimation,
						"KDRA", knightDyingRightAnimation,
						//"KWLA", knightWalkingLeftAnimation,
						"KWRA", knightWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("KWRA");
					enemy.x = windowWidth;

					arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("KDRA");
						collector.remove();
						collected.remove();
					});

					break;
				case 5:
					enemy.addAnimation(
						//"WDLA", warrior1DyingLeftAnimation,
						"WDRA", warrior1DyingRightAnimation,
						//"WWLA", warrior1WalkingLeftAnimation,
						"WWRA", warrior1WalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("WWRA");
					enemy.x = windowWidth;

					arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("WDRA");
						collector.remove();
						collected.remove();
					});

					break;
				case 6:
					enemy.addAnimation(
						//"HPDLA", HPDyingLeftAnimation,
						"HPDRA", HPDyingRightAnimation,
						//"HPWLA", HPWalkingLeftAnimation,
						"HPWRA", HPWalkingRightAnimation
					);
					enemy.velocityY += 1.5;
					enemy.velocityX -= 5;
					enemy.changeAnimation("HPWRA");
					enemy.x = windowWidth;

					arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
						coins += 10;
						enemy.changeAnimation("HPDRA");
						collector.remove();
						collected.remove();
					});

					break;
				default: break;
			}
			enemy.lifetime = 500;
			enemiesGroup.push(enemy);
		}
	}
	else {
		var enemy = createSprite(0, windowHeight - 100, 50, 100);
		var rand = Math.round(random(1, 6));
		switch (rand) {
			case 1:
				enemy.addAnimation(
					"KDLA", knightDyingLeftAnimation,
					"KWLA", knightWalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("KWLA");
				enemy.x = 0;
				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					//is there a way to make it take multiple hits to kill an enemy
					enemy.changeAnimation("KDLA");
					collector.remove();
					collected.remove();
				});

				break;
			case 2:
				enemy.addAnimation(
					"WDLA", warrior1DyingLeftAnimation,
					"WWLA", warrior1WalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("WWLA");
				enemy.x = 0;
				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					enemy.changeAnimation("WDLA");
					collector.remove();
					collected.remove();
				});

				break;
			case 3:
				enemy.addAnimation(
					"HPDLA", HPDyingLeftAnimation,
					"HPWLA", HPWalkingLeftAnimation,
				);
				enemy.velocityY += 1.5;
				enemy.velocityX += 5;
				enemy.changeAnimation("HPWLA");
				enemy.x = 0;
				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					enemy.changeAnimation("HPDLA");
					collector.remove();
					collected.remove();
				});

				break;
			case 4:
				enemy.addAnimation(
					"KDRA", knightDyingRightAnimation,
					"KWRA", knightWalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("KWRA");
				enemy.x = windowWidth;
				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					enemy.changeAnimation("KDRA");
					collector.remove();
					collected.remove();
				});

				break;
			case 5:
				enemy.addAnimation(
					"WDRA", warrior1DyingRightAnimation,
					"WWRA", warrior1WalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("WWRA");
				enemy.x = windowWidth;
				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					enemy.changeAnimation("WDRA");
					collector.remove();
					collected.remove();
				});

				break;
			case 6:
				enemy.addAnimation(
					"HPDRA", HPDyingRightAnimation,
					"HPWRA", HPWalkingRightAnimation
				);
				enemy.velocityY += 1.5;
				enemy.velocityX -= 5;
				enemy.changeAnimation("HPWRA");
				enemy.x = windowWidth;

				arrowsGroup[index].overlap(enemiesGroup, function (collector, collected) {
					coins += 10;
					enemy.changeAnimation("HPDRA");
					collector.remove();
					collected.remove();
				});

				break;
			default: break;
		}
		enemy.lifetime = 500;
		enemiesGroup.push(enemy);
	}
}

function showUI() {
	scoreCounter = createElement("h2");
	scoreCounter.position(windowWidth - 100, 15);
	scoreCounter.class("greeting");
	var message1 = `Coins: ${coins}`;
	scoreCounter.html(message1);

	countDown = createElement("h2");
	countDown.position(windowWidth - 200, 15);
	countDown.class("greeting");
	var message2 = `Time: ${time}`
	countDown.html(message2);

	if (time > 0 && frameCount % 60 === 0) {
		time -= 1
	}

	if (time <= 0 && wave > 0) {
		wave += 1;
	}

	waveCount = createElement("h2");
	waveCount.position(windowWidth / 2, windowHeight - 50);
	waveCount.class("greeting");
	var message3 = `Wave: ${wave}`;
	waveCount.html(message3);

}

function constrols() {
	if (dead <= 0) {
		if (keyDown("a")) {
			Robin.x = Robin.x - 5;
		}

		if (keyDown("d")) {
			Robin.x = Robin.x + 5;
		}

		if (keyDown("w")) {
			Robin.velocityY = -7;
		}

		if (keyDown("space") && keyDown("a")) {
			var arrow = createSprite(Robin.x, Robin.y, 80, 10);
			arrow.velocityX -= 5
			arrow.addImage("leftArrowImg", leftArrow);
			arrowsGroup.push(arrow);
		}
		if (keyDown("space") && keyDown("d")) {
			var arrow2 = createSprite(Robin.x, Robin.y, 80, 10);
			arrow2.velocity += 5;
			arrow2.addImage("rightArrowImg", rightArrow);
			arrowsGroup.push(arrow2);
		}


	}
	if (dead >= 1) {
		Robin.velocityX = 0;
		Robin.velocityY = 0;
		Robin.changeImage("deathImage");

		gameState = 7;
	}
}
