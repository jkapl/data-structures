var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (!list.head) {
      const newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      const newTail = Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function () {
    if (list.head) {
      const oldHead = list.head;
      list.head = list.head.next;
      oldHead.next = null;
      return oldHead.value;
    } else {
      return null;
    }
  };

  list.contains = function (target) {
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
