export class TestArticlesService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    async GetArticleByTitle(title){
        const res = await fetch(`${this.baseUrl}?page=0&size=10`);
        if (!res.ok) throw new Error("Erro ao buscar artigos");
        const page = await res.json();
        const content = page?.content || [];
        return content.find((article) => article?.title === title);
    }

    async GetArticleById(id){
        const res = await fetch(`${this.baseUrl}/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar artigo");
        return res.json();
    }

    async GetUniqueArticle(page){
        const res = await fetch(`${this.baseUrl}?page=${page}&size=1`);
        if (!res.ok) throw new Error("Erro ao buscar artigos");
        return res.json();
    }

    async NewArticle(article){
        const res = await fetch(this.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        });
        if (!res.ok) throw new Error("Erro ao criar artigo");
        return res.json();
    }

    async UpdateArticle(article){
        const res = await fetch(`${this.baseUrl}/${article.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        });
        if (!res.ok) throw new Error("Erro ao atualizar artigo");
        return res.json();
    }

    async RemoveArticle(id){
        const res = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Erro ao remover artigo");
        return true;
    }
}
