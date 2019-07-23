/* 
    时间复杂度：O(N)
    空间复杂度：O(N)
*/
var isValid = function(s) {
    var pairs = {
        '\(': '\)',
        '\[': '\]',
        '\{': '\}'
    };
    let open = [];
    for(let i=0; i<s.length;i++) {
        if ( s[i] in pairs ) {
            open.push(s[i])
        } else {
            let current = open.pop();

            if (pairs[current] == s[i]) {
                return false
            }
        }
    }
    return open.length === 0
};

/* 正则 */
var isValid = function (s) {
    while (s.indexOf("{}") !== -1 || s.indexOf("[]") !== -1 || s.indexOf("()") !== -1) {
        s = s.replace(/\(\)|\[\]|\{\}/g, "");
    }
    return s ? false : true;
};

var string = "((([])))";
console.log(isValid(string));