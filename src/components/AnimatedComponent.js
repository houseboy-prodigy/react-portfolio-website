import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimationText = ({ val }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <motion.div
      animate={{
        text: {
          opacity: [0, 1],
          duration: 0.5,
          delay: e => e.index * 0.1,
        },
      }}
    >
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      />
    </motion.div>
  );
};

export default AnimationText;
