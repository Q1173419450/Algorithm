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

// 构建一个栈
const createStack = () => {
    class Stack {
        constructor () {
            this.top = 0;
            this.stores = [];
        }
        // 添加
        push (item) {
            this.top ++;
            return this.stores.push(item)
        }
        // 删除
        pop () {
            this.top --;
            return this.stores.pop()
        }
        peer () {
            return this.stores[this.stores.length - 1]
        }
        // 判断是否为空
        isEmpty () {
            return this.top == 0;
        }
    }
    return new Stack();
}

const reverseList = function (head) {
    if (!head) {
        return null;
    }
    let node = head;
    let stack = createStack();
    while (node != null) {
        stack.push(node);
        
        node = node.next;
    }
    let newHead = null, tail = null;
    while (!stack.isEmpty()) {
        let node = stack.pop();
        if (!newHead) {
            newHead = tail = node;
        }
        // 翻转
        tail.next = node;
        tail = node;
    }
    tail.next = null;
    // 翻转结果
    // console.log(newHead);
    return newHead;
}
var arr = [1, 2, 3, 4];
// 数组转链表
// console.log(chainList(arr));
reverseList(chainList(arr));