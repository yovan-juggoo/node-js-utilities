(function () {
    'use strict';
    /*global console:true*/


    /*----------------Utilities------------*/
    function copyArray(array1, array2) {
        array1 = array1 || [];
        array2 = [];
        for (var x = 0; x < array1.length; x++) {
            array2[x] = array1[x];
        }
    }

    function areEquivalent(obj1, obj2) {
        obj1 = obj1 || {};
        obj2 = obj2 || {};
        var props1 = Object.getOwnPropertyNames(obj1);
        var props2 = Object.getOwnPropertyNames(obj2);
        if (props1.length !== props2.length)
            return false;
        for (var x = 0; x < props1.length; x++)
            if (obj1[props1[x]] !== obj2[props1[x]])
                return false;
        return true;
    }

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
    console.log('Type of array1: ', typeof array1);

    var array3 = ['Football', 'Archery', 'Cycling', 'Golf'];
    var answer1 = array1.join(' | ');
    var answer2 = array3.join(' | ');
    console.log('answer1:', answer1);
    console.log('answer2:', answer2);

}());