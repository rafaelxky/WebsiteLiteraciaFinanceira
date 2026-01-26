export class UserService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async NewUser(createdUser) {
        console.log(createdUser);
        const res = await fetch(this.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdUser)
        });
        if (!res.ok) {
            const text = await res.text();
            console.error("Backend error:", res.status, text);
            throw new Error(text || "Erro ao criar utilizador");
        }
        return res.json();
    }

    async UpdateUser(createdUser) {
        const res = await fetch(`${this.baseUrl}/${createdUser.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createdUser)
        });
        if (!res.ok) throw new Error("Erro ao atualizar utilizador");
        return res.json();
    }

    async RemoveUser(id) {
        const res = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Erro ao remover utilizador");
        return true;
    }

    async GetUserById(id) {
        const res = await fetch(`${this.baseUrl}/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar utilizador");
        return res.json();
    }
}
