
import { motion } from "framer-motion";
import { FaCar, FaBox } from "react-icons/fa";

type Action = {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
};

const actions: Action[] = [
  { icon: <FaCar />, label: "Spawnar", onClick: () => alert("Spawnar veículo") },
  { icon: <FaBox />, label: "Guardar", onClick: () => alert("Guardar veículo") },
];

function ActionMenu() {
  return (
    <motion.div
      className="flex flex-col gap-3 w-full max-w-[180px]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white bg-[#C6FF00] text-black hover:brightness-110 transition w-full"
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </motion.div>
  );
}

export default ActionMenu;
