type VehicleCardProps = {
  name: string;
  image?: string;
  onClick: () => void;
  selected: boolean;
};

function VehicleCard({ name, image, onClick, selected }: VehicleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer snap-center w-40 rounded-xl border transition-all duration-300 ${
        selected ? "border-[#C6FF00]" : "border-transparent"
      } hover:border-[#C6FF00] p-2 bg-black/10 backdrop-blur-sm shadow-lg`}
    >
      <img
        src={image || "https://cdn.discordapp.com/attachments/1326903184664297532/1367413895551258634/LAMBORGHINI_URUS_4.png?ex=68147eee&is=68132d6e&hm=8f2049d8567dd3577fcb87fd869c2062a5b860dca6f630f80544402cc7365c8b&"}
        alt={name}
        className="w-full h-24 object-contain mb-2 transition-transform duration-300 hover:scale-105"
      />
      <p
        className={`text-xs text-center ${
          selected ? "text-[#C6FF00]" : "text-white/80"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default VehicleCard;
