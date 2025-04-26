/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

console.log('--------------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('-----------------------')

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result)

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

/**
 *  number++ = 후위 증가 / number-- = 후위 감소
 *  number를 먼저 result에 할당하고, 그 다음 number를 1 증가/감소시킨다.
 */

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 *  number++ = 전위 증가 / number-- = 전위 감소
 *  number를 1증가/감소시키고, result에 할당한다.
 *  -현실적으로 많이 쓰이지 않음-
 */

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '90';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true; /*true라는 boolean값의 숫자형태는 1 이다*/
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample); /*false라는 boolean값의 숫자형태는 0 이다*/
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99'; /*-가 붙어서 작성된다 -> 반대로 실행이 된다*/
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 * #) 실무에서는 ==, != 은 주로 사용하지 않습니다.
 */

console.log(5 == 5);
console.log(5 == '5'); // true -> String 타입을 왼쪽의 숫자 형태로 바꾸면 5가 나오니까 true이다
console.log(0 == ''); // true -> '' 은 변환하면 0이 된다
console.log(true == 1); // true는 변환하면 1이다
console.log(false == 0); // false는 변환하면 0이다
console.log(true == '1');

// ===는 값과 타입의 비교
// 실무에서는 === 를 주로 사용
console.log(5 === 5); 
console.log(5 === '5'); // false -> 타입이 달라 거짓
console.log(0 === ''); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === '1'); // false

console.log('------------------------')

// = 앞에 ! 를 붙임으로서 부정연산자가 된다 반대의 값 출력
console.log(5 != 5); 
console.log(5 != '5');
console.log(0 != ''); 
console.log(true != 1); 
console.log(false != 0); 
console.log(true != '1');

// ==앞에 !를 붙임으로서 부정연산자 + 타입비교
// 실무에서는 !== 를 주로 사용
console.log(5 !== 5); 
console.log(5 !== '5');
console.log(0 !== ''); 
console.log(true !== 1); 
console.log(false !== 0); 
console.log(true !== '1');

console.log('------------------------')

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operater)
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다');
// 10 > 0 = 10이 0보다 크다
// true라면 '10이 0보다 크다' 출력
// false라면 '10이 0보다 작다' 출력
// :(콜론) 을 기준으로 왼쪽이 true, 오른쪽이 false

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('------------------------')

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('------------------');

/**
 * 단축평가 (short curcuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);
console.log('---------------------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);