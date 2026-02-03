import "../../styles/Form.css";

export default function Submit({ label = "Guardar", loading = false, disabled = false, className = "" }) {
  return (
    <button
      type="submit"
      className={`form-submit ${className}`.trim()}
      data-state={loading ? "loading" : "idle"}
      disabled={disabled || loading}
    >
      {loading ? "A guardar..." : label}
      {loading ? <span className="form-spinner" aria-hidden="true" /> : null}
    </button>
  );
}
