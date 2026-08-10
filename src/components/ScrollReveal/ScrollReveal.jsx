export default function ScrollReveal({
  children,
  className = "",
  width = "100%",
}) {
  return (
    <div className={className} style={{ width }}>
      {children}
    </div>
  );
}
