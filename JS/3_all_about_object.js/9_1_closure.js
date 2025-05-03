/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 * environemnt within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */
function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber(); // runner라고 저장하고 getNumber을 실행

console.log(runner); // [Function: innerGetNumber]
// 32번 줄에서 innerGetNumber을 실행하지 않고 함수 자체를 반환했기 때문
console.log(runner()); // 5
// 39 runner() 실행 한 상황은 getNumber()가 실행된 이후인데
// 이미 getNumber의 execution_context가 끝이 난 후(콜스텍에서 사라짐)
// 하지만 runner을 실행 함

/**
 * 1) 데이터 캐싱
 */
function cacheFunction(newNumb){
    // 아래 계산은 매우 오래걸린다는 가정을 했을 때
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction; // ()없이 실행없이 그대로 반환
    // return number * newNumb;
}

// console.log(cacheFunction(10));
// console.log(cacheFunction(20));
// console.log(cacheFunction(30));

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2(){
    var number = 99;

    function increment(){ // increment가 실행되면 number에 1을 증가
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3()); // 103
console.log(runner3()); // 104
console.log(runner3()); // 105
console.log(runner3()); // 106

/**
 * 3) 정보 은닉
 */
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined this로 저장 하지 않았기 때문