"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  pendingText?: string;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export default function SubmitButton({
  pendingText = "Sending...",
  className = "",
  children,
  disabled = false,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className={`${className} ${pending || disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {pending ? pendingText : children}
    </button>
  );
};
