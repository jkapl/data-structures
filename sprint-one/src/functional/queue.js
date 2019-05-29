var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var length = Object.keys(storage).length;
    storage[length] = value;
    return storage;
  };

  someInstance.dequeue = function() {
    //var length = Object.keys(storage).length;
    var item = storage[0];
    delete storage[0];
    var index = 0;
    var obj = {};
    for (var key in storage) {
      obj[index] = storage[key];
    }
    storage = obj;
    // for (var key in storage) {
    //   storage[index] = storage[key];
    //   index++;
    // }
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


// obj.enqueue(5);

// obj.spot = 5

// obj = {1: value,}

// {1:value, 2:value, 3:value}
// {2:value, 3:value}