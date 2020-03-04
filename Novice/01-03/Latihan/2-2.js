// function declaration
function foo() {}

// function expression
(function bar() {})

// function expression
x = function hello() {}


if (x) {
   // function expression
   function world() {}
}


// function declaration
function a() {
   // function declaration
   function b() {}
   if (0) {
      // function expression
      function c() {}
   }
}