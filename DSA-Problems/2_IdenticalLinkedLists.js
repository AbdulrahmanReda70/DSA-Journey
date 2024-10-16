//https://www.geeksforgeeks.org/problems/identical-linked-lists/1?page=1&category=Linked%20List&difficulty=Basic&sortBy=submissions


class Solution {
    // Function to check whether two linked lists are identical or not.
    areIdentical(head1, head2) {
        while(head1 !==null && head2 !==null){
            if(head1.data !== head2.data) return false
            head1 = head1.next;
            head2 = head2.next;
        }
        return (head1 === head2)
    }
}
