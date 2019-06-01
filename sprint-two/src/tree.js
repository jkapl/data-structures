var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target, node = this) {
  // node = node || this;

  if (node.value === target) {
    return true;
  }
  if (node.children.length === 0) {
    return false;
  } else {
    for (let i = 0; i < node.children.length; i++) {
      var result = treeMethods.contains(target, node.children[i]);
      if (result) {
        return true
      }
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
