var employee = {
    name: 'Yovan', 
    age: 33,
    address: '24, Avenue Surath, Quatre-Bornes',
    donation: '1253.50'
};

var employee2 = {
    name: 'Yovan', 
    age: 33,
    address: '24, Avenue Surath, Quatre-Bornes',
    donation: '1253.50'
};

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

console.log('Object.getOwnPropertyNames(employee):', Object.getOwnPropertyNames(employee));

console.log('employee === employee2:', employee === employee2);
console.log('areEquivalent(employee, employee2):', areEquivalent(employee, employee2));