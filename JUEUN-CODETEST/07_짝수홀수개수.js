function solution(num_list) {
    var answer = [0,0]
    var a = 0
    var b = 0
    for(i in num_list){
        if(num_list[i]%2==0){
            a++
            answer[0]=a
        }
        else{
            b++
            answer[1]=b
        }
    }
    return answer;
}