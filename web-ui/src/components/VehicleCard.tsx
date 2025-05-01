type VehicleCardProps = {
  name: string;
  image: string;
  onClick: () => void;
  selected: boolean;
};

function VehicleCard({ name, image, onClick, selected }: VehicleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer snap-center p-2 w-28 rounded-xl border-2 ${selected ? "border-yellow-400" : "border-gray-700"} hover:border-yellow-300 transition text-center bg-gray-800`}
    >
      <img src={image} alt={name} className="rounded w-full h-16 object-cover mb-1" />
      <p className="text-xs">{name}</p>
    </div>
  );
}

export default VehicleCard;
