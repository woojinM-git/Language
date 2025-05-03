/**
 * Using function to create objects
 */
function IdolModel(name, year){
    this.name = name;
    this.year = year;

//     return {}; return {}는 객체이기 때문에, 생성된 this는 무시되고 이 객체가 반환
    // 출력 결과 = {}
    
//     return 123; return 123은 원시값이므로 무시 = 정상적으로 this 반환
    // 출력 결과 = IdolModel { name: '안유진', year: 2003 }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);