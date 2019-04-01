public static int height(Node root) {
  if (root == null) {
    return 0;
  } else {
  int maxRight = 0;
  int maxLeft = 0;
  if (root.left != null) {
    maxRight = height(root.left) + 1;
  }
  if(root.right != null) {
    maxLeft = height(root.right) + 1;
  }
  return Math.max(maxRight, maxLeft);
  }
}