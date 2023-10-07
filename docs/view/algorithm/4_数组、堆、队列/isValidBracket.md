# 有效括号序列
[[toc]]
## 0.题目

给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。

数据范围：字符串长度 0≤n≤10000
要求：空间复杂度 O(n)，时间复杂度 O(n)

## 1.代码
```java
public class Bm44_isValidBracket {
    public static void main(String[] args) {
        boolean valid = isValid("}}}");
        System.out.println(valid);
    }

    public static boolean isValid (String s) {
        if(s == null){
            return false;
        }
        Stack<Character> temp = new Stack<>();
        for(char item :s.toCharArray()){
            if(item == '['){
                temp.push(']');
            }else if(item == '{'){
                temp.push('}');
            }else if(item == '('){
                temp.push(')');
            }else if(temp.isEmpty() || temp.pop() != item){
                //如果 还有数据 并且不是 [ { (  ,那么temp就是空的，不符合要求，或者弹出的元素不等于当前的 也不是
                return false;
            }
        }
        return temp.isEmpty();
    }
}
```
