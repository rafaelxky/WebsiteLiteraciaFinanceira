export class ArticlePublicDto{
    constructor(title, content, timestamp, id, creatorId){
        this.title = title;
        this.content = content;
        this.timestamp = timestamp;
        this.creatorId = creatorId;
        this.id = id;
    }
}