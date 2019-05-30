var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {
    push: function (value) {
    var length = Object.keys(this.storage).length;
    this.storage[length] = value;
  },

  pop: function () {
    var last = Object.keys(this.storage).length;
    var item = this.storage[last - 1];
    delete this.storage[last - 1];
    return item;
    
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};


