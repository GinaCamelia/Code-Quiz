// create an array of question objects, where each object represents a single question.

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['scripting', 'js', 'script', 'javascript'],
        answer: 'script'
    },
    {
        question: 'What is the correct syntax for a for loop in JavaScript?',
        choices: [  
            'for i = 1 to 10',
            'for (i = 0; i < 5; i++)',
            'for i in range(1, 11)',     
            'for (let i = 0; i < 5; i++)'],
        answer: 'for (let i = 0; i < 5; i++)'
    },
    {
        question: 'What is the difference between let and var in JavaScript?',
        choices: [
            'let is a newer version of var',
            'let is block-scoped and var is function-scoped',
            'let is used for strings and var is used for numbers',
            'let is only used in modern browsers'
        ],
        answer: 'let is block-scoped and var is function-scoped'
    },
    {
        question: 'What is the difference between == and === in JavaScript?',
        choices: [
            '== compares values, === compares values and data types',
            '== compares data types, === compares values',
            '== compares values and variables, === compares only values',
            '== compares variables, === compares values and data types'
        ],
        answer: "== compares values, === compares values and data types"
    },
    {
        question: 'What is the difference between forEach and map methods?',
        choices: [
            'forEach method modifies the original array, map method returns a new array',
            'forEach method returns a new array, map method modifies the original array',
            'forEach method can be used with an object, map method can be used with an array',
            'forEach method can be used with an array, map method can be used with an object'
        ],
        answer: 'forEach method modifies the original array, map method returns a new array'
    },
]