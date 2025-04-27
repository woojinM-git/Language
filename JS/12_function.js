/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 반환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate(){ // calculate라는 함수에 {}안의 내용을 넣는다.
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number){ // 두번째로 선언하면 덮어쓰기가 된다
    console.log((number * 10 / 2 % 3).toString());
    // parameter안에 숫자를 넣어 함수에 숫자 입력 시 결과를 받을 수 있음
}

calculate(4);

/**
 * 함수에서 입력받는 값에대한 정의를 parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

console.log('-----------------------');
function multiply1(x, y){
    console.log(x * y);
}

multiply1(2, 4);

function multiply2(x, y = 10){ // x, y에 10이라는 기본값을 넣음
    console.log(x * y);
}

multiply2(2, 4); // 10이라는 기본값을 넣었지만 x=2, y=4 라는 값을 새로 넣어 8로 출력됌
multiply2(2); // 10이라는 기본값을 넣고 x=2라는 값을 넣어 20으로 출력됌 (y는 기본값인 10으로 들어감)

console.log('------------');

/**
 * 반환받기
 * return 받기
 */
function multiply3(x, y){
    return x * y;
}

const result1 = multiply3(2, 4);
console.log(result1);

const result2 = multiply3(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply4 = (x, y) => {
    return x * y;
}
console.log(multiply4(3, 4));

const multiply5 = (x, y) => x * y;
console.log(multiply5(4, 5));

const multiply6 = x => x * 2;
console.log(multiply6(2));

const multiply7 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply7(2)(5)(7));

function multiply8(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply8(3)(4)(5));

const multiplyTwo = function(x, y){
    return x * y;
}
console.log*(multiplyTwo(4, 5));


const multiplyThree = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}

console.log('-------------');
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

(function(x, y){
    console.log(x * y);
})(4, 5)