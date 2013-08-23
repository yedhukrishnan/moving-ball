var moveBall = function(move) {
    try {
        ballArea = $(".ball-area");
        var leftValue = +ballArea.data(move.direction);
        
	if(((leftValue + move.offset) != -1)&&((leftValue + move.offset) != 92))
	    leftValue += move.offset;

        $(".ball-area").css(move.direction, leftValue + "%");
        ballArea.data(move.direction, leftValue);
    } catch (x) {
        console.log("invalid key");
    } 
}

$(document).ready(function() {
    $(document).keydown(function(event){
        var moveData = { 37: {direction: "left", offset: -1}, 
                         38: {direction: "top",  offset: -1},
                         39: {direction: "left", offset:  1},
                         40: {direction: "top",  offset:  1} };

        moveBall(moveData[event.keyCode]);
    });
});
