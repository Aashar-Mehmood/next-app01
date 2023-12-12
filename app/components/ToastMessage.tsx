"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";
type toastMessageProps = {
  message: string;
  type: string;
};
function ToastMessage({
  message: errorMessage,
  type: errorType,
}: toastMessageProps) {
  useEffect(() => {
    if (errorMessage && errorType) {
      if (errorType === "error") {
        toast.error(errorMessage);
      } else if (errorType === "success") {
        toast.success(errorMessage);
      }
    }
  }, [errorMessage, errorType]);

  return <div></div>;
}

export default ToastMessage;
