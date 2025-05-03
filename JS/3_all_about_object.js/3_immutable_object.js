/**
 * Immutable Objcet
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
        // return new Date().getFullYear() = 현재연도
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 나이 = 현재연도 - age(현재연도-나이)
    }
}

console.log(yuJin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin)); // 기본 isExtensible값은 true이다

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);
// Object.preventExtensions = 새로운 프로퍼티 추가가 금지
// 또한 그 순간, 객체의 상태가 false로 변경
// 따라서 console.log() 시 false로 출력

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'; // 추가되지않음 = 위에 preventExtensions 때문
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
        // return new Date().getFullYear() = 현재연도
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 나이 = 현재연도 - age(현재연도-나이)
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));
 // isSealed = Seal이 되어있냐, 즉 봉인이 되어있냐 물어보는 함수 true / false

 Object.seal(yuJin2); // yuJin2를 seal, 봉인 해준다(묶어 준다)

 console.log(Object.isSealed(yuJin2));

 yuJin2['groupName'] = '아이브'; // groupName 추가 안됌 = because Seal
console.log(yuJin2);

delete yuJin2['name']; // delete 삭제 안됌 = because Seal

console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
        // return new Date().getFullYear() = 현재연도
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 나이 = 현재연도 - age(현재연도-나이)
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3); // 추가 안됌

delete yuJin3['name'];
console.log(yuJin3); // 삭제 안됌

// Object.defineProperty(yuJin3, 'name', { -> yuJin3객체에 name속성을 코드팩토리로 정의하며,
//     value: '코드팩토리',                  읽기만 가능하고 수정/삭제/열거 모두 불가능한 속성으로 만듬
// })
// 오류 = TypeError: Cannot redefine property: name = 속성 변경 불가
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
/**
 * Freeze
 *
 * Extensible, Seal을 추가하고 나서도 writable까지 false로 만드는 값을 추가, 삭제, 변경 불가한다
 * 가장 상위
 */

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); // yuJin4 오브젝트를 freeze 상태로 한다
console.log(Object.isFrozen(yuJin4['wonYoung'])); // wonYoung 오브젝트가 freeze 상태인가? = false
// = 상위 object를 freeze로 해도 하위 object는 