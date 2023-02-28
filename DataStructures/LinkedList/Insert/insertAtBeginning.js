/**
 * 4 types of inserting
 * 1. Insert at the beginning of node
 * 2. Insert in between nodes
 * 3. Insert at the end of node
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

let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(7);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
console.log("🚀 ~ file: insertLinkedList.js:27 ~ list:", list.head);

//TODO: 1 Insert at the beginning of the list
//general addition without head
let firstNode = new Node(11);
firstNode.next = node1;
console.log("🚀 ~ file: insertLinkedList.js:30 ~ pointerNode:", firstNode);

//function for adding in the beginning of the list
function insertFirst(new_data) {
  let new_node = new Node(new_data);
  new_node.next = list.head;
  list.head = new_node;
}

insertFirst(2);
console.log("new list", list);

/**
 * ? Time complexity --> O(1)
 */
