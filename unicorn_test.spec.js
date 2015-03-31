var Unicorn = require('./unicorn')

describe('Unicorn',function() {

  it("has a name", function() {
    var unicorn = new Unicorn("Robert");
    expect(unicorn.name).toEqual("Robert");
  });

	it("is white by default", function() {
		var unicorn = new Unicorn("Batman");
    expect(unicorn.name).toEqual("Batman");
		expect(unicorn.color).toEqual("white")
	});

	it("is not white by default", function() {
		var unicorn = new Unicorn("Batman", "Purple");
    expect(unicorn.name).toEqual("Batman");
		expect(unicorn.color).toEqual("Purple")
	});

	it("is it white?", function() {
		var unicorn = new Unicorn("Batman", "Purple");
    expect(unicorn.name).toEqual("Batman");
		expect(unicorn.color).toEqual("Purple");
		expect(unicorn.isWhite()).toEqual(false);
	});

	it("says nonesense", function(){
		var unicorn = new Unicorn("Dave", "Purple")
    expect(unicorn.name).toEqual("Dave");
		expect(unicorn.color).toEqual("Purple");
		expect(unicorn.say("Wonderful")).toEqual("**Wonderful**");
	});
});
