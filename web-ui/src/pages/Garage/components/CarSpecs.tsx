type CarSpecsProps = {
  topSpeed: number;
  acceleration: number;
  weight: number;
  plate: string;
};

function CarSpecs({ topSpeed, acceleration, weight, plate }: CarSpecsProps) {
  return (
    <div className="text-sm">
      <h3 className="text-[#C6FF00] text-lg font-semibold mb-4 tracking-wider uppercase">
        Ficha Técnica
      </h3>
      <ul className="space-y-2 text-white/80 leading-relaxed">
        <li>
          <span className="text-white font-bold">Velocidade Máxima:</span> {topSpeed} km/h
        </li>
        <li>
          <span className="text-white font-bold">Aceleração (0-100):</span> {acceleration}s
        </li>
        <li>
          <span className="text-white font-bold">Peso:</span> {weight} kg
        </li>
        <li>
          <span className="text-white font-bold">Placa:</span> {plate}
        </li>
      </ul>
    </div>
  );
}

export default CarSpecs;
