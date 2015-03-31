var Hobbit = require('./hobbit');

describe("Hobbit", function(){
	
	it("has a name", function(){
		var hobbit = new Hobbit("Bilbo");
		expect(hobbit.name).toEqual("Bilbo");
	});

	it("has a default disposition", function(){
		var hobbit = new Hobbit("Bilbo");
		expect(hobbit.disposition()).toEqual("Lazy");
	});

	it("can have a disposition", function(){
		var hobbit = new Hobbit("Bilbo");
		expect(hobbit.disposition("Adventurous")).toEqual("Adventurous");
	});

	it("grows older every year", function(){
		var hobbit = new Hobbit("Gerome");
		expect(hobbit.age).toEqual(0);
		hobbit.celebrateBirthday();
		expect(hobbit.age).toEqual(1);
	});

	it("grows older every year", function(){
		var hobbit = new Hobbit("Erome");
		expect(hobbit.age).toEqual(0);
		a = Array(32);
		for(var i = 0; i < a.length; i++){
			hobbit.celebrateBirthday();
		}
		expect(hobbit.age).toEqual(32);
	});

	it("is an adult at 33", function(){
		var hobbit = new Hobbit("Moe");
		b = Array(30);
		for(var i = 0; i < b.length; i++){
			hobbit.celebrateBirthday();
		}
		
		expect(hobbit.age).toEqual(30);
		expect(hobbit.isAdult()).toBe(false)
		
		a = Array(3);
		for(var i = 0; i < a.length; i++){
			hobbit.celebrateBirthday();
		}

		expect(hobbit.age).toEqual(33);
		expect(hobbit.isAdult()).toBe(true);
	});
});
