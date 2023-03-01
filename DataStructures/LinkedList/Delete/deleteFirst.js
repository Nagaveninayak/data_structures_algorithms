/**
 * ? Delete the first node
 */

//TODO: Create a linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(11);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

//* Delete the first node
function deleteFirstNode() {
  let first_node = list.head;
  list.head = first_node.next;
}

deleteFirstNode();
console.log("delete list", list);
