// https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1?page=1&category=Linked%20List&difficulty=Easy&sortBy=submissions


class Solution {
    getKthFromLast(head, k) {
        if (head === null) return -1;
        let curr = head
        let len = 0
        while(curr !== null){
            curr = curr.next;
            len +=1;
        }
        curr = head
        let temp = len - (k-1);
        if(k > len) return -1
        for(let i =1 ; i < temp ;i++){
            curr = curr.next;
        }
        return curr.data;
    }
}
