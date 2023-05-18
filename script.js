// complete the given function

function palindrome(str){
	let reverseWord = str.split(" ").map((e) => {return e.trim();}).reverse().join("");
    return (str === reverseWord)? true : false;
}
module.exports = palindrome
