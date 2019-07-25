// Detect a loop in Singly Linked List

function detectLoop(sll) {
  let tortoise = sll.head;
  let hare = sll.head;

  while (tortoise && hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) return true;
  }

  return false;
}
