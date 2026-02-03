import { useMemo, useState } from "react";
import FormField from "./FormField";
import Submit from "./submit";
import { articleService } from "../../Dependencies";
import "../../styles/Form.css";

const initialState = {
  title: "",
  category: "",
  imageUrl: "",
  date: "",
  content: "",
};

export default function ArticleForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const fields = useMemo(
    () => [
      {
        name: "title",
        label: "Titulo",
        type: "text",
        placeholder: "Titulo da noticia",
        required: true,
        autoComplete: "off",
      },
      {
        name: "category",
        label: "Categoria",
        type: "text",
        placeholder: "Ex: Economia, Poupanca",
        autoComplete: "off",
      },
      {
        name: "imageUrl",
        label: "Imagem (URL)",
        type: "url",
        placeholder: "https://...",
        autoComplete: "off",
      },
      {
        name: "date",
        label: "Data",
        type: "date",
        placeholder: "",
        autoComplete: "off",
      },
    ],
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setLoading(true);

    const payload = {
      title: form.title.trim(),
      content: form.content.trim(),
    };

    if (form.category.trim()) payload.category = form.category.trim();
    if (form.imageUrl.trim()) payload.imageUrl = form.imageUrl.trim();
    if (form.date) payload.date = form.date;

    try {
      await articleService.NewArticle(payload);
      setStatus({ type: "success", message: "Noticia adicionada com sucesso." });
      setForm(initialState);
    } catch (err) {
      setStatus({ type: "error", message: err?.message || "Erro ao criar noticia." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="article-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        {fields.map((field) => {
          const id = `article-${field.name}`;
          return (
            <FormField key={field.name} label={field.label} htmlFor={id}>
              <input
                id={id}
                name={field.name}
                type={field.type}
                className="form-input"
                placeholder={field.placeholder}
                required={field.required}
                autoComplete={field.autoComplete}
                value={form[field.name]}
                onChange={handleChange}
              />
            </FormField>
          );
        })}

        <FormField label="Conteudo" htmlFor="article-content" className="form-field-full">
          <textarea
            id="article-content"
            name="content"
            className="form-input form-textarea"
            placeholder="Escreva o conteudo da noticia..."
            rows={8}
            required
            value={form.content}
            onChange={handleChange}
          />
        </FormField>
      </div>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`}>{status.message}</p>
      ) : null}

      <div className="form-actions">
        <Submit label="Publicar noticia" loading={loading} />
      </div>
    </form>
  );
}
