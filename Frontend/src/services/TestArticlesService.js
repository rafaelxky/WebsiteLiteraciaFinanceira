import { Article } from "../models/Article"

export class TestArticlesService{
    testArticle = new Article("title", "content", "timestamp", 1,"creator");
    constructor(){

    }
    GetArticleByTitle(title){
        return this.testArticle
    }
    GetArticleById(){
        return this.testArticle
    }
}