class Form {

    constructor() {
        input = createInput("").attribute("placeholder", "Type your Username here!");
        confirmButton = createImg("assets/UI/finish_button.png");
        greeting = createElement("h2");
    
    }

    show() {
        confirmButton.position(windowWidth / 3 + 100, windowHeight / 2);
        confirmButton.size(220, 90);

        input.position(windowWidth / 3 + 100, windowHeight / 2 - 50);
        input.class("customInput");

        greeting.position(windowWidth / 5 + 25, windowHeight / 2 - 50);
        greeting.class("greeting");

    }

    hide(){
        input.hide();
        confirmButton.hide();
    }

    hideButton(){
        confirmButton.mousePressed(() => {
			confirmButton.hide();
			input.hide();
			var message = `Welcome ${input.value()}!
			<br> Please wait for other players to join your game!`
			greeting.html(message);
            gameState = 4;
		})
    }

    display(){
        this.show();
        this.hideButton();

    }
}