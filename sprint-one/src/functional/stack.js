var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var length = Object.keys(storage).length;
    storage[length] = value;
    return storage;
  };

  someInstance.pop = function() {
    var last = Object.keys(storage).length;
    var item = storage[last-1];
    delete storage[last-1];
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
