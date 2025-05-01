
type CarSpecsProps = {
  topSpeed: number;
  acceleration: number;
  weight: number;
  plate: string;
};

function CarSpecs({ topSpeed, acceleration, weight, plate }: CarSpecsProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white w-80">
      <h3 className="text-lg font-semibold tracking-wider text-[#C6FF00] uppercase mb-4">
        Ficha Técnica
      </h3>
      <ul className="space-y-2 text-sm text-gray-200">
        <li><strong>Velocidade:</strong> {topSpeed} km/h</li>
        <li><strong>Aceleração:</strong> {acceleration} m/s²</li>
        <li><strong>Peso:</strong> {weight} kg</li>
        <li><strong>Placa:</strong> {plate}</li>
      </ul>
    </div>
  );
}

export default CarSpecs;
