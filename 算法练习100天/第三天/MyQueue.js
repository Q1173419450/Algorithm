/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    var temp = [];
    for (let i=0, len = this.stack.length; i < len; i++) {
        // 颠倒数据
        temp.push(this.stack.pop())
    }
    var pop = temp.pop();
    for (let j = 0, len = temp.length; j < len; j++) {
        // 恢复数组
        this.stack.push(temp.pop());
    }
    return pop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    var temp = [];
    for (let i = 0, len = this.stack.length; i<len; i++) {
        temp.push(this.stack.pop());
    }
    var peek = temp[temp.length - 1];
    for (let j = 0, len = temp.length; j < len; j++) {
        this.stack.push(temp.pop());
    }
    return peek;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false