function findMergeNode(headA, headB) {
  let mapA = {};
  let currentA = headA;
  while (currentA) {
    if (mapA[currentA.data]) {
      mapA[currentA.data].push(currentA);
    } else {
      mapA[currentA.data] = [currentA];
    }
    currentA = currentA.next;
  }
  let currentB = headB;
  while (currentB) {
    if (mapA[currentB.data]) {
      for (let i = 0; i < mapA[currentB.data].length; i++) {
        let compareA = mapA[currentB.data][i];
        let compareB = currentB;
        while (compareA && compareB) {
          if (compareA === compareB) {
            compareA = compareA.next;
            compareB = compareB.next;
          } else {
            compareA = null;
          }
        }
        if (compareA === null && compareB === null) {
          return currentB.data;
        }
      }
    }
    currentB = currentB.next;
  }
}
