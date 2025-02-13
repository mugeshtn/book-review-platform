import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
    toast.dismiss();
    toast[type](message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
};
