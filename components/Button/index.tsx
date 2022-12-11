import clsx from "clsx";
import { FC, ReactElement } from "react";

interface ButtonProps {
  Icon?: ReactElement;
  RightIcon?: ReactElement;
  label: string;
  onClick?: () => void;
  className?: any;
  labelClassName?: any;
  transparent?: boolean;
  rightIconClassName?: any;
}

const Button: FC<ButtonProps> = ({
  RightIcon = undefined,
  Icon = undefined,
  label,
  onClick = () => null,
  className,
  labelClassName,
  rightIconClassName,
  transparent,
}) => {
  return (
    <button
      className={clsx(
        transparent ? "button-transparent" : "button",
        "flex justify-center items-center shadow-sm relative",
        className
      )}
      onClick={onClick}
    >
      {Icon && <span className="mr-3">{Icon}</span>}
      <span
        className={clsx(
          labelClassName || "text-btn",
          transparent ? "text-black-tertiary" : "text-text-primary"
        )}
      >
        {label}
      </span>
      {RightIcon && (
        <span className={clsx(rightIconClassName, "absolute right-3")}>
          {RightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
