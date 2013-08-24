var makeKeyPress = function(keyCode) {
    var keyPress = jQuery.Event("keydown", keyCode);
    $(document).trigger(keyPress);
}

describe("index.html", function() {
             it("should have an element to hold image", function() {
                    expect($(".ball-area")).toExist();
                }); 
             it("should have an image of the ball", function() {
                    expect($("img")).toHaveAttr("src", "images/ball.png");
                });
             
         });

describe("Application", function() {
             describe("Valid ball movements", function() {
                          beforeEach(function() {
                                         $(".ball-area").data("left", "40");
                                         $(".ball-area").data("top", "45");
                                     });
                          it("Should move the ball left when left arrow key is pressed", function() {
                                 makeKeyPress({ keyCode: 37 });
                                 expect($(".ball-area").data("left")).toEqual(39);
                             });
                          it("Should move the ball up when up arrow key is pressed", function() {
                                 makeKeyPress({ keyCode: 38 });
                                 expect($(".ball-area").data("top")).toEqual(44);
                             });
                          it("Should move the ball right when right arrow key is pressed", function() {
                                 makeKeyPress({ keyCode: 39 });
                                 expect($(".ball-area").data("left")).toEqual(41);
                             });
                          it("Should move the ball down when down arrow key is pressed", function() {
                                 makeKeyPress({ keyCode: 40 });
                                 expect($(".ball-area").data("top")).toEqual(46);
                             });
                      });
             describe("Invalid ball movements", function() {
	                  it("Should not move the ball left when left arrow key is pressed at the left boundary", function() {
	                         $(".ball-area").data("left", "0");
                                 $(".ball-area").data("top", "45");
                                 makeKeyPress({ keyCode: 37 });
                                 expect($(".ball-area").data("left")).not.toEqual(-1);
                             });
	                  it("Should not move the ball up when up arrow key is pressed at the top boundary", function() {
	                         $(".ball-area").data("left", "40");
                                 $(".ball-area").data("top", "0");
                                 makeKeyPress({ keyCode: 38 });
                                 expect($(".ball-area").data("top")).not.toEqual(-1);
                             });
	                  it("Should not move the ball right when right arrow key is pressed at the right boundary", function() {
	                         $(".ball-area").data("left", "91");
                                 $(".ball-area").data("top", "45");
                                 makeKeyPress({ keyCode: 39 });
                                 expect($(".ball-area").data("left")).not.toEqual(92);
                             });
	                  it("Should not move the ball down when down arrow key is pressed at the bottom boundary", function() {
	                         $(".ball-area").data("left", "40");
                                 $(".ball-area").data("top", "91");
                                 makeKeyPress({ keyCode: 40 });
                                 expect($(".ball-area").data("top")).not.toEqual(92);
                             });
                      });
             
         });
