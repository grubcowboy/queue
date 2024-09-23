export class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        // Add value to end of queue
        this.items.push(item);
    }

    pop() {
        // Pop head value
        // return this.items.splice(0, 1)[0];
        return this.items.shift();
    }

    peek() {
        // Remove and return head value
        return this.items[0];
    }

    len() {
        return this.items.length;
    }
}