function equalArr(inputArr1,inputArr2) {


    let sum = 0;
    let flag = false;
    let diff = 0;
    let x = 0;

    for(let i = 0; i < inputArr1.length; i++){
       
            if(inputArr1[i] === inputArr2[x]){
                sum += Number(inputArr1[i]);
            } else {
                flag = true;
                diff = i;
                break;
        }
        x++;
    }

    if(flag){
        console.log(`Arrays are not identical. Found difference at ${diff} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArr(['1','2','3','4','5'], ['1','2','4','4','5'])