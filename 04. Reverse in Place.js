function reverseArr(inputArr){

    let outputArr = [];
    let index = 0;
    
    for(let i = inputArr.length - 1; i >= 0; i--) {
        outputArr[index] = inputArr[i]
        index++;
    }
    
    console.log(outputArr.join(' '));
}
reverseArr(['a', 'b', 'c', 'd', 'e'])