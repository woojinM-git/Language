/**
 * Scope
 */
var numberOne = 20;

function levelOne(){
    console.log(numberOne); // 4번 줄에서 선언한 numberOne
}

// levelOne(); // 20 
// // 함수를 실행할 때에 함수 밖에있는 변수에 접근할 수 있다.
// // 함수 상위 스코프를 포함한다

// function levelOne(){
//     var numberOne = 40; // var numberOne 새로 선언

//     console.log(numberOne); // 가장 가까운 곳에 있는 변수를 가져온다
// }

// levelOne(); // 40

// 함수 스코프 안에서 새로 선언하게되면 기존에 있던 바깥의 변수를 덮어씌우지는 않는다
console.log(numberOne); // 20 

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        // 29번 줄 값 99 출력
        console.log(`levelTwo numberOne : ${numberOne}`);
        // 가장 가까운 스코프에 있는 변수 값 40 출력
        // 만약 상위 스코프에 numberOne이 없다면 전체에서 가져옴
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
    // 현재 함수 스코프의 numberOne 값 40 출력
}
// 위에서 알 수 있듯 모든 선언은 가장 가까운 스코프에 있는 선언부터 사용

levelOne();
console.log(numberOne); // 20 출력
// console.log(numberTwo); // numberTwo는 정의되지 않았음

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다
 */
var numberThree = 3;

function functionOne(){
    var numberThree = 100;
    
    functionTwo();
}

function functionTwo(){ // 글로벌 스코프에서 변수 값을 가져온다
    console.log(numberThree);
}

functionOne(); // 3

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`) // i 값 변경 = 10
// var을 사용했을 때 스코프가 새로 생기는 경우는 함수를 사용했을 때 한정
// forLoop의 i 가 글로벌 스코프에 그대로 적용되어 값이 바뀌게 됌

i = 999;
// block level scope
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope ; ${i}`);
// let, const 사용 시 함수뿐만 아니라 forLoop, whileLoop, if 와 같은 block level scope도 만들 수 있다

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */