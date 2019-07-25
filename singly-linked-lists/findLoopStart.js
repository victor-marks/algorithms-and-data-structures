// Detect node where loop started

function findLoopStart(sll) {
  let slow = sll.head;
  let fast = sll.head;

  while (slow && fast) {
    slow = slow.next;

    // if hits null, then there is no loop
    if (!fast.next) return null;

    fast = fast.next.next;
    if (slow === fast) {
      slow = sll.head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
}
