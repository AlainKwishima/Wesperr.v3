import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import appleTouchIcon from "../assets/CompressJPEG.Online_img(512x512) (3).png"; // Import the new image
import group462 from "../assets/Group 462.png"; // Import the new image

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <motion.img
        src={appleTouchIcon}
        alt="Loading..."
        className="w-17 h-17"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 10, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loading;
