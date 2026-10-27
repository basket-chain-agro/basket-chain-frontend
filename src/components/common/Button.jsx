import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33C749] focus-visible:ring-offset-2";

const variants = {
  primary: "bg-[#33C749] text-white hover:bg-green-600",
  secondary: "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50",
};

export default function Button({
  to,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
