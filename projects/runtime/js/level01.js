(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:1000,y:groundY}, //had to change x value from 900 to make game more playable
                {type: 'coal',x:2100,y:groundY-125},
                {type: 'coal',x:2600,y:groundY},
                {type: 'coal',x:3500,y:groundY},
                {type: 'coal',x:3800,y:groundY},
                {type: 'coal',x:4200,y:groundY},
                {type: 'redSquare',x:2200,y:groundY-25}, 
                {type: 'redSquare',x:2600,y:groundY-15},
                {type: 'redSquare',x:2900,y:groundY-115},
                {type: 'redSquare',x:3400,y:groundY-55},
                {type: 'redSquare',x:3600,y:groundY-35},
                {type: 'present',x:2800,y:groundY-130},
                {type: 'present',x:3100,y:groundY-125}
                

            ]
             /*   Take a look at levelData and notice that it is an object. 
                This is why creating a for-loop inside of this object was causing
                errors. I've moved your code down to below.
            */
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
       /*var hitZoneSize = 25;
       var damageFromObstacle = 10;
       move and adapt this code block.
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = 400;
        myObstacle.y = 200;
        game.addGameItem(myObstacle); 
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;*/
        
       
         /*var enemy =  game.createGameItem('enemy',25);
                var redSquare = draw.rect(50,50,'red');
                redSquare.x = -25;
                redSquare.y = -25;
                enemy.addChild(redSquare);
                enemy.x = 400;  //this changes x position.
                enemy.y = groundY-50;
                game.addGameItem(enemy);
                 
                 enemy.velocityX = -2;
                 enemy.rotationalVelocity = 10;*/
                 
                 function createEnemy(x,y){
                     var enemy =  game.createGameItem('enemy',25);
                var redSquare = draw.rect(50,50,'red');
                redSquare.x = -25;
                redSquare.y = -25;
                enemy.addChild(redSquare);
                enemy.x = (x);  //this changes x position.
                enemy.y = (y);
                game.addGameItem(enemy);
                 
                 enemy.velocityX = -2;
                 enemy.rotationalVelocity = 10;
                 
                 
                 //player-enemy collision
                 enemy.onPlayerCollision = function(){
                    console.log('The enemy has hit Halle'); 
                    game.changeIntegrity(-10);
                    enemy.fadeOut();
                    };
                 
                 
                 //enemy projectile collision
                 enemy.onProjectileCollision = function(){
                   console.log('Halle has hit the enemy');
                   game.increaseScore(100);
                   enemy.shrink();
                 };
                 
                     
                 }
                 createEnemy(400,groundY-50);
                 createEnemy(800,groundY-120);// had to change y value from groundY-100 to make game more playable
                 createEnemy(1400,groundY-500);
                 
                 
                 function createReward(x,y){
                     var reward =  game.createGameItem('enemy',25);
                var present = draw.bitmap('img/present.png');
                present.x = -25;
                present.y = -25;
                reward.addChild(present);
                reward.x = (x);  //this changes x position.
                reward.y = (y);
                game.addGameItem(reward);
                 
                 reward.velocityX = -1.5;
                 //reward.rotationalVelocity = 10;
                 
                 
                 //player-present collision
                 reward.onPlayerCollision = function(){
                    console.log('Halle caught the present'); 
                    game.changeIntegrity(+10);
                    reward.fadeOut();
                    };
                 
                 
                 //present-projectile collision
                 reward.onProjectileCollision = function(){
                   console.log('Halle has hit the present');
                   game.increaseScore(500);
                   reward.flyTo(x,y);
                 };
                 
                     
                 }
                 createReward(600,groundY-150);
                 createReward(1100,groundY-125);
                 createReward(1400,groundY-50);
                
                 
             //...and place code for obstacles down here.
              var createSawBlade = function(x,y){
              
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var createSawBlade = game.createObstacle(hitZoneSize,damageFromObstacle);
                createSawBlade.x = (x);
                createSawBlade.y = (y);
                game.addGameItem(createSawBlade); 
        
                var obstacleImage = draw.bitmap('img/sawblade.png');
                createSawBlade.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                
            };
            createSawBlade(1300,190);
            createSawBlade(1600,300); 
            createSawBlade(1900,200);
            
            var createCoal = function(x,y){
              
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var createCoal = game.createObstacle(hitZoneSize,damageFromObstacle);
                createCoal.x = (x);
                createCoal.y = (y);
                game.addGameItem(createCoal); 
        
                var obstacleImage2 = draw.bitmap('img/coal.png');
                createCoal.addChild(obstacleImage2);
                obstacleImage2.x = -25;
                obstacleImage2.y = -25;
            };
                createCoal(2300,200);

              for(var index = 0; index < levelData.gameItems.length; index++){
                 var gameItem = levelData.gameItems[index];
                 if (levelData.gameItems[index].type === 'sawblade'){
                  createSawBlade(gameItem.x, gameItem.y);
                 }else if (levelData.gameItems[index].type === 'coal') {
                   createCoal(gameItem.x, gameItem.y);
                 }else if (levelData.gameItems[index].type === 'redSquare') {
                   createEnemy(gameItem.x, gameItem.y);
                 }else if (levelData.gameItems[index].type === 'present'){
                   createReward(gameItem.x, gameItem.y);
}

}


    };
})(window);
