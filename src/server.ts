import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ServerService implements InMemoryDbService {
  createDb() {
    let backend = [
        { id: `1`, category: `Javascript`, question: `What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?`, answer: `Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!

        Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:

        var bar = null;
        console.log(typeof bar === "object");  // logs true!
        As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

        console.log((bar !== null) && (typeof bar === "object"));  // logs false
        To be entirely thorough in our answer, there are two other things worth noting:

        First, the above solution will return false if bar is a function. In most cases, this is the desired behavior, but in situations where you want to also return true for functions, you could amend the above solution to be:

        console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
        Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:

        console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
        Or, if you’re using jQuery:

        console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));`},
        { id: `2`, category: `Javascript`, question: `What will the code below output to the console and why?

        (function(){
        var a = b = 3;
        })();

        console.log("a defined? " + (typeof a !== 'undefined'));
        console.log("b defined? " + (typeof b !== 'undefined'));`, answer: `Since both a and b are defined within the enclosing scope of the function, and since the line they are on begins with the var keyword, most JavaScript developers would expect typeof a and typeof b to both be undefined in the above example.

        However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:

        var b = 3;
        var a = b;
        But in fact, var a = b = 3; is actually shorthand for:

        b = 3;
        var a = b;
        As a result (if you are not using strict mode), the output of the code snippet would be:

        a defined? false
        b defined? true
        But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.

        Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might othewise result. (Yet another prime example of why you should use use strict as a matter of course in your code!)`},
        { id: `3`, category: `Javascript`, question: `What will the code below output to the console and why?

        var myObject = {
            foo: "bar",
            func: function() {
                var self = this;
                console.log("outer func:  this.foo = " + this.foo);
                console.log("outer func:  self.foo = " + self.foo);
                (function() {
                    console.log("inner func:  this.foo = " + this.foo);
                    console.log("inner func:  self.foo = " + self.foo);
                }());
            }
        };
        myObject.func();`, answer: `The above code will output the following to the console:

        outer func:  this.foo = bar
        outer func:  self.foo = bar
        inner func:  this.foo = undefined
        inner func:  self.foo = bar
        In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

        In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.`},
        { id: `4`, category: `Javascript`, question: `What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?`, answer: `This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

        Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:

        (function($) { /* jQuery plugin code referencing $ */ } )(jQuery);`},
        { id: `5`, category: `Javascript`, question: `What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?`, answer: `the short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

        Some of the key benefits of strict mode include:

        Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
        Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
        Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
        Disallows duplicate property names or parameter values. Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
        Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
        Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.`},
        { id: `6`, category: `Java`, question: ``, answer: ``},
        { id: `7`, category: `Java`, question: ``, answer: ``},
        { id: `8`, category: `Java`, question: ``, answer: ``},
        { id: `9`, category: `Java`, question: ``, answer: ``},
        { id: `10`, category: `Java`, question: ``, answer: ``},
        { id: `11`, category: `Angular`, question: ``, answer: ``},
        { id: `12`, category: `Angular`, question: ``, answer: ``},
        { id: `13`, category: `Angular`, question: ``, answer: ``},
        { id: `14`, category: `Angular`, question: ``, answer: ``},
        { id: `15`, category: `Angular`, question: ``, answer: ``}
    ];
    return {backend};
  }
}