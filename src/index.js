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

console.log(userFourArticles[2].indexOf())
