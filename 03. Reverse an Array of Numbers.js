function reverseNums(n,inputArr){

    let output = '';

    for(let i = n - 1; i >= 0; i--){
        output += inputArr[i] + ' ';
    }

    console.log(output);
}
reverseNums(2, [66, 43, 75, 89, 47])