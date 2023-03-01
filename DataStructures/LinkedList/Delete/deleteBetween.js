/**
 * ?: Delete the given node postion
 * ?: Consider the first node index as 0
 * ?: time complexity - O(n)
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

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);
console.log("🚀 ~ file: deleteBetween.js:27 ~ list:", list.head);

//TODO: Delete at the given position
function deleteGivenNode(node_position, list) {
  let head_position = 0;
  let current_node = list.head;
  while (current_node != null) {
    if (head_position === node_position - 1) {
      let temp_data = current_node;
      current_node.next = temp_data.next.next; //setting double next
      break;
    }
    current_node = current_node.next;
    head_position++;
  }
}

deleteGivenNode(1, list);
console.log("list", list.head);
