type VehicleDetailsProps = {
  name: string;
};

function generateDescription(name: string): string {
  return name + " is built to turn heads with its bold design and performance. Perfect for the streets of Metropole, this vehicle delivers both style and speed.";
}

function VehicleDetails({ name }: VehicleDetailsProps) {
  return (
    <div className="max-w-md">
      <h2 className="text-3xl font-bold text-white mb-4">{name}</h2>
      <p className="text-gray-400 text-sm leading-relaxed opacity-80">
        {generateDescription(name)}
      </p>
    </div>
  );
}

export default VehicleDetails;
