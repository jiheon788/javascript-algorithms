class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";

    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.display();
linkedList.insert(linkedList.find(3), 99);
linkedList.display();
linkedList.remove(5);
linkedList.display();
