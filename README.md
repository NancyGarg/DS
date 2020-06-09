# DS
## Big-O Notation Primer
* It measures the worst case complexity of an algorithm
* Example of O(1)=Accessing array element by index.
* Example of O(n)=Printing elements from 1 to n.
* Example of O(log n)=Printing elements that are power of 2 from 2 to n.

###Big-O notation provides some fundamental rules that help developers compute for f(n),that is complexity of an algorithm:

1. Coefficient rule: If f(n) is O(g(n)), then kf(n) is O(g(n)), for any
constant k > 0. The first rule is the coefficient rule, which eliminates
coefficients not related to the input size, n. This is because as n
approaches infinity, the other coefficient becomes negligible.

2. Sum rule: If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is
O(h(n)+p(n)). The sum rule simply states that if a resultant time
complexity is a sum of two different time complexities, the resultant
Big-O notation is also the sum of two different Big-O notations.
3. Product rule: If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is
O(h(n)p(n)). Similarly, the product rule states that Big-O is multiplied
when the time complexities are multiplied.

4. Transitive rule: If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is
O(h(n)). The transitive rule is a simple way to state that the same time
complexity has the same Big-O.

