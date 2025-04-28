/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('---------------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);

console.log('------------------');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 * 
 * Spread Operator는 순서가 중요하다
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = { // name을 지정하고 yuJin3를 가져오면 덮어 씌워진다
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = { // yuJin3을 가져오고 name을 지정하면 나중에 선언된 name이 덮어 씌워진다
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
];
console.log(numbers2); // [ 10, 1, 3, 5 ]

// const numbers = [1, 3, 5];
// const numbers2 = [
//     ...numbers,
//     10,
// ];
// console.log(numbers2); // [ 1, 3, 5, 10 ]