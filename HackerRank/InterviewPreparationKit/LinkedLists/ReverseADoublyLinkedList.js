function reverse(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let currentNode = head.next;
  let prev = head;
  head.prev = currentNode;
  head.next = null;
  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = prev;
    currentNode.prev = next;
    if (next) {
      prev = currentNode;
      currentNode = next;
    } else {
      break;
    }
  }
  return currentNode;
}
