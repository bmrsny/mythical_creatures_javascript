function Unicorn(name, color) {
	this.name = name;
	if(typeof(color) === 'undefined') {
		this.color = "white"
	} else {
		this.color = color;
	}
};

Unicorn.prototype.isWhite = function() {
	if (this.color === "white") { return true; }
	else                        { return false; }
};

Unicorn.prototype.say = function(word) {
	this.word = word
	return "**" + word + "**";
};

module.exports = Unicorn
