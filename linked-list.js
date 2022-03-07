//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let newNode = new Node(value);
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++
  }

  pop() {
    let value = this.tail.value;
    if (this.tail.previous != null) {
      this.tail.previous.next = null;
      this.tail = this.tail.previous
    }
    this.length--
    return value;
  }

  shift() {
    let value = this.head.value;
    if (this.head.next != null) {
      let nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return value;
  }

  unshift(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

  delete(value) {
    let node = this.findNode(this.head, value);
    if (node == undefined) return
    if (node.previous != null) {
      node.previous.next = node.next;
    }
    if (node.next != null) {
      node.next.previous = node.previous;
    } else this.tail = node.previous;
    this.length--;
  }

  findNode(node, value) {
    if (node.value == value) {
      return node;
    } else
      if (node.next != null) {
        return this.findNode(node.next, value);
      } else {
        return undefined;
      }
  }

  count() {
    return this.length;
  }
}
