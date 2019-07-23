var detectCycle = function (head) {
    if (!head || !head.next) return null;
    var node = checkNodes(head);

    if (node) return node;
    head = head.next;

    return detectCycle(head)
}

/**
 * 
 * @param {*} head 
 */
var checkNodes = function (head) {
    var node = head;
    while (node && node.next && (node = node.next)) {
        var cycle = isCycle(head, node);
        if (cycle) return node;

        node = node.next;
    }
    return null
}

/**
 * 判断是否是环形链表
 * @param {*} head 
 * @param {*} tail 
 */
var isCycle = function isCycle(head, tail) {
    if (head && tail.next) {
        var result = tail.next == head;
        return result;
    }
    return false;
}