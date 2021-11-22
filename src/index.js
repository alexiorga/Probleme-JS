import ArtileData from './ArtileData'

console.log(ArtileData)

//TODO1
const wantedUsers = [1, 5, 8]
const filterByUsers = ArtileData.filter((user) =>
  wantedUsers.includes(user.userId)
)

console.log(filterByUsers, 'filteredUsers')
///////////////////////////////////////////////////////////
//TODO2
////////////////////////////////////////////

//identify the klast element
const lastUser = ArtileData.at(-1)
//add the last user in the filteredUsers array
const numberOfUsers = filterByUsers.push(lastUser)

console.log(filterByUsers, 'filteredUsers + lastUser')

///////////////////////////////////////////////////////////
//TODO3
////////////////////////////////////////////

const articleNo85 = ArtileData.find((article) => article.id === 85)
console.log(articleNo85, 'articleNo85')

///////////////////////////////////////////////////////////
//TODO4
////////////////////////////////////////////

const reversedArticles = ArtileData.reverse()
console.log('reversed articles', reversedArticles)

///////////////////////////////////////////////////////////
//TODO5
////////////////////////////////////////////

const userFourArticles = ArtileData.filter((user) => user.userId === 4)
console.log(userFourArticles, 'user4articles')

const slicedUser4Artices = userFourArticles.slice(2, 5)
console.log(slicedUser4Artices, 'sliced4articles')

///////////////////////////////////////////////////////////
//TODO6
////////////////////////////////////////////

//? 6. Filtreaza articolele user-ului cu id-ul 1.
//? Elimina din array-ul obtinut articolul ce contine in title string-ul
//? "est occaecati" si adauga in locul lui (aceeasi pozitie in array)
//? articolul cu id-ul 85 (obtinut la pct 3) din `ArticleList`.

const userOneArticles = ArtileData.filter((user) => user.userId === 1)
console.log(userOneArticles, 'user1articles')

const unwanted = (el) => {
  return el.title.includes('est occaecati')
}
const indexOfUnwanted = userOneArticles.findIndex(unwanted)

const removedArticle = userOneArticles.splice(indexOfUnwanted, 1, articleNo85)
console.log(removedArticle, 'removedArticle')

///////////////////////////////////////////////////////////
//TODO7
////////////////////////////////////////////
//? Afiseaza numarul total de useri si cate post-uri are fiecare.

const allUsers = ArtileData.map((a) => a.userId)

const removeDuplicates = [...new Set(allUsers)]

const noOfUsers = removeDuplicates.length
console.log(noOfUsers, 'number of users')

const noOfPostsOfUser = (userId) => {
  const filterByUsers2 = ArtileData.filter((user) =>
    [userId].includes(user.userId)
  )
  const noOfPosts = filterByUsers2.length
  // console.log('$$$$$$$$$$', filterByUsers2)
  return `User number ${userId} has ${noOfPosts} posts.`
}
const allUsersPosts = removeDuplicates.map((el) =>
  console.log(noOfPostsOfUser(el))
)

///////////////////////////////////////////////////////////
//TODO8
////////////////////////////////////////////

//?  Adauga toti userii intr-un object in care avem cheie pentru fiecare user,
//?    iar fiecare user are lista lui de articole.

const arrayToObject1 = (arr, key) =>
  Object.assign({}, ...arr.map((item) => ({ [item[key]]: [item] })))
console.log(arrayToObject1(ArtileData, 'userId'))
