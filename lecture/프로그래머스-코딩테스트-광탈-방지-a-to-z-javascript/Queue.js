class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;

    return value;
  }

  peek() {
    return this.queue[this.head];
  }

  size() {
    return this.rear - this.head;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(5);
