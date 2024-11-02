
<script>
// Queue class
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length == 0;
    }
    enqueue(element)
    {    
        // adding element to the queue
        this.items.push(element);
        document.write(element + " enqueued to queue<br>");
    }
    dequeue()
    {
        // removing element from the queue
        // returns underflow when called 
        // on empty queue
        if(this.isEmpty())
            return "Underflow<br>";
        return this.items.shift();
    }
    front()
    {
        // returns the Front element of 
        // the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue<br>";
        return this.items[0];
    }
    rear()
    {
        // returns the Rear element of 
        // the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue<br>";
        return this.items[this.items.length-1];
    }
}

// creating object for queue class
let queue = new Queue();

// Adding elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

// queue contains [10, 20, 30, 40]
// removes 10
document.write(queue.dequeue() + " dequeued from queue<br>");

// queue contains [20, 30, 40]
// Front is now 20
document.write("Front item is " + queue.front() + "<br>");

// printing the rear element
// Rear is 40
document.write("Rear item is " + queue.rear() + "<br>");

// This code is contributed by Susobhan Akhuli
</script>
