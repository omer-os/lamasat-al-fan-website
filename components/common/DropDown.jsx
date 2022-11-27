import { motion } from "framer-motion";
import { useState } from "react";

export default function DropDown({ Ques, Ans }) {
  const [Open, setOpen] = useState(false);
  return (
    <div className="flex border border-zinc-300 rounded-t group flex-col">
      <div
        onClick={() => setOpen(!Open)}
        className={`
        ${
          Open && "bg-third"
        } bg-white transition-all py-3 px-4 font-bold flex rounded-t cursor-pointer justify-between items-center text-sm `}
      >
        <span className="max-w-[19em]">{Ques}</span>
        <motion.img
          animate={{
            rotate: Open ? 0 : 180,
          }}
          src="/icons/down-arrow.png"
          alt=""
        />
      </div>
      <motion.div
        animate={{
          height: Open ? "3em" : "0px",
          margin: Open ? "1em" : "0px",
        }}
        transition={{
          type: "just",
        }}
        className="overflow-hidden text-zinc-500 !px-[15px] transition-all "
      >
        {Ans}
      </motion.div>
    </div>
  );
}
