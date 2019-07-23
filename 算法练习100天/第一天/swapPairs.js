// 链表节点
class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

// 将数组转化为链表
function chainList(arr) {
    let head = new ListNode(arr[0]);
    let tail = head;
    for (let i=1; i<arr.length;i++) {
        let node = new ListNode(arr[i]);
        tail.next = node;
        tail = node;
    }
    // console.log(head);
    return head;
}

/**
 *  递归
 * @param {*} head 
 */
// var swapPairs = function (head) {
//     if (!head || !head.next) return
//     var v1 = head, v2 = head.next, v3 = head.next.next;
//     // console.log('1111');
//     // console.log(v1);
//     // console.log('2222');
//     // console.log(v2);
//     // console.log('333');
//     // console.log(v3);
//     v2.next = v1; // head.next.next = head
//     // console.log('444');
//     // console.log(v2.next);
//     v1.next = swapPairs(v3);
//     return v2
// }
// var arr = [1, 2, 3, 5];
// var head = chainList(arr);
// console.log(swapPairs(head));

var swapPairs = function (head) {
    let start = {};
    let left = start;
    left.next = head;

    while (left.next && left.next.next) {
        let a = left.next;
        let b = left.next.next;
        let c = left.next.next.next;

        left.next = b
        left.next.next = a;
        left.next.next.next = c;
        left = a;
    }
    return start.next;
}
var arr = [1, 2, 3, 5, 6];
var head = chainList(arr);
console.log(swapPairs(head));