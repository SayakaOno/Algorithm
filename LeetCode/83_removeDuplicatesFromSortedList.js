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
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let currentNode = head;
  let map = {};
  map[head.val] = true;
  let tempNode = currentNode.next;
  while (tempNode) {
    if (map[tempNode.val]) {
      currentNode.next = tempNode.next;
    } else {
      map[tempNode.val] = true;
      currentNode = tempNode;
    }
    tempNode = currentNode.next;
  }
  return head;
};
