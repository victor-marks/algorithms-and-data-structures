// Detect middle of a SLL

function findLoopMiddle(sll) {
  let slow = sll.head;
  let fast = sll.head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === null) return slow;
  }
}
