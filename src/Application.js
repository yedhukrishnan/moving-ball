var moveBall = function(move) {
    try {
        ballArea = $(".ball-area");
        var leftValue = +ballArea.data(move.direction);       
        // Check if the key press is an arrow key.
	if(((leftValue + move.offset) != -1) && ((leftValue + move.offset) != 92))
	    leftValue += move.offset;
        // Move the ball to the new position.
        $(".ball-area").css(move.direction, leftValue + "%");
        // Update the data attribute.
        ballArea.data(move.direction, leftValue);
    } catch (x) {
        console.log("Not arrow key!");
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
