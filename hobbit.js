function Hobbit(name){
	this.name = name;
	this.age = 0;
};

Hobbit.prototype.disposition = function(mood){
	if (typeof(mood) == "undefined" && mood == null) {
		return this.mood = "Lazy";
	} else {
		return this.mood = mood;
	}
};

Hobbit.prototype.celebrateBirthday = function() {
	this.age += 1
};

Hobbit.prototype.isAdult = function() {
	if(this.age <= 32) {
		return false
	} else {
		return true
	}
};

module.exports = Hobbit 
