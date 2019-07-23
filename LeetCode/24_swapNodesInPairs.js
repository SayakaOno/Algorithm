/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let first = head;
  let second = first.next;
  let newHead = second;
  while (first && second) {
    let temp = second.next;
    first.next = temp ? (temp.next ? temp.next : temp) : temp;
    second.next = first;
    first = temp;
    second = temp ? temp.next : null;
  }
  return newHead;
};
