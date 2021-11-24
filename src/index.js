import ArticleList from "./ArtileData";
console.log('ArticleList', ArticleList)
let newArticleList = Array.from(ArticleList)
let ex8ArticleList = Array.from(ArticleList)
let ex1Arr = []
let ex5Arr = []
let ex3 = {}
let ex6Arr = []

ex1Arr = ArticleList.filter(function (el) {
    return el.userId === 1 || el.userId === 5 || el.userId === 8  
})

ArticleList.filter(function (el) {
    if(el.id === 85){
        ex3 =  el
    }
})

ex5Arr = ArticleList.filter(function (el) {
    return el.userId === 4 
})

ex6Arr = ArticleList.filter(function (el) {
    return el.userId === 1 
})

let elementThatHaveTitle;
ex6Arr.forEach( (element) => {
    if(element.title.includes("est occaecati")){  
        elementThatHaveTitle = element
    }
});

ex6Arr.splice(ex6Arr.indexOf(elementThatHaveTitle), 1, ex3);


ex8ArticleList.sort(function(a, b){
    if(a.userId < b.userId) { return -1; }
    if(a.userId > b.userId) { return 1; }
    return 0;
})
let ex8Arr = {}
let temp = []
ex8ArticleList.forEach( (currentValue) => {
    if(ex8Arr.hasOwnProperty([currentValue.userId]) === false){
        temp = []
        temp.push(currentValue)
    } else {
        temp.push(currentValue)
    }
    ex8Arr[currentValue.userId] = temp
})

let numberOfUsers = 0 
let ex7Arr = {}
for (let key in ex8Arr) {
    ex7Arr['user-'+key] =  ex8Arr[key].length
    numberOfUsers = Object.keys(ex8Arr).length
}

console.log('EX 1.', ex1Arr)
console.log('EX 2.', ex1Arr[ex1Arr.length-1])
console.log('EX 3.', ex3)
console.log('EX 4.', newArticleList.reverse())
console.log('EX 5.', ex5Arr.slice(2, 5))
console.log('EX 6.', ex6Arr)
console.log('EX 7.', ex7Arr, 'number of users:', numberOfUsers)
console.log('EX 8.', ex8Arr)


