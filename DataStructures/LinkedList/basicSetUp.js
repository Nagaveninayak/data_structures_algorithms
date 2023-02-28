/**
 * * Linked list are the linear data structures similar to array
 * * Each unit in linked list is a node
 * * Node contains element and the pointer
 * * Pointer will be pointing to the next element
 */

//Node --> data + pointer
class ListNode {
  constructor(data) {
    this.data = data;
    this.pointer = null;
  }
}

//Linked List
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

//creating nodes
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(9);

//assigning the pointer with the next node
node1.pointer = node2;
node2.pointer = node3;

let list = new LinkedList(node1);
console.log("🚀 ~ file: LinkedListDA.js:26 ~ list", list.head);
