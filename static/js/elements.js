class Elements {

    constructor() {

        // Create buttons
        this.raiseButton = new Button($("#raise").attr("src"), $("#raisePressed").attr("src"), 1, "raise");
        this.lowerButton = new Button($("#lower").attr("src"), $("#lowerPressed").attr("src"), 2, "lower");

        this.slowButton = new Button($("#normalMode").attr("src"), $("#slowMode").attr("src"), 4, "slow");
        
        this.stopButton = new Button($("#stop").attr("src"), $("#stopPressed").attr("src"), 6, "stop");

        this.upButton = new Button($("#unpressed").attr("src"), $("#pressed").attr("src"), 5, "up");
        this.leftButton = new Button($("#unpressed").attr("src"), $("#pressed").attr("src"), 7, "left");
        this.leftButton.rotate(-90);
        this.downButton = new Button($("#unpressed").attr("src"), $("#pressed").attr("src"), 8, "down");
        this.downButton.rotate(180);
        this.rightButton = new Button($("#unpressed").attr("src"), $("#pressed").attr("src"), 9, "right");
        this.rightButton.rotate(90);

        // Create name sender
        this.nameSender = new NameSender();

    }

}