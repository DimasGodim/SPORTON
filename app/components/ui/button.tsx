type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "small" | "normal" | "big";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "normal",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer font-medium rounded-lg transition-all hover:shadow-lg";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-95",
    dark: "bg-dark text-white hover:bg-dark/90 active:scale-95",
    ghost: "bg-transparent text-dark hover:bg-gray-100 active:bg-gray-200",
  };

  const sizeStyles = {
    small: "py-2 px-4 text-sm",
    normal: "py-3 px-6 text-base",
    big: "py-4 px-8 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
