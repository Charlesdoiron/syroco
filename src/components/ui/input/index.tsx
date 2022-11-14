import { useState } from "react";

interface Props {
  type?: string;
  label: any;
  placeholder: string;
  id: string;
  autoComplete?: string;
  defaultValue?: string;
  error?: any;
  onChange?: any;
  required?: boolean;
  className?: string;
  rows?: number;
  ref?: any;
  helpText?: string;
  variant?: "small-label" | "label";
  tooltip?: string;
  value?: string | undefined;
}

export const Input: React.FC<Props> = ({
  type = "text",
  label,
  placeholder,
  id,
  autoComplete = "",
  defaultValue = "",
  error,
  rows = 4,
  className,
  variant = "label",
  required,
  ref,
  helpText,
  value,
  onChange,
}) => {
  const [isTouched, setIsTouched] = useState(false);
  return (
    <>
      {label && (
        <label htmlFor={id} className={variant}>
          {label} {required ? "*" : ""}{" "}
        </label>
      )}
      <span className="text-14 text-helptext flex items-center">
        {helpText}
      </span>

      {type === "textarea" ? (
        <textarea
          ref={ref}
          rows={rows}
          onBlur={() => setIsTouched(true)}
          value={value ?? defaultValue}
          id={id}
          onChange={onChange}
          name={id}
          autoComplete={autoComplete}
          className={`block w-full rounded-sm border px-4 py-3 mt-2 focus:border-blue-7 focus:ring-blue-7 sm:text-sm placeholder:medium-15 placeholder:text-border placeholder:italic  ${className} ${
            error && isTouched ? "border-red-500" : "border-border"
          }`}
          placeholder={placeholder}
        />
      ) : (
        <input
          value={value ?? defaultValue}
          onChange={onChange}
          type={type}
          onBlur={() => setIsTouched(true)}
          id={id}
          name={id}
          autoComplete={autoComplete}
          className={` h-10 block w-full rounded-sm border px-4 py-3 mt-2  focus:border-blue-600 focus:ring-blue-600 sm:text-sm placeholder:text-[15px] placeholder:text-border ${className} ${
            error && isTouched ? "border-red-500" : "border-border"
          }`}
          placeholder={placeholder}
        />
      )}
      {isTouched ? (
        error ? (
          <p className="text-[10px] text-red-400 pt-[2px] text-right">
            {error}
          </p>
        ) : (
          <p className="text-[10px] opacity-0 pt-[2px] ">invisible</p>
        )
      ) : (
        <p className="text-[10px] opacity-0 pt-[2px] ">invisible</p>
      )}
    </>
  );
};
