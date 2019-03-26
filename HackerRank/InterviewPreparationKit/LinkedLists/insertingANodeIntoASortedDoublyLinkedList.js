function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);
  let currentNode = head;
  if (!currentNode.next) {
    return head;
  }
  if (head.data > data) {
    newNode.next = currentNode;
    currentNode.prev = newNode;
    return newNode;
  }
  while (true) {
    if (currentNode.data > data) {
      if (currentNode.prev) {
        let prev = currentNode.prev;
        prev.next = newNode;
        newNode.prev = prev;
      }
      newNode.next = currentNode;
      currentNode.prev = newNode;
      return head;
    }
    if (!currentNode.next) {
      currentNode.next = newNode;
      newNode.prev = currentNode;
      return head;
    }
    currentNode = currentNode.next;
  }
}
