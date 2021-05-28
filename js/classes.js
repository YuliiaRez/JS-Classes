'use strict';
/*1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для неограниченного числа аргументов.
*//*
function MyArray() {
    if (!new.target) {
        return new MyArray();
    }
    this.length = 0;
}
*/
class MyArray {
    constructor(length) {
        this.length = length;
    }
}

const arr = new MyArray(2);
console.log(arr);

/*
2) Реализовать класс RangeValidator, со следующими свойствами:
■ from (number);
■ to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.*/

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    set from(start) {
        if (
            typeof start !== 'number' || !Number.isSafeInteger(start)
        ) {
            throw new TypeError('Value must be an integer number');
        }
        this._from = start;
    }
    get start() {
        return this._start;
    }
    set to(end) {
        if (
            typeof end !== 'number' || !Number.isSafeInteger(end)
        ) {
            throw new TypeError('Value must be an integer number');
        }
        if (Math.abs(end) < Math.abs(this._from)) {
            throw new RangeError(`This Range doesn't exist`)
        }
        this._to = end;
    }
    get end() {
        return this._end;
    }
    get range() {
        return [this._from, this._to];
    }
    isBetween(n) {
        return n >= this._from && n <= this._to;
    }
}

const diapason = new RangeValidator(10, 20);
console.log(diapason);
console.log(`${diapason.range} array of From, To`);
console.log(`${diapason.isBetween(15)}- inclusion in the range`);
