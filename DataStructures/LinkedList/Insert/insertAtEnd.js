/**
 * 4 types of inserting
 * 1. Insert at the beginning of node
 * 2. Insert in between nodes
 * 3. Insert at the end of node
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
let node3 = new Node(11);

node1.next = node2;
node2.next = node3;

let list = new List(node1);
console.log("🚀 ~ file: insertAtEnd.js:29 ~ list:", list);

//TODO: Insert the list at the end of the node
function insertAtEnd(node_data) {
  let new_node = new Node(node_data);
  let current_node = list.head;
  while (current_node != null) {
    if (current_node.next === null) {
      current_node.next = new_node;
      break;
    }
    current_node = current_node.next;
  }
}

insertAtEnd(17);
console.log(list.head.next);

/**
 * ?. Time complexity should be O(n), since we are using a loop and traversing through the list
 */
