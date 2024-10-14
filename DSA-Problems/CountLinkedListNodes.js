/*
problem link: 
https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1?page=1&category=Linked%20List&difficulty=Basic&sortBy=submissions
*/

// solution
class Solution {
    getCount(head) {
        let cur = head;
        let len = 0
        if(head === 0) return len;
        while(cur.next !== null) {
            len +=1;
            cur = cur.next;
        }
        len+=1;
        return len;
    }
}
