export default function FormField({ label, htmlFor, hint, children, className = "" }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label className="form-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {hint ? <p className="form-hint">{hint}</p> : null}
    </div>
  );
}
