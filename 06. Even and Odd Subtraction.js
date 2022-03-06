function evenAndOdd(inputArr) {

    let even = 0;
    let odd = 0;

    for(let i = 0; i < inputArr.length; i++) {
        if(inputArr[i] % 2 == 0) {
            even += Number(inputArr[i]);
        } else {
            odd += Number(inputArr[i]);
        }
    }

    let sum = even - odd;
    console.log(sum);
}
evenAndOdd([1,2,3,4,5,6])