
// 3
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let area = [];
    for (const numbers of array) {
        // console.log(numbers)
        if (typeof numbers === "number" && !isNaN(numbers) ) {
            // console.log(numbers)
            area.push(numbers);
        }
    }
    return area;
}

// complited


// 4

