import mapChooser from '../mapChooser.js';

describe("mapChooser", function(){

    describe("valid inputs", function(){
        it("returns an image based on the input given to it", function(){
            let expected = "images/portland.png";
            let actual = mapChooser("portland");
            expect(actual).toEqual(expected);
        });

        it("returns an image based on the input given to it", function(){
            let expected = "images/astoria.png";
            let actual = mapChooser("astoria");
            expect(actual).toEqual(expected);
        });
    });
    
    describe("invalid inputs", function(){
        it("returns a default image when no input it given", function(){
            let expected = "images/None.png";
            let actual = mapChooser("");
            expect(actual).toEqual(expected);
        });

        it("returns a default image when no input it given", function(){
            let expected = "images/None.png";
            let actual = mapChooser(null);
            expect(actual).toEqual(expected);
        });
    });
});