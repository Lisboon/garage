type VehicleDetailsProps = {
  name: string;
};

function generateDescription(name: string): string {
  return `${name} é feito para chamar atenção com seu design ousado e performance impecável. Perfeito para as ruas da Metrópole, entrega estilo e velocidade.`;
}

function VehicleDetails({ name }: VehicleDetailsProps) {
  const description = generateDescription(name);

  return (
    <div className="max-w-md text-white">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <p className="text-sm text-white/80 leading-relaxed">
        {description.split(" ").map((word, idx) => {
          const highlightWords = ["design", "performance", "Metrópole", "velocidade", "estilo"];
          const isHighlight = highlightWords.some(h => word.toLowerCase().includes(h.toLowerCase()));
          return (
            <span
              key={idx}
              className={isHighlight ? "text-[#C6FF00] font-medium" : ""}
            >
              {word + " "}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default VehicleDetails;
