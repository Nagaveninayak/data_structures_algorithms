/**
 * ?: delete the last node
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

let node1 = new Node(2); //0
let node2 = new Node(5); //1
let node3 = new Node(7); //2
let node4 = new Node(11); //3
let node5 = new Node(9); //4

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let list = new LinkedList(node1);

//TODO: Delete at the given position
function deleteLastNode(list) {
  let current_node = list.head;
  let previous_node;
  while (current_node != null) {
    if (current_node.next === null) {
      console.log("sdf", previous_node, current_node);
      previous_node.next = null;
      break;
    }
    previous_node = current_node;
    current_node = current_node.next;
  }
}

deleteLastNode(list);
console.log("delete", list.head);
