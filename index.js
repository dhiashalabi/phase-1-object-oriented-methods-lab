function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype = {
  veto: function () {
    return "No, I must disagree";
  },
  approve: function () {
    return "You can do that!";
  },
  doCharity: function () {
    return "I like to help people.";
  },
  releasePressStatement: function () {
    return "You will see great things from Scuber.";
  },
  sayHi: function () {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
  }
};

var boardMember1 = new BoardMember("Ali", "Ahmed", "Muhammad");
console.log(boardMember1.sayHi());
console.log(boardMember1.approve());
