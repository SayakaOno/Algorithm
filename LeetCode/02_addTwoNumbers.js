/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let answer = {};
  let currentNode = null;
  let temp = 0;
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp;
    let val = sum > 9 ? sum % 10 : sum;
    let newNode = new ListNode(val);
    temp = Math.floor(sum / 10);
    if (!answer.val && answer.val !== 0) {
      answer = newNode;
      currentNode = answer;
    } else {
      currentNode.next = newNode;
      currentNode = currentNode.next;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (temp) {
    currentNode.next = new ListNode(temp);
  }
  return answer;
};
