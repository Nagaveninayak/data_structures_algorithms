/**
 * ?: Basic structure of the circular linked list
 * ?: where the last node is pointing to the first node
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node1; //points to the head itself

let linkedList = new List(node1);
console.log(
  "🚀 ~ file: structure.js:26 ~ linkedList:",
  linkedList,
  linkedList.head,
  linkedList.head.next,
  linkedList.head.next.next
);
