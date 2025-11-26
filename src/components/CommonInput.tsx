import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

export default function CommonInput({
  label,
  required,
  error,
  className = "",
  type = "text",
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-1 text-gray-600 font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          {...rest}
          type={isPassword && showPassword ? "text" : type}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
            ${error ? "border-red-500" : "border-gray-300"}
            ${className}`}
        />

        {/* Password Toggle Icon */}
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer 
            text-gray-600 hover:text-gray-900"
          >
            {showPassword ? (
              <EyeOff size={20} strokeWidth={1.75} />
            ) : (
              <Eye size={20} strokeWidth={1.75} />
            )}
          </span>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
