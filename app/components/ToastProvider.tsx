"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastProvider() {
  return (
    <>
      <ToastContainer hideProgressBar={true} position="top-left" />
    </>
  );
}
