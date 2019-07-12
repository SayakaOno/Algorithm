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
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let newList = null;
  let newListCurrentNode = null;
  let newNode = null;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newNode = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      newNode = new ListNode(l2.val);
      l2 = l2.next;
    }
    if (newList) {
      newListCurrentNode.next = newNode;
      newListCurrentNode = newListCurrentNode.next;
    } else {
      newList = newNode;
      newListCurrentNode = newList;
    }
  }

  let rest = null;
  if (l1) {
    rest = l1;
  } else {
    rest = l2;
  }
  while (rest) {
    newNode = new ListNode(rest.val);
    rest = rest.next;
    newListCurrentNode.next = newNode;
    newListCurrentNode = newListCurrentNode.next;
  }
  return newList;
};
