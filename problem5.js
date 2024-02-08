

function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) && arr !== 'number'){
        return 'invalid input'
    }
    let sum = 0;
    const tax = arr[2];
    for (let array of arr) {
        sum = sum + array;   
    }
    if (tax >= 3000) {
        const tax1 = tax * 20 / 100;
        const saving= sum- (tax1+livingCost)   
        if(saving<0){
            return 'earn more' ;
        }
        return saving;
    }
    else{
        const saving=sum-livingCost;
        return saving;
    }
}


// complited
