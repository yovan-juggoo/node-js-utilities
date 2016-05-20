(function () {
    'use strict';
    /*global console:true*/
    
    /*---------Modify object using a function-----------*/
    var employee = {
        name: "Yovan Juggoo",
        address: "24 Avenue Surath, Quatre-Bornes"
    };

    function setAge(e, age) {
        e.age = age;
    }

    setAge(employee, 33);

    /*--------------Arrays---------------*/
    var today = new Date();

   /*var array1 = new Array('Yovan', 1, 2, {
        name: 'CHB Technologies',
        employeeCount: '12'
    }, today);*/
    
    var array1 = ['Yovan', 1, 2, {
        name: 'CHB Technologies',
        employeeCount: '12'
    }, today];

    var array2 = ['Yovan', 1, 2, {
        name: 'CHB Technologies',
        employeeCount: '12'
    }, today];

    console.log('array1 is equal to array2: ', array1 === array2);
    console.log('array1 is equal to array2: ', JSON.stringify(array1) === JSON.stringify(array2));
    console.log('Is array1 an array: ', array1 instanceof Array);
    console.log('Tye of array1: ', typeof array1);
}());