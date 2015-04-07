function Warewolf (name, location) {
  this.name = name;
  this.location= location;
  this.isHuman = true;
}

Warewolf.prototype.change = function () {
  if (this.isHuman === true){
    this.isHuman = false;
  } else if(this.isHuman === false) {
    this.isHuman = true;
  }
}

Warewolf.prototype.isWarewolf = function () {
  if(this.isHuman === false) {
    return true;
  } else {
    return false;
  }
}

module.exports = Warewolf;
