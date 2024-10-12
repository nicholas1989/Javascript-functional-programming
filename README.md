<h1><b>JAVASCRIPT FUNCTIONAL PROGRAMMING EXERCISE</b></h1>
 
 <h3>INVENTORS</h3>
The following code block shows an array of inventors. Write functions to perform the following operations on the array:

    Filter the list of inventors to only those born in the 1500s.
    Create a new array of the inventor’s first and last names.
    Sort the inventors by birth year, from oldest to youngest.
    Calculate the total number of years lived by all inventors. The reduce() method might help you here.
    Sort the inventors by the number of years they lived.
    Sort the inventors alphabetically by last name.


    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];


    Object.keys
    Object.keys is a built-in method of the JavaScript Object prototype that returns an array of all the keys of an object.

    Example:

    const obj = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
    };

    Object.keys(obj); // ['2', 'keyCode', 'Target']
    In this exercise, your task is to create a custom function that simulates the behavior of Object.keys() using functions.

    Here is the function signature:

    function objectKeys(obj){
    ...
    }
    As for the order of the returned value, JavaScript does not guarantee any specific order of object keys. In practice, most modern engines preserve the order of object keys in some situations, but this behavior is not standardized and should not be relied upon. If you need to maintain a specific order of object keys, it is best to use an array of key-value pairs or a Map object.

    Object.values
    Object.values is a method that is part of the object prototype. When called, it returns an array with all the values of an object.

    For example:

    const obj = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
    };

    Object.values(obj); // ['Program Paradigm', 'JS', 'Browser']
    Create a method that simulates this behavior using functions.

    The function signature should be as follows:

    function objectValues(obj){
    ...
    }
