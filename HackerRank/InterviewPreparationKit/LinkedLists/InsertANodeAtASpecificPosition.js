function insertNodeAtPosition(head, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  let currentNode = head;
  if (position === 0) {
    newNode.next = currentNode;
  } else {
    for (let i = 0; i < position; i++) {
      if (i !== 0) {
        currentNode = currentNode.next;
      }
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  return head;
}
