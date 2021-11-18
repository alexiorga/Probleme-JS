import ArticleList from "./ArtileData";


const filterByUserId = ArticleList.filter(item => [1,5,8].includes(item.userId))
console.log(filterByUserId)