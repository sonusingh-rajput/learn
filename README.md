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

Note - The reason is that an equality Check == and Comparisons > < >= <= Work Differently.
        Comparisons convert null to a number , treating it as 0.
        That's why  null >= 0  is true and null > 0 is false

note - How can store a data in memory there type
 A> Permitive datatype 7 type - call by value
                1.String
                2.Number
                3.Boolean
                4.null
                5.undefined
                6.symbol
                7.BitInt

B> Reference (Non Primitive) - Memory Allcation only reference    
                1.Array
                2.Object
                3.Function

Note - JS is a dynamic type programming language                        