function isPalindrome(input) {
    let aprxMidPoint = Math.floor(input.length / 2);
    for (let i = 0; i < aprxMidPoint; i++)
        if (input[i] !== input[input.length - i - 1])
            return false;

    return true;
}

console.log(isPalindrome("134112"));
console.log(isPalindrome("1112111"));
console.log(isPalindrome("madam"));
