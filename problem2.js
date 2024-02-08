


function checkName(name, singleLetter) {
    if (typeof name !== 'string') {
        return 'invalid'
    }
    const vars=name.toLowerCase()
    const nameLestLetter =vars[vars.length - 1]; // mark.
    if (singleLetter.includes(nameLestLetter)) {
        return 'Good Name';
    }
    else {
        return 'Bad Name';
    }
}

// complited

