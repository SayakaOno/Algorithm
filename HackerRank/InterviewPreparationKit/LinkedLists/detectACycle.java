boolean hasCycle(Node head) {
  if (head == null || head.next == null) {
    return false;
  }
  HashMap<Node, Boolean> map = new HashMap<Node, Boolean>();
  Node currentNode = head;
  while (currentNode != null) {
    if (map.containsKey(currentNode)) {
      return true;
    }        
    map.put(currentNode, true);
    currentNode = currentNode.next;
  }
  return false;
}