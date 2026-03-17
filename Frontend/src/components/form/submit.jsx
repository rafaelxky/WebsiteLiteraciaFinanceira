import { langService } from "../../Dependencies";
import "../../styles/Form.css";

export default function Submit({ label = "", loading = false, disabled = false, className = "" }) {
  const lang = langService.map;

  if(label === "")
    label = lang?.saveSubmit;

  return (
    <button
      type="submit"
      className={`form-submit ${className}`.trim()}
      data-state={loading ? "loading" : "idle"}
      disabled={disabled || loading}
    >
      {loading ? lang?.savingSubmit : label}
      {loading ? <span className="form-spinner" aria-hidden="true" /> : null}
    </button>
  );
}
