// pair programming with Michele B. on July 29th
const wordSearch = (letters, word) => {
    // if matrix is empty, or it is undefined, returns undefined
    if (letters.length === 0) {
        return undefined;
    }

    // this function will iterate through the array and check whether the array contains the word horizontally. If yes, it returns true
    function checkHorizontal(matrix, target) {
        for (let i = 0; i < matrix[0].length; i++) {
            let result = '';
            for (const el of matrix) {
                result += el[i];
                if (result.includes(word)) {
                    return true;
                }
            }
        }
    }

    // checks if the function above, ran with matrix and word as arguments, is true. if so, main function returns true
    if (checkHorizontal(letters, word) === true) {
        return true;
    }
    // if above if ^ is false, then matrix is transposed (using function from yesterday pp exercise).
    let transposed = transpose(letters);

    // we reuse our function, now against the transposed matrix. same if statement as before
    if (checkHorizontal(transposed) === true) {
        return true;
    // if word cannot be found in either original matrix nor transposed, returns false
    } else {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }

    }
    return false;
};

const transpose = function (matrix) {
    let output = [];
    const height = matrix.length;
    const width = matrix[0].length;
    for (let j = 0; j < width; j++) {
        let array = [];
        for (let i = 0; i < height; i++) {
            array.push(matrix[i][j])
        }
        output.push(array);
    }
    return output;
};



module.exports = wordSearch;