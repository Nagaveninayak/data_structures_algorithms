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

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(11);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

//TODO: 2. Insert in between nodes - this one for a particular element
function insertBetween(node_position, new_data) {
  let new_node = new Node(new_data);
  let current = list.head;
  while (current != null) {
    if (current.data == node_position) {
      let temp_next = current.next;
      current.next = new_node;
      new_node.next = temp_next;
      break;
    }
    current = current.next;
  }
}

insertBetween(5, 9);
console.log(list.head.next);

//TODO: create a function to insert at a given position

/**
 * ?. Time complexity should be O(n), since we are using a loop and traversing through the list
 */
