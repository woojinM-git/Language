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
