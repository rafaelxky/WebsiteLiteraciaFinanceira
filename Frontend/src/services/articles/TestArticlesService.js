import { ArticlePublicDto } from "../../models/articles/ArticlePublicDto";

export class TestArticlesService{
    testArticle = new ArticlePublicDto("title", "content", "timestamp", 1,2);
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    GetArticleByTitle(title){
        return this.testArticle
    }
    GetArticleById(){
        return this.testArticle
    }
    GetUniqueArticle(page){
        return this.testArticle
    }
    NewArticle(article){
        return
    }
    UpdateArticle(article){
        return
    }
    RemoveArticle(id){
        return
    }
}