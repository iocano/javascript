(function () {
    var number1 = new Number(3);
    number1.toFixed(2); // 3.00

    var string1 = new String('Jane');
    var jPosition = string1.indexOf('a'); // 0
    var string1Length = string1.length; // 4

    var date1 = new Date(2021, 1, 1);
    var date2 = new Date('1/1/2021');
    var year = date1.getFullYear(); // 2021
    var month = date1.getMonth(); // 1
    var day = date1.getDate(); // 1

    var date3 = new Date('1/1/0000 12:01:30');
    var hour = date3.getHours(); // 12
    var minutes = date3.getMinutes(); // 1
    var seconds = date3.getSeconds(); // 30

    var date4 = new Date(0, 0, 0, 10, 33);
    var hour2 = date4.getHours(); // 10
    var minutes = date4.getMinutes(); // 33
})();
