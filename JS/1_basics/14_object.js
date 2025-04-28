/**
 * Object / 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    } // this는 현재 함수가 정의된 객체에서 라는 의미이다
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name'; // key라는 값에 name을 넣는다

console.log(yuJin[key]); // key(name)을 반환함

console.log(yuJin.dance()); // dance라는 함수는 ()를 붙여줘야함

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
// 값이 지정되지않은 함수를 넣으면 그냥 추가된다
console.log(yuJin2);

delete yuJin2['englishName'];
// gelete는 지정한 함수를 삭제한다
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; -> 오류 const로 선언해서 변경 할 수 없다,

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name, // name: name, = name, 키 값과 변수의 이름이 같으면 하나만 해도 된다
};
console.log(yuJin3);