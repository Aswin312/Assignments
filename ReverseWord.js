function reverseWordsBasic(sentence) {
    let words = sentence.split(" ");
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        reversedWords.push(reversedWord);
    }

    return reversedWords.join(" ");
}
let inputSentence = "My name is Aswin";
let reversedResult = reverseWordsBasic(inputSentence);
console.log(" After Reversed :", reversedResult);