describe("Test group for front-app", function(){

	it("should return a second pow", function(){
		expect(Math.pow(2, 2)).toBe(4);
	})

})

function cutNumb(x){
	return this.x = Math.floor(this.x);
}

//--------------SECOND---------------

describe("Test for working with numbers", function(){

	it("should cut the fraction", function(){
		expect(cutNumb(5.333)).toBe(5);
	})

	it("should round up the number", function(){
		expect(roundNumb(3.3)).toBe(3);
	})

})

function changingLine(line){
	for(var i=0; i<line.length)
		if(line[i]=="a") line[i]=="o";
}

//--------------THIRD----------------

var line = "Kanban";
var line1 = "Konbon";

describe("Working with lines", function(){

	it("should change letter 'a' to letter 'o' ", function(){
		expect(changingLine(line)).toBe(line1);
	})


})