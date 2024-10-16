// https://www.geeksforgeeks.org/problems/print-linked-list-elements/1?page=1&category=Linked%20List&difficulty=Basic&sortBy=submissions

class Solution {
    // Function to display the elements of a linked list
    display(head) {
        while(head !== null){
            process.stdout.write(head.data + " ");
            head = head.next;
        }
    }
}
