//문자열 my_string이 매개변수로 주어집니다. 
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = '';
    result1 = my_string.split(''); // 문자열 배열로 바꾸기
    result2 = result1.reverse(); // 배열 뒤집기
    answer=result2.join(''); // 배열을 합쳐서 문자열로
    return answer;
}