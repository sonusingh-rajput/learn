<h1>learn JavaScript</h1>

1. Lat var Const

Note -  Perfer not to use var because of issues in block scope and fuctional scope.

2. Datatype and ECMA Standards

- "use strict"; // Treats all JS code as Newer Version
type of Datatype
1- Number -> Range - 2 to power 53
2- String -> "" or ''
3- Boolean -> true or false
4-bigint
5-null -> Standaolone Value
6-Undefined -> Value not asigned
7-symbol => unique


8-obj


3. DataType Conversion Confusion

conver to number
"33" => 33
"33abc" => NaN
true => 1 ; false => 0

4.Comparison Datatype

console.log(null > 0)  -> false
console.log(null == 0) -> false
console.log(null >=0) -> true

<b>Note</b> - The reason is that an equality Check == and Comparisons > < >= <= Work Differently.
        Comparisons convert null to a number , treating it as 0.
        That's why  null >= 0  is true and null > 0 is false

<b>note</b> - How can store a data in memory there type
<ol>
        <h3>Permitive datatype 7 type - call by value</h3>
        <li> String</li>
        <li> Number</li>
        <li> Boolean</li>
        <li> null</li>
        <li> undefined</li>
        <li> symbol</li>
        <li> BitInt</li>
</ol>

<ol>
        <h3>Reference (Non Primitive) - Memory Allcation only reference</h3>
        <li> Array</li>
        <li> Object</li>
        <li> Function</li>
</ol>

<b>Note</b> - JS is a dynamic type programming language  
                       