var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.pop = function () {
  var last = Object.keys(this.storage).length;
  var item = this.storage[last - 1];
  delete this.storage[last - 1];
  return item;
};

Stack.prototype.push = function (value) {
  var length = Object.keys(this.storage).length;
  this.storage[length] = value;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


// var stack = new Stack;