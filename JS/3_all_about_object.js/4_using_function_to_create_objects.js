/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){ // 만약 new가 없는 함수를 만나면 
        return new IdolModel(name, year); // IdoModel안에서 name과 year을 넣어준다
    }

    this.name = name; // 변수
    this.year = year;

    this.dance = function() { // 생성자 함수
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003); // 생성자 함수에는 new 필요
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);
 // Error = Arrow함수에서는 new키워드를 사용할 수 없다.
 // new 키워드는 일반 함수에서 사용 할 수 있다.