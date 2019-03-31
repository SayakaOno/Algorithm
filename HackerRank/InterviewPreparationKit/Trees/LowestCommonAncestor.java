public static Node lca(Node root, int v1, int v2) {
  Node currentNode = root;
  while(true) {
    if(v1 > currentNode.data && v2 > currentNode.data) {
       currentNode = currentNode.right;
    } else if (v1 < currentNode.data && v2 < currentNode.data) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
}