window.onload = function () {
    createBoard();
}
var gameArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function createBoard() {
    var divCreate, divName, spanCreate, spanName;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            divName = 'house' + x + "-" + y;
            divCreate = document.createElement('DIV');
            divCreate.setAttribute('class', `house`);
            divCreate.setAttribute('id', divName);
            document.getElementById('containerGame').appendChild(divCreate);

            spanName = 'span' + x + "-" + y;
            spanCreate = document.createElement('SPAN');
            spanCreate.setAttribute('class', `houseTxt`);
            spanCreate.setAttribute('id', spanName);
            document.getElementById(divName).appendChild(spanCreate);
        }
    }
    spawnNumber();
    spawnNumber();
    updateBoard();
}

function spawnNumber() {
    var notFound = 1;
    while (notFound == 1) {
        var x = Math.floor(Math.random() * 3);
        var y = Math.floor(Math.random() * 3);

        if (gameArray[x][y] == 0) {
            gameArray[x][y] = 2;
            notFound = 0;
        }
    }
    updateBoard();
}

function updateBoard() {
    var spanSelected;
    for (var x = 0; x <= 3; x++) {
        for (var y = 0; y <= 3; y++) {
            if (gameArray[x][y] != 0) {
                spanSelected = document.getElementById('span' + x + '-' + y);
                void(spanSelected.innerHTML = gameArray[x][y]);
            }else{
                spanSelected = document.getElementById('span' + x + '-' + y);
                void(spanSelected.innerHTML = ' ');
            }
        }
    }
}



var noSpace = new Array, plus = new Array, input = 0;;
var zeroCount = 0;
var notnullCount = 0, nullCount = 0;
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        //left
        //remove spaces
        for(lines in gameArray){
            for(collum in gameArray[lines]){
                if(gameArray[lines][collum] != 0){
                    noSpace.push(gameArray[lines][collum]);
                }
            }
            //Add the numbers
            for(var house = (noSpace.length - 1); house >= 0 ; house = house - 1){
                if(noSpace[house] == noSpace[house -1]){
                    plus.push(noSpace[house] + noSpace[house]); 
                    house = house - 1;
                }else{
                    plus.unshift(noSpace[house]);
                }
            }
            while(zeroCount = 0 <= (3 - plus.length)){
                plus.push(0);
            }
            gameArray[lines] = plus;
            noSpace = new Array;
            plus = new Array;
        }
        updateBoard();
        spawnNumber();
    } else if (event.keyCode == 39) {
        //right
        //remove spaces
        for(lines in gameArray){
            for(collum in gameArray[lines]){
                if(gameArray[lines][collum] != 0){
                    noSpace.push(gameArray[lines][collum]);
                }
            }
            //Add the numbers
            for(var house = 0; house< noSpace.length; house++){
                if(noSpace[house] == noSpace[house + 1]){
                    plus.push(noSpace[house] + noSpace[house]);
                    house++;
                }else{
                    plus.push(noSpace[house]);
                }
            }
            while(zeroCount = 0 <= (3 - plus.length)){
                plus.unshift(0);
            }
            gameArray[lines] = plus;
            noSpace = new Array;
            plus = new Array;
        }
        updateBoard();
        spawnNumber();
    } else if (event.keyCode == 38) {
        //top
        for(var collum = 0; collum<=3; collum++){
            for(var line = 0; line <=3; line++){
                if(gameArray[line][collum] != 0){
                    noSpace.push(gameArray[line][collum]);
                }
            }
            for(var house = 0; house< noSpace.length; house++){
                if(noSpace[house] == noSpace[house + 1]){
                    plus.push(noSpace[house] + noSpace[house]);
                    house++;
                }else{
                    plus.push(noSpace[house]);
                }
            }
            while(zeroCount = 0 <= (3 - plus.length)){
                plus.push(0);
            }
            for(x in gameArray[collum]){
                gameArray[x][collum] = plus[x];  
            } 
            noSpace = new Array;
            plus = new Array;   
        }
        updateBoard();
        spawnNumber();
    } else if (event.keyCode == 40) {
        //down
        for(var collum = 0; collum<=3; collum++){
            for(var line = 3; line >=0; line--){
                if(gameArray[line][collum] != 0){
                    noSpace.push(gameArray[line][collum]);
                }
            }
            for(var house = 0; house< noSpace.length; house++){
                if(noSpace[house] == noSpace[house + 1]){
                    plus.push(noSpace[house] + noSpace[house]);
                    house++;
                }else{
                    plus.unshift(noSpace[house]);
                }
            }
            while(zeroCount = 0 <= (3 - plus.length)){
                plus.unshift(0);
            }
            for(x in gameArray[collum]){
                gameArray[x][collum] = plus[x];  
            } 
            noSpace = new Array;
            plus = new Array;   
        }
        updateBoard();
        spawnNumber();
    }
});