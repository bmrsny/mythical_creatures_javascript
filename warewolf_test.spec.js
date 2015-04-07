var Warewolf = require('./warewolf')

describe("Warewolf", function() {
  it("has a name", function() {
    var warewolf = new Warewolf("Freddy");
    expect(warewolf.name).toEqual("Freddy");
  });

  it("has a name", function() {
    var warewolf = new Warewolf("Freddy", "Clevland");
    expect(warewolf.location).toEqual("Clevland");
  });

  it("it is a human", function() {
    var warewolf = new Warewolf("Freddy", "Clevland");
    expect(warewolf.isHuman).toBe(true);
  });

  it("can change to a warewolf", function () {
    var warewolf = new Warewolf("Freddy", "Clevland");
    warewolf.change();
    expect(warewolf.isHuman).toBe(false);
    warewolf.change();
    expect(warewolf.isHuman).toBe(true);
  });

  it("checks to see if it is a warewolf", function () {
    var warewolf = new Warewolf("Freddy", "Clevland");
    warewolf.change();
    expect(warewolf.isWarewolf()).toBe(true);
  });
});
