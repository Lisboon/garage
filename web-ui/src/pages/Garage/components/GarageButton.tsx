
type GarageButtonProps = {
  label: string;
  color: "green" | "blue";
  onClick: () => void;
};

function GarageButton({ label, color, onClick }: GarageButtonProps) {
  const style =
    color === "green"
      ? "bg-[#C6FF00] text-black hover:brightness-110"
      : "bg-white/10 text-white hover:bg-white/20";

  return (
    <button
      onClick={onClick}
      className={`w-40 py-3 rounded-xl font-semibold transition shadow-md ${style}`}
    >
      {label}
    </button>
  );
}

export default GarageButton;
