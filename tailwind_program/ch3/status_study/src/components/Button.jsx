import clsx from "clsx";

/*
    variant: 'solid' | 'outline' | 'ghost'
    colorScheme: 'blue' | 'gray' | 'red'
    size: 'sm' | 'md' | 'lg'
    isDisabled: boolean
    children: ReactNode

*/
const Button = ({
  variant = "solid",
  colorScheme = "blue",
  size = "md",
  isDisabled = false,
  children,
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition-colors";

  const variants = {
    solid: "text-white",
    outline: `border text-${colorScheme}-500`,
    ghost: `text-${colorScheme}-500 bg-transparent`,
  }[variant];
  const colors = {
    solid: `bg-${colorScheme}-500 hover:bg-${colorScheme}-600`,
    outline: `hover:bg-${colorScheme}-50`,
    ghost: `hover:bg-${colorScheme}-100`,
  }[variant];
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  }[size];
  const disabled = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button className={clsx(base, variants, colors, sizes, disabled)}>
      {children}
    </button>
  );
};

export default Button;
