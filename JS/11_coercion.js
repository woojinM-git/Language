/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + ''; // 숫자에 글자형태를 더하면 자동으로 글자로 변환
console.log(typeof test, test);

console.log('98' + '2'); 
console.log('98' * 2); // 숫자에는 *의 개념이 없기에 숫자로 변환됨
console.log('98' - 2); // - 는 숫자로 자동변환됨
// 작성자의 의도가 확실하게 표시되게 코드를 작성하자

console.log('--------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
// 99라는 숫자를 String으로 변환
console.log(typeof (true).toString(), (true).toString());
// ture라는 값을 String으로 변환
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
// Int는 정수까지만 표시 ex) 0, 1, 2, 3
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
// Float은 실수 표시 ex) 0.99, 1.99, 2.99, 3.99
console.log(typeof +'1', +'1');

console.log('----------------------');
/**
 * Boolean 타입으로의 변환
 */
console.log(!!'x'); // String값 안에 값이 들어있으면 Boolean은 true로 반환된다.

console.log(!!''); // String값 안에 값이 들어있지않으면 Boolean은 flase로 반환된다.

console.log('----------------------');

console.log(!!0); // 숫자 0은 false
console.log(!!'0');
console.log(!!'false'); // 문자열 안에 false라는 값을 넣어도 Boolean은 문자열에 값이 들어가 있다고 판단해서 true로 반환함
console.log(!!false); // false 라는 자체의 값을 넣으면 false로 반환
console.log(!!undefined); // undefined는 boolean으로 false
console.log(!!null); // null은 boolean으로 false

console.log(!!{}); // {}와 같은 오브젝트는 true로 반환됨
console.log(!![]); // []또한 오브젝트이므로 true로 반환됨

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 이는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다
 */