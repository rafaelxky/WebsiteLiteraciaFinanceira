import { useMemo, useState } from "react";
import FormField from "./FormField";
import Submit from "./submit";
import "../../styles/Form.css";

const initialState = {
  company: "",
  email: "",
  phone: "",
  password: "",
};

export default function ClientForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const fields = useMemo(
    () => [
      {
        name: "company",
        label: "Company",
        type: "text",
        placeholder: "Company name",
        autoComplete: "organization",
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+1 (555) 123-4567",
        autoComplete: "tel",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "name@company.com",
        required: true,
        autoComplete: "email",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Create a password",
        required: true,
        autoComplete: "new-password",
      },
    ],
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ type: "success", message: "Client saved locally." });
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        {fields.map((field) => {
          const id = `client-${field.name}`;
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
                inputMode={field.inputMode}
                value={form[field.name]}
                onChange={handleChange}
              />
            </FormField>
          );
        })}

      </div>

      {status.message ? (
        <p className={`form-status form-status-${status.type}`}>{status.message}</p>
      ) : null}

      <div className="form-actions">
        <Submit label="Register" />
      </div>
    </form>
  );
}
