/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    var temp = [];
    for (let i = 0, len = this.queue.length; i < len; i++) {
        this.queue.push(this.queue.shift());
    }
    this.queue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    for (let i = 0, len = this.queue.length; i < len; i++) {
        this.queue.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.queue.push(ele);
    return ele;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */