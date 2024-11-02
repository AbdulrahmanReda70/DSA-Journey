// Javascript program to implement the queue data structure
// using linked list

// Node class representing a single node in the linked list
class Node {
    constructor(new_data)
    {
        this.data = new_data;
        this.next = null;
    }
}

// Class to implement queue operations using a linked list
class Queue {
    constructor()
    {
        // Pointer to the front and the rear of the linked
        // list
        this.front = null;
        this.rear = null;
    }

    // Function to check if the queue is empty
    isEmpty()
    {
        // If the front and rear are null, then the queue is
        // empty, otherwise it's not
        return this.front === null && this.rear === null;
    }

    // Function to add an element to the queue
    enqueue(new_data)
    {
        // Create a new linked list node
        const new_node = new Node(new_data);

        // If queue is empty, the new node is both the front
        // and rear
        if (this.rear === null) {
            this.front = this.rear = new_node;
            return;
        }

        // Add the new node at the end of the queue and
        // change rear
        this.rear.next = new_node;
        this.rear = new_node;
    }

    // Function to remove an element from the queue
    dequeue()
    {
        // If queue is empty, return
        if (this.isEmpty()) {
            console.log("Queue Underflow");
            return;
        }

        // Store previous front and move front one node
        // ahead
        const temp = this.front;
        this.front = this.front.next;

        // If front becomes null, then change rear also
        // to null
        if (this.front === null) {
            this.rear = null;
        }
    }

    // Function to get the front element of the queue
    getFront()
    {
        // Checking if the queue is empty
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return Number.MIN_VALUE;
        }
        return this.front.data;
    }

    // Function to get the rear element of the queue
    getRear()
    {
        // Checking if the queue is empty
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return Number.MIN_VALUE;
        }
        return this.rear.data;
    }
}

// Driver code
const q = new Queue();

// Enqueue elements into the queue
q.enqueue(10);
q.enqueue(20);

// Display the front and rear elements of the queue
console.log("Queue Front:", q.getFront());
console.log("Queue Rear:", q.getRear());

// Dequeue elements from the queue
q.dequeue();
q.dequeue();

// Enqueue more elements into the queue
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

// Dequeue an element from the queue
q.dequeue();

// Display the front and rear elements of the queue
console.log("Queue Front:", q.getFront());
console.log("Queue Rear:", q.getRear());
