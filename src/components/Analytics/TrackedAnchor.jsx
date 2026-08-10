"use client";

export default function TrackedAnchor({ eventLabel, children, ...props }) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", { event_label: eventLabel });
    }
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
