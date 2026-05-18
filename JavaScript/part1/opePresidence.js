let score = 2*3 +2-1**3
// ! operator precedence
// ! parentheses ()
// ! exponentiation (**)
// ! multiplication (*) and division (/)
// ! addition (+) and subtraction (-)
console.log("Score:", score);
// ! operator associativity
// ! left to right
// ^ this operator is right associative ie it is evaluated from right to left and is valid on operators with the same precedence level
let result1 = 10 - 5 + 2; // (10 - 5) + 2
console.log("Result1:", result1);
// ! right to left
// ^ this operator is right associative ie it is evaluated from right to left and is valid on operators with the same precedence level
let result2 = 2 ** 3 ** 2; // 2 ** (3 ** 2)
console.log("Result2:", result2);


// ? the difference between operator precedence and associativity is that operator precedence determines the order in which different operators are evaluated in an expression, while associativity determines the order in which operators of the same precedence level are evaluated. 
// ? Associativity defines the order in which operators of the same precedence are evaluated.
// ? In left-to-right associativity, evaluation happens from left to right (e.g., subtraction).
// ? In right-to-left associativity, evaluation happens from right to left (e.g., assignment and exponentiation).
// ? This is important because it directly affects how expressions are computed, especially when multiple operators of the same precedence are used.