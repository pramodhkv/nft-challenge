import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterMessage = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          className: "",
          position: "bottom-center",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "white",
          },
          success: {
            duration: 3000,
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </div>
  );
};

export default ToasterMessage;
