

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (_.contains(this._storage[index], k)) {
    var indexOfK = this._storage[index].indexOf(k);
    this._storage[index][indexOfK + 1] = v;
  } if (!this._storage[index]) {
    this._storage[index] = [k, v];
  } else {
    this._storage[index].push(k, v);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (_.contains(this._storage[index], k)) {
    var indexOfK = this._storage[index].indexOf(k);
    return this._storage[index][indexOfK + 1];
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexOfK = this._storage[index].indexOf(k);
  this._storage[index].splice(indexOfK, 2);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


