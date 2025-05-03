/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// clss 강의에서 배울 때 상속에서 부모 클래스에 해당하는 값이다.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//     showHidden: true,
// });

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
// IdolModel.prototype이 ===(같나요?) IdolModel = true 
// 즉 같은 메모리 공간을 갖고 있음
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__); // __proto__는 컴퓨터 전체에 파일이 생김
console.log(yuJin.__proto__ === IdolModel.prototype);
// true, 즉 proto가 부모격인데 IdolModel.prototype도 부모격이다

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);
// IdolModel의 최상위 부모는 Object 이다

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);
// false

console.log(yuJin2.hasOwnProperty('sayHello'))

function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);
// true

console.log(yuJin3.hasOwnProperty('sayHello'));
// false = hasOwnProperty가 true이면 yuJin3 안에 직접적으로 선언되어 있다는 뜻
// false = yuJin3의 소속되어있지않다, 하지만 사용할 수 있음
// 즉 상속받은 값이다, 상위 요소에서 소속되어 있다

IdolModel3.sayStaticHello = function(){
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return '안녕하세요 저는 인스턴스메서드 입니다!';
    }
    // prototype 메서드를 덮어 씌울 수 있는 인스턴스 메서드
}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요 저는 prototyep 메서드 입니다!';
}
// prototype 메서드 호출

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){ // 프로토타입에 추가하면 인스턴스를 만들 때 모두 상속을 받기 때문에 효율적으로 관리 할 수 있다.
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); // 레이 인사를 합니다.

console.log(ray.constructor === FemaleIdolModel);
// constructor는 ray 안의 값은 아니다. 하지만
// 모든 프로토타입 객체에는 constructor 프로퍼티가 기본적으로 존재한다
// constructor는 함수를 가리키는 circular reference(순환참조)가 된다
// 그렇기에 ray 의 프로토도 constructor가 존재하고 상속받아서 가져올 수 있다.
console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true


console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype);