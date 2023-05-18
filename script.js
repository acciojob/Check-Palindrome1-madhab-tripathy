// complete the given function

function palindrome(str){
	str = str.toLowerCase()
	let reverseWord = str.split(" ").map((e) => {
        return e.trim();
    }).reverse().join("");
    if(reverseWord.length === str.length){
        let temp = str.split("").reverse().join("");
        return (str === temp)? true : false;
    }
    return (str === reverseWord)? true : false;
}
module.exports = palindrome
