// CardWrapper.jsx
// A reusable box: whatever you put between <CardWrapper> ... </CardWrapper>
// arrives here as "children".

function CardWrapper({ title, footer, children, style, ...rest }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "15px 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff"
  };

  return (
    // The parent's style is merged with the default style.
    // Any extra props (id, className, onClick...) are forwarded with {...rest}.
    <div style={{ ...cardStyle, ...style }} {...rest}>
      <h2 style={{ marginTop: 0, color: "#1976d2" }}>{title}</h2>

      <div>{children}</div>

      {/* footer is optional. It's shown only if one is passed */}
      {footer && (
        <div style={{ borderTop: "1px solid #eee", marginTop: "10px", paddingTop: "8px" }}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default CardWrapper;