// https://leetcode-cn.com/problems/valid-parentheses/description
// 知识点：栈
const isValid = function (s) {
  let valid = true
  const stack = []
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  for (let i of s) {
    if (['{', '[', '('].includes(i)) {
      stack.push(i)
    } else {
      const peak = stack.pop()
      if (i !== mapper[peak]) {
        return false
      }
    }
  }
  if (stack.length > 0) {
    return false
  }
  return valid
}

console.log(isValid('()'))
