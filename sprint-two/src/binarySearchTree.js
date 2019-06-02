var BinarySearchTree = function (value) {
  var obj = {};

  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function (val, node) {
    node = node || obj;
    if (node.value < val) {
      if (node.right) {
        obj.insert(val, node.right);
      } else {
        node.right = BinarySearchTree(val);
      }
    } else {
      if (node.left) {
        obj.insert(val, node.left);
      } else {
        node.left = BinarySearchTree(val);
      }
    }
  }

  obj.contains = function (val) {

  }

  obj.depthFirstLog = function (cb) {

  }

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
