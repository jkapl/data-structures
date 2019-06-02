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

  obj.contains = function (val, node) {
    node = node || obj;

    if (node.value === val) {
      return true;
    }

    if (node.value < val) {
      if (node.right) {
        return obj.contains(val, node.right);
      } else {
        if (node.left) {
          return obj.contains(val, node.left);
        }
      }
    }
    return false;
  }

  obj.depthFirstLog = function (cb, node) {
    node = node || obj;

    cb(node.value);

    if (node.left) {
      obj.depthFirstLog(cb, node.left);
    }
    if (node.right) {
      obj.depthFirstLog(cb, node.right);
    }

     
  }

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
