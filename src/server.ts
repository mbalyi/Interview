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
        { id: `6`, category: `Angular`, question: `Explain the life cycle hooks of Angular 2 application!`, answer: `Angular 2 component/directive has lifecycle events, managed by @angular/core. It creates the component, renders it, creates and renders its children, processes changes when its data-bound properties change, and then destroys it before removing its template from the DOM. Angular provides a set of lifecycle hooks(special events) which can be tapped into this lifecycle and perform operations when required. The constructor executes prior to all lifecycle events. Each interface has a single hook method prefixed with ng. For example, ngOnint interface has Oninit method that must be implemented in the component. `},
        { id: `7`, category: `Angular`, question: `How routing works in Angular 2 and 4?`, answer: `Routing is a mechanism which enables user to navigate between views/components. Angular 2 simplifies the routing and provide flexibility to configure and define at module level (Lazy loading). 
        
        The angular application has single instance of the Router service and whenever URL changes, corresponding Route is matched from the routing configuration array. On successful match, it applies redirects and the router builds a tree of ActivatedRoute objects and contains the current state of the router. Before redirection, the router will check whether new state is permitted by running guards (CanActivate). Route Guards is simply an interface method that router runs to check the route authorization. After guard runs, it will resolve the route data and activate the router state by instantiation the required components into <router-outlet> </router-outlet>.`},
        { id: `8`, category: `Angular`, question: `What is lazy loading and How to enable lazy loading in angular 2?`, answer: `Most of the enterprise application contains various modules for specific business cases. Bundling whole application code and loading will be huge performance impact at initial call. Lazy lading enables us to load only the module user is interacting and keep the rest to be loaded at runtime on demand.
        
        Lazy loading speeds up the application initial load time by splitting the code into multiple bundles and loading them on demand.
        
        Every Angular application must have one main module say AppModule. The code should be splitted into various child modules (NgModule) based on the application business case.
        
        Plunkr Example: Link
        
        1. We don't require to import or declare lazily loading module in root module.
        2. Add the route to top level routing (app.routing.ts) and set loadChildren. loadChildren takes absolute path from root folder followed by #{ModuleName}. RouterModule.forRoot() takes routes array and configures the router.
        3. Import module specific routing in the child module.
        4. In the child module routing, specify path as empty string ' ', the empty path. RouterModule.forChild again takes routes array for the child module components to load and configure router for child.
        5. Then, export const routing: ModuleWithProviders = RouterModule.forChild(routes);`},
        { id: `9`, category: `Angular`, question: `What is AOT compilation?`, answer: `AOT compilation stands for Ahead Of Time compilation, in which the angular compiler compiles the angular components and templates to native JavaScript and HTML during the build time. The compiled Html and JavaScript is deployed to the web server so that the compilation and render time can be saved by the browser.
        
        Advantages
        
        1. Faster download: Since the app is already compiled, many of the angular compiler related libraries are not required to be bundled, the app bundle size get reduced. So, the app can be downloaded faster.
        2. Lesser No. of Http Requests: If the app is not bundled to support lazy loading (or whatever reasons), for each associated html and css, there is a separate request goes to the server. The pre-compiled application in-lines all templates and styles with components, so the number of Http requests to the server would be lesser.
        3. Faster Rendering: If the app is not AOT compiled, the compilation process happens in the browser once the application is fully loaded. This has a wait time for all necessary component to be downloaded, and then the time taken by the compiler to compile the app. With AOT compilation, this is optimized.
        4. Detect error at build time: Since compilation happens beforehand, many compile time error can be detected, providing a better degree of stability of application.
        
        Disadvantages
        
        1. Works only with HTML and CSS, other file types need a previous build step
        2. No watch mode yet, must be done manually (bin/ngc-watch.js) and compiles all the files
        3. Need to maintain AOT version of bootstrap file (might not be required while using tools like cli)
        4. Needs cleanup step before compiling`},
        { id: `10`, category: `Angular`, question: `What are the core differences between Observables and Promises?`, answer: `A nice answer taken from stack overflow: 
        
        A Promise handles a single event when an async operation completes or fails.
        
        Note: There are Promise libraries out there that support cancellation, but ES6 Promise doesn't so far.
        
        An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event. Often Observable is preferred over Promise because it provides the features of Promise and more. With Observable it doesn't matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case. Observable also has the advantage over Promise to be cancelable. If the result of an HTTP request to a server or some other expensive async operation isn't needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don't need the notification or the result it provides anymore. Observable provides operators like map, forEach, reduce, ... similar to an array. There are also powerful operators like retry(), or replay(), ... that are often quite handy.
        
        Promises vs Observables
        
        - Promises:
            1. returns a single value
            2. not cancellable
        - Observables:
            1. works with multiple values over time
            2. cancellable
            3. supports map, filter, reduce and similar operators
            4. proposed feature for ES 2016
            5. use Reactive Extensions (RxJS)
            6. an array whose items arrive asynchronously over time`},
        { id: `11`, category: `Java 8`, question: `What are the new features introduced in JAVA 8?`, answer: `There are dozens of features added to Java 8, the most significant ones are mentioned below −
        
        Lambda expression − Adds functional processing capability to Java.
        
        Method references − Referencing functions by their names instead of invoking them directly. Using functions as parameter.
        
        Default method − Interface to have default method implementation.
        
        New tools − New compiler tools and utilities are added like 'jdeps' to figure out dependencies.
        
        Stream API − New stream API to facilitate pipeline processing.
        
        Date Time API − Improved date time API.
        
        Optional − Emphasis on best practices to handle null values properly.
        
        Nashorn, JavaScript Engine − A Java-based engine to execute JavaScript code.
        
        Along with these new featuers, lots of feature enhancements are done under-the-hood, at both compiler and JVM level.`},
        { id: `12`, category: `Java 8`, question: `Why lambda expression is to be used?`, answer: `Lambda expressions are used primarily to define inline implementation of a functional interface, i.e., an interface with a single method only. In the above example, we've used various types of lambda expressions to define the operation method of MathOperation interface. Then we have defined the implementation of sayMessage of GreetingService.
        
        Lambda expression eliminates the need of anonymous class and gives a very simple yet powerful functional programming capability to Java.`},
        { id: `13`, category: `Java 8`, question: `How will you add 1 week to current date using local datetime api of java8?`, answer: `Following code adds 1 week to current date using local datetime api −
        
        //add 1 week to the current date
        LocalDate today = LocalDate.now();
        LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
        System.out.println("Next week: " + nextWeek);`},
        { id: `14`, category: `Java 8`, question: `Which two method you need to implement for key Object in HashMap?`, answer: `In order to use any object as Key in HashMap, it must implements equals and hashcode method in Java. Read How HashMap works in Java  for detailed explanation on how equals and hashcode method is used to put and get object from HashMap. `},
        { id: `15`, category: `Java 8`, question: `What is the difference between creating String as new() and literal?`, answer: `When we create string with new() Operator, it’s created in heap and not added into string pool while String created using literal are created in String pool itself which exists in PermGen area of heap.
        
        
        String s = new String("Test");
         
        does not  put the object in String pool , we need to call String.intern() method which is used to put  them into String pool explicitly. its only when you create String object as String literal e.g. String s = "Test" Java automatically put that into String pool.`}
    ];
    return {backend};
  }
}