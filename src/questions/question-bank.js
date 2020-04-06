/*
============================================
 Author: Code Star
 Date: April 2020
 Description: An array that holds the set of 
    question objects for the quiz.
===========================================
*/
var questionBank = [
    {
        "question": "In the console, _____ pause running JavaScript code. One that is most common is _____.",
        "category": "General",
        "answers": [
            "What are: Breakpoints; Line-of-code",
            "What are: Suspensions; Line-of-code",
            "What are: Event Listeners; XHR",
            "What are: DOMs; Conditional line-of-code"
        ],
        "answer": "...Breakpoints; Line-of-code" 
    },
    {
        "question": "These are examples of object literals.",
        "category": "Objects",
        "answers": [
            "What are: Objects that are created as functions and their properties are initialized through parameterized values?",
            "What are: Simple event-registration methods for each of the commonly used and universally implemented browser events?",
            "What is: A comma-separated list of colon-separated name:value pairs, enclosed within curly braces?",
            "What is: None of the above."
        ],
        "answer": "What is: A comma-separated list of colon-separated name:value pairs, enclosed within curly braces?" 
    },
    {
        "question": "(1 === '1') evaluates to:",
        "category": "General",
        "answers": [
            "True",
            "False",
            "!!TF",
            "!!TF"
        ],
        "answer": "False" 
    },
    {
        "question": "<p>In the example below, the jQuery “_____” method is used to register an “onClick” event.</p><br ><img src=\"./media/images/jQueryCode.PNG\" class=\"questionImg\" />",
        "category": "General",
        "answers": [
            "What is: this?",
            "What is: css?",
            "What is: click?",
            "What is: color?"
        ],
        "answer": "click?" 
    },
    {
        "question": "This is the three-step process of AJAX.",
        "category": "General",
        "answers": [
            "What is: The browser requests information from the server, the browser processes the content and adds to page, the server responds with data?",
            "What is: The browser processed the content and adds to the page, the browser requests information from the server, the server responds with data?",
            "What is: The browser requests information from the browser the server responds with data, the browser processes content and adds to page?",
            "What is: The server periodically sends out information, the browser evaluates the data, the browser formats the information and adds it to the page?"
        ],
        "answer": "What is: The browser requests information from the browser the server responds with data, the browser processes content and adds to page?" 
    },
    {
        "question": "This is an example of an executable for-loop.",
        "category": "General",
        "answers": [
            "What is: for (var x = 0;  x < 10; x ++) ?",
            "What is: (var x= 0; x > 10; x++) ?",
            "What is: for(var x=0; x > 10; x++) {document.write(x);} ?",
            "What is: for(var x=0; x < 10; x++) {document.write(x);} ?"
        ],
        "answer": "What is: for(var x=0; x < 10; x++) {document.write(x);} ?" 
    },
    {
        "question": "This is when we would use try/catch/finally.",
        "category": "General",
        "answers": [
            "What is: Only when code may fail?",
            "What is: Only when an exception occurs?",
            "What is: Both when code may fail, or when an exception occurs?",
            "What is: Neither when code may fail, or when an exception occurs?"
        ],
        "answer": "What is: Both when code may fail, or when an exception occurs?" 
    },
    {
        "question": "The DOM is the _____ document we manipulate through _____, _____, and _____.",
        "category": "General",
        "answers": [
            "What are: HTML; HTML, CSS, and JavaScript?",
            "What are: CSS; CSS, HTML, and JavaScript?",
            "What are: JavaScript; JavaScript, CSS, and HTML?",
            "What are: iFrame; HTML; CSS; and JavaScript?"
        ],
        "answer": "What are: HTML; HTML, CSS, and JavaScript?" 
    },
    {
        "question": "myArray.forEach( (v, i, a) =>{console.log(i);}); If myArray contained 4 items, _____ would be logged to the console",
        "category": "General",
        "answers": [
            "What are: 1 2 3 4?",
            "What are: The values of each item?",
            "What are: 0 1 2 3?",
            "What are: 4 references to the array?"
        ],
        "answer": "What are: 0 1 2 3?" 
    },
    {
        "question": "A closure is the association of a lexical scope and a function, allowing the free access of data (by direct reference) without needing to call getter functions or functions that return the data.",
        "category": "General",
        "answers": [
            "True",
            "False",
            "!!TF",
            "!!TF"
        ],
        "answer": "False" 
    },
    

    {
        "question": "These are the keywords for declaring variables in JavaScript.",
        "category": "General",
        "answers": [
            "What are: variable, new, and create?",
            "What are: var, let, and const?",
            "What are: object, array, number, and string?",
            "What are: number, boolean, string, and object?"
        ],
        "answer": "What are: var, let, and const?" 
    },
    {
        "question": "These three words make up the acronym DOM.",
        "category": "General",
        "answers": [
            "What is: Deliverable Opinion Material?",
            "What is: Deleted Object Meaning?",
            "What is: Document Object Model?",
            "What is: Dedicated Online Material?"
        ],
        "answer": "What is: Document Object Model?" 
    },
    {
        "question": "The syntax ['Elephants', 'Dogs', 'People'] represents a JavaScript _____.",
        "category": "General",
        "answers": [
            "What is: a function?",
            "What is: a for loop?",
            "What is: an if/else statement?",
            "What is: an array?"
        ],
        "answer": "What is: an array?" 
    },
    {
        "question": "This symbol is shorthand for jQuery.",
        "category": "General",
        "answers": [
            "$",
            "!",
            "@",
            "&"
        ],
        "answer": "$" 
    },
    {
        "question": "These symbols denote an object in JavaScript.",
        "category": "General",
        "answers": [
            "What are: < and > ?",
            "What are: ( and ) ?",
            "What are: { and } ?",
            "What are: ' and ' ?"
        ],
        "answer": "What are: { and } ?" 
    },
    {
        "question": "These are primitive data types.",
        "category": "General",
        "answers": [
            "What are: boolean, null, undefined, number, string, and symbol?",
            "What are: int, float, decimal, string, null, and undefined?",
            "What are: object, function, array, Math, RegExp, and error?",
            "What are: NaN, number, null, string, and boolean?"
        ],
        "answer": "What are: boolean, null, undefined, number, string, and symbol?" 
    },
    {
        "question": "This is the last element of an array.",
        "category": "General",
        "answers": [
            "What is: array[0] ?",
            "What is: array[last] ?",
            "What is: array[array.length - 1] ?",
            "What is: array[null] ?"
        ],
        "answer": "What is: array[array.length - 1] ?" 
    },
    {
        "question": "This is used as a control statement.",
        "category": "General",
        "answers": [
            "What is: new?",
            "What is: var?",
            "What is: null?",
            "What is: if?"
        ],
        "answer": "What is: if?" 
    },
    {
        "question": "These are used for client-side debugging.",
        "category": "General",
        "answers": [
            "What are: video conferences?",
            "What are: random button mashes?",
            "What are: browser developer tools?",
            "What are: reboot sequences?"
        ],
        "answer": "What are: browser developer tools?" 
    },
    {
        "question": "This can be used to insert JavaScript into HTML, either inline or as an external file.",
        "category": "General",
        "answers": [
            "What is: the <java> tag?",
            "What is: the <script> tag?",
            "What is: the <code> tag?",
            "What is: the <link> tag?"
        ],
        "answer": "What is: the <script> tag?" 
    }


]; 
