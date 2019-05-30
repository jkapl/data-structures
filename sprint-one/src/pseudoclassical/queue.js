var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  var length = Object.keys(this.storage).length;
  this.storage[length] = value;
};

Queue.prototype.dequeue = function () {
  var item = this.storage['0'];
  delete this.storage['0'];
  var obj = {};
  var index = 0;
  for (var key in this.storage) {
    obj[index] = this.storage[key];
  }
  this.storage = obj;
  return item;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};


