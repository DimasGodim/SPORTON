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
    "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-101";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-dark text-white hover:bg-dark/85",
    ghost: "bg-transparent hover:bg-gray-100 text-dark",
  };

  const sizeStyles = {
    small: "py-[10px] px-7",
    normal: "py-4 px-9",
    big: "py-5 px-11",
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
