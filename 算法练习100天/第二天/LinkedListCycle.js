/**
 * 哈希表
 * 双指针
 * @param {*} head 
 */
// 判断当前数据与下一个数据是否形成
// 快、慢指针
var hasCycle = function(head) {
    if (!head) return false;
    let walker = head;
    let runner = head;

    while (walker.next && (runner.next && runner.next.next)) {
        // walker 走一步
        // runner 走俩步
        if (walker.next == runner.next.next) {
            return true
        }
        walker = walker.next;
        runner = runner.next.next;
    }
    return false;
};