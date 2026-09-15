export function IconSearch({ className = "icon" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.316 9.825c0 3.368-2.05 6.404-5.194 7.692a8.47 8.47 0 0 1-9.164-1.81A8.265 8.265 0 0 1 2.144 6.63C3.45 3.52 6.519 1.495 9.921 1.5c4.638.007 8.395 3.732 8.395 8.325ZM22.5 22.5l-6.558-6.87"
      />
    </svg>
  );
}

export function IconBag({ className = "icon" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16.25 7.8V5.7h4.2l1.05 16.8H2.6L3.65 5.7h4.2a4.2 4.2 0 0 1 8.4 0h-8.4v2.1" />
    </svg>
  );
}

export function IconMenu({ className = "icon" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="square" d="M21 6H3M21 12H3M21 18H3" />
    </svg>
  );
}

export function IconClose({ className = "icon" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="square" d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function IconChevron({
  className = "icon",
  dir = "down",
}: {
  className?: string;
  dir?: "down" | "left" | "right";
}) {
  const rotate =
    dir === "right" ? "rotate-[-90deg]" : dir === "left" ? "rotate-90" : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${className} ${rotate}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
