import ArticleList from "./ArtileData";

const users = [1,5,8]
const filterByUserId = ArticleList.filter(item => users.includes(item.userId))




console.log(ArticleList.find(item=>item.id === 85))