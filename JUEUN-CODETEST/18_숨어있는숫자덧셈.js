// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    let sum=0
    for(i=0;i<my_string.length;i++){
        if(!isNaN(my_string[i])){
            sum+=Number(my_string[i]);
        }
    }
    return sum
}