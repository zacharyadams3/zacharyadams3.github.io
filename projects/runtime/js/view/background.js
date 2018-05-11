(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var buildings = [];
        var mountains;
        var mountains2;
        var mountains3;
        var mountains4;
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // TODO: 3 - YOUR DRAW CODE GOES HERE
           
            
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            //-groundY is not original code. May cause problems.
            var backgroundFill = draw.rect(canvasWidth,groundY,'blue');
            background.addChild(backgroundFill);
            
            var moon = draw.bitmap('img/moon.png');
            moon.x = -100;
            moon.y = 120;
            moon.scaleX = 0.4;
            moon.scaleY = 0.4;
            background.addChild(moon);
            
            var sun = draw.bitmap('img/sun.png');
            sun.x = 1200;
            sun.y = 120;
            sun.scaleX = 0.4;
            sun.scaleY = 0.4;
            background.addChild(sun);
            
            //code for mountains
            
            mountains = draw.bitmap('img/snowy-mountain.png');
            mountains.x = 0;
            mountains.y = 70;
            mountains.scaleX = 1;
            mountains.scaleY = 1;
            background.addChild(mountains);
            
            mountains2 = draw.bitmap('img/snowy-mountain2.png');
            mountains2.x = 650;
            mountains2.y = 70;
            mountains2.scaleX = 1;
            mountains2.scaleY = 1;
            background.addChild(mountains2);
            
            mountains3 = draw.bitmap('img/snowy-mountain.png');
            mountains3.x = 1301;
            mountains3.y = 70;
            mountains3.scaleX = 1;
            mountains3.scaleY = 1;
            background.addChild(mountains3);
            
            mountains4 = draw.bitmap('img/snowy-mountain2.png');
            mountains4.x = 1951;
            mountains4.y = 70;
            mountains4.scaleX = 1;
            mountains4.scaleY = 1;
            background.addChild(mountains4);
            
            var snowflake
            for(var i=0;i<200;i++) {
                snowflake = draw.bitmap('img/Snowflake.png');
                snowflake.x = canvasWidth*Math.random();
                snowflake.y = (canvasHeight-groundY)*Math.random();
                snowflake.scaleX = 0.015;
            snowflake.scaleY = 0.015;
            background.addChild(snowflake);
            }
            
           /* 
            var shape1 = draw.rect(5,20,'red');
            shape1.x=50;
            shape1.y=50;
            background.addChild(shape1);
            
            //shape2 is a circle
               var shape2 = draw.circle(3, 'white','light gray',1);
            shape2.x=60;
            shape2.y=60;
            background.addChild(shape2);
            */
            
            backgroundBox = draw.rect(100,100,'green');
            backgroundBox.x = 1000;
            backgroundBox.y = 216;
            //background.addChild(backgroundBox);
            
            var buildingHeight;
            var building;
            for(var i=0;i<6;++i) {
                building = draw.rect(75, buildingHeight*100, 'green', 'black',1);
                buildingHeight = Math.random()-2;
                building.x = 200*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
                 
        }
       
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
        backgroundBox.x = backgroundBox.x - 1;
            
        if(backgroundBox.x < -100) {
            backgroundBox.x = canvasWidth;
        }   
            
        for(var index = 0; index < buildings.length;  ++index ){
            buildings[index].x = buildings[index].x -1;
            
            if(buildings[index].x < -100) {
                buildings[index].x = canvasWidth;
            }
        }
         
         // code for mountain movement
         mountains.x = mountains.x - 0.5;
        if(mountains.x < -1300) {
            mountains.x = canvasWidth;
        }   
        
        mountains2.x = mountains2.x - 0.5
        if(mountains2.x < -1300) {
            mountains2.x = canvasWidth;
        }   
        
        mountains3.x = mountains3.x - 0.5
        if(mountains3.x < -1300) {
            mountains3.x = canvasWidth;
        }   
        
        mountains4.x = mountains4.x - 0.5
        if(mountains4.x < -1300) {
            mountains4.x = canvasWidth;
        }   
        
        
        
        
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));