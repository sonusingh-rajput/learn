<h1>learn JavaScript</h1>

<h2>Lat var Const</h2>

<b>Note</b> - Perfer not to use var because of issues in block scope and fuctional scope.

<h2>Datatype and ECMA Standards</h2> 

<b>Note</b> - "use strict"; // Treats all JS code as Newer Version
<span> type of Datatype </span>
<ol>        
        <li> Number -> Range - 2 to power 53</li>
        <li> String -> "" or ''</li>
        <li> Boolean -> true or false</li>
        <li> bigint</li>
        <li> null -> Standaolone Value</li>
        <li> Undefined -> Value not asigned</li>
        <li> symbol => unique</li>
        <li> obj</li>
</ol>
<h2>DataType Conversion Confusions</h2> 
<h4>conver to number</h4>
<ol>
        <li>"33" => 33</li>
        <li>"33abc" => NaN</li>
        <li>true => 1 ; false => 0</li>
</ol>

<h2>Comparison Datatype</h2> 
 <ol>
        <li>console.log(null > 0)  -> false</li>
        <li>console.log(null == 0) -> false</li>
        <li>console.log(null >=0) -> true</li>
</ol>
<b>Note</b> - <span>The reason is that an equality Check == and Comparisons > < >= <= Work Differently.</span>
<span>Comparisons convert null to a number , treating it as 0.</span>
<span>That's why  null >= 0  is true and null > 0 is false</span>     
        
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
                       
<h2>Stack and Heap Memory</h2>
<p>Stack(Primitive)</p>
<p>Heap(Non-Primitive)</p>

<h2>String</h2>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" ><b>Learn String MDN and Practice</b> <a/>

<h2>Nuber and Math</h2>
