 let t = -1;
      let MAX = 1000;
    let a = Array(MAX).fill(0); // Maximum size of Stack

    function isEmpty() {
        return (t < 0);
    }

    function push(x) {
        if (t >= (MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
        t+=1;
            a[t] = x;
            
            console.log(x + " pushed into stack<br/>");
            return true;
        }
    }

    function pop() {
        if (t < 0) {
           console.log("Stack Underflow");
            return 0;
        } else {
            let x = a[t];
            t-=1;
            return x;
        }
    }

    function peek() {
        if (t < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            let x = a[t];
            return x;
        }
    }

    function print() {
        for (i = t; i > -1; i--) {
            console.log(" " + a[i]);
        }
    }

        push(10);
        push(20);
        push(30);
        console.log(pop() + " Popped from stack");
        console.log("<br/>Top element is :" + peek());
        console.log("<br/>Elements present in stack : ");
        print();

// linked list implementation
// <script>

// let root;

//      class StackNode {

//         constructor(data) {
//             this.data = data;
//             this.next = null;
//         }
//     }

//      function isEmpty() {
//         if (root == null) {
//             return true;
//         } else
//             return false;
//     }

//      function push(data) {
//         let newNode = new StackNode(data);

//         if (root == null) {
//             root = newNode;
//         } else {
//             let temp = root;
//             root = newNode;
//             newNode.next = temp;
//         }
//         document.write(data + " pushed to stack<br/>");
//     }

//      function pop() {
//         let popped = Number.MIN_VALUE;
//         if (root == null) {
//             document.write("Stack is Empty");
//         } else {
//             popped = root.data;
//             root = root.next;
//         }
//         return popped;
//     }

//      function peek() {
//         if (root == null) {
//             document.write("Stack is empty");
//             return Number.MIN_VALUE;
//         } else {
//             return root.data;
//         }
//     }

//         push(10);
//         push(20);
//         push(30);

//         document.write(pop() + " popped from stack<br/>");

//         document.write("Top element is " + peek());

// </script>



