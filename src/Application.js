var moveBall = function(move) {
    try {
        ballArea = $(".ball-area");
        var leftValue = +ballArea.data(move.direction);
        /* 
         * Code to Restrict 
         * */
        $(".ball-area").css(move.direction, (leftValue + move.offset) + "%");
        ballArea.data(move.direction, (leftValue + move.offset));
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
