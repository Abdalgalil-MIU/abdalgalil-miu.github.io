function max(n1,n2){
    return n1 > n2? n1:n2;
}

function maxOfThree(n1,n2,n3){
   return max(max(n1,n2),n3);
}

function isVowel(char){
   return 'AEIOU'.indexOf(char.toUpperCase()) !== -1;
}

function sum(...arr) {
    return arr.reduce((accumulator,item)=> {return accumulator+item});
}

function multiply(...arr) {
    return arr.reduce(
        (accumulator,item)=>{ return accumulator*item}
    );
}

function reverse(word) {
    let reversedWord = "";
    for(let i = word.length-1;i>=0;--i){
        reversedWord += word[i];
    }
    return reversedWord;
}
function findLongestWord(...words) {
    return words.reduce((longestWord="",word)=>{return max(longestWord.length,word.length)})
}
function filterLongWords(i,...words) {
    let str = [];
    str=words.filter(word=>word.length>i);
    return str;
}
function findShortestWord(...words) {
    return words.reduce((shortestWord,currentword)=>
    {
        return currentword.length < shortestWord.length ? currentword : shortestWord;
    })
}

const mapExample = (...arr)=>{ return arr.map(elem=>elem*10)};
const filterExample= (...arr)=>{return arr.filter(num=>num===3)};
const reduceExample = (...arr)=>{return arr.reduce(
    (accumulator,elem)=>{return accumulator*elem}
)};


function assertArray(expected, found) {
    console.assert(JSON.stringify(expected) === JSON.stringify(found()), "TEST FAILED.  Expected " + expected + " found " + found());
    if (JSON.stringify(expected) === JSON.stringify(found())) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}
function assert(expected,found){
    console.assert(expected===found(),"TEST FAILED.  Expected " + expected + " found " + found());
    if(expected===found()){
        return "TEST SUCCEEDED";
    }
    else{
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

function longestNoSpace(...str){
    return str.filter(word=>word.indexOf(" ")===-1)
            .map(word=>word.length)
            .reduce((word,currentword)=>{
                return currentword > word ? currentword : word;
            },0);
}

console.log("Expected output of max(100,10) is 100 "+assert(100, ()=>max( 100, 10)));
console.log("Expected output of maxOfThree(100,4,200) is 200 "+assert(200, ()=>maxOfThree( 100,4,200)));

console.log("\n");
console.log("Expected output of isVowel(a) is true "+assert(true, ()=>isVowel("a")));
console.log("Expected output of isVowel(k) is false "+assert(false, ()=>isVowel("k")));
console.log("Expected output of isVowel(u) is true "+assert(true, ()=>isVowel("u")));

console.log("\n");
console.log("Expected output of sum([1,2,3,4]) is 10 "+assert(10, ()=>sum(1,2,3,4)));
console.log("Expected output of sum([3,3,3,4]) is 13 "+assert(13, ()=>sum(3,3,3,4)));

console.log("\n");
console.log("Expected output of multiply([4,8,9,7]) is 2016 "+assert(2016, ()=>multiply(4,8,9,7)));
console.log("Expected output of multiply([5,2,3,1]) is 30 "+assert(30, ()=>multiply(5,2,3,1)));

console.log("\n");
console.log("Expected output of reverse(\"jag testar\") is ratset gaj "+assert("ratset gaj", ()=>reverse("jag testar")));

console.log("\n");
console.log("Expected output of findLongestWord([okay,abdalgalil,vowel]) is 5 "+assert(5, ()=>findLongestWord("okay","abdalgalil","vowel")));
console.log("Expected output of findShortestWord([okay,abdalgalil,vowel]) is okay "+assert("okay", ()=>findShortestWord("okay","abdalgalil","vowel")));

console.log("\n");
console.log("Expected output of filterLongWords(4,[okay,abdalgalil,vowel]) is [water,vowel] "+assertArray(['water','vowel'], ()=>filterLongWords(4,'okay','water','vowel')));

console.log("\n");
console.log("Expected output of mapExample([5,8,3,1]) is [50,80,30,10] "+assertArray([50,80,30,10], ()=>mapExample(5,8,3,1)));

console.log("\n");
console.log("Expected output of filterExample([5,3,8,5,3,22]) is [3,5,3] "+assertArray([3,3], ()=>filterExample(5,3,8,5,3,22)));

console.log("\n");
console.log("Expected output of filterExample([1,5,4,6]) is 120 "+assert(120, ()=>reduceExample(1,5,4,6)));

console.log("\n");
console.log(longestNoSpace("hello","world!"));

