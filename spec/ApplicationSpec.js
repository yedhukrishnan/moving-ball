describe("index.html", function() {
            it("should have an element to hold image", function() {
                   expect($(".ball-area")).toExist();
               }); 
             it("should have an image of the ball", function() {
                    expect($("img")).toHaveAttr("src", "images/ball.png");
                });
             
         });

describe("Application", function() {
             beforeEach(function() {
                            $(".ball-area").data("left", "40");
                            $(".ball-area").data("top", "45");
                        });
             it("should move the ball left when left arrow key is pressed", function() {
                    var keyPress = jQuery.Event("keydown", { keyCode: 37 });
                    $(document).trigger(keyPress);
                    expect($(".ball-area").data("left")).toEqual(39);
                });
             it("should move the ball up when up arrow key is pressed", function() {
                    var keyPress = jQuery.Event("keydown", { keyCode: 38 });
                    $(document).trigger(keyPress);
                    expect($(".ball-area").data("top")).toEqual(44);
                });
             it("should move the ball right when right arrow key is pressed", function() {
                    var keyPress = jQuery.Event("keydown", { keyCode: 39 });
                    $(document).trigger(keyPress);
                    expect($(".ball-area").data("left")).toEqual(41);
                });
             it("should move the ball down when down arrow key is pressed", function() {
                    var keyPress = jQuery.Event("keydown", { keyCode: 40 });
                    $(document).trigger(keyPress);
                    expect($(".ball-area").data("top")).toEqual(46);
                });
         });
