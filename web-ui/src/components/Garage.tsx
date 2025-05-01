
import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import VehicleCard from "./VehicleCard";
import CarSpecs from "./CarSpecs";
import VehicleDetails from "./VehicleDetails";
import GarageButton from "./GarageButton";
import VehicleCarousel from "./VehicleCarousel";
import ActionMenu from "./ActionMenu";

const vehicles = [
  {
    name: "Vermelho",
    image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    topSpeed: 220,
    acceleration: 5.6,
    weight: 1500,
    plate: "AAA1111",
  },
  {
    name: "Azul",
    image: "https://cdn.pixabay.com/photo/2013/07/12/15/37/car-150017_1280.png",
    topSpeed: 240,
    acceleration: 4.8,
    weight: 1400,
    plate: "BBB2222",
  },
  {
    name: "Preto",
    image: "https://cdn.pixabay.com/photo/2016/07/05/18/14/car-1498901_1280.jpg",
    topSpeed: 200,
    acceleration: 6.0,
    weight: 1600,
    plate: "CCC3333",
  }
];

function Garage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = vehicles[selectedIndex];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <div className="flex justify-between items-center px-10 py-4 relative z-10">
  <div className="flex items-center gap-3">
    <img src="/metropole.png" alt="Logo" className="w-10 h-10" />
    <div className="flex flex-col">
      <span className="text-sm text-white/70">Hello</span>
      <span className="font-bold text-white">Lisboa</span>
    </div>
  </div>
  <img src="/metropole.png" alt="Logo Central" className="absolute left-1/2 -translate-x-1/2 w-16 opacity-60" />
  <button className="text-white text-sm hover:text-red-500 transition">Fechar garagem</button>
</div>

      {/* Área central com 3 colunas */}
      <div className="flex-1 w-full px-10 mt-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Coluna 1 – Esquerda: detalhes do carro */}
        <div>
          <VehicleDetails name={selected.name} />
        </div>

        {/* Coluna 2 – Centro: imagem do carro */}
        <div className="flex justify-center">
          <motion.img
            key={selected.image}
            src={selected.image}
            alt={selected.name}
            className="w-[500px] rounded-xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] shadow-[0_0_60px_#C6FF00]/10 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Coluna 3 – Direita: specs e botões */}
        <div className="flex flex-col items-start gap-6">
          <CarSpecs
            topSpeed={selected.topSpeed}
            acceleration={selected.acceleration}
            weight={selected.weight}
            plate={selected.plate}
          />
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <GarageButton
              label="Spawn"
              color="green"
              onClick={() => alert("Spawn")}
            />
            <GarageButton
              label="Repair"
              color="blue"
              onClick={() => alert("Repair")}
            />
          </motion.div>
          <ActionMenu />
        </div>
      </div>

      {/* Carrossel com veículos */}
      <div className="mt-10 px-4 w-full max-w-screen-xl mx-auto">
        <VehicleCarousel
          vehicles={vehicles.map((vehicle, index) => ({
            ...vehicle,
            selected: index === selectedIndex,
            onClick: () => setSelectedIndex(index),
          }))}
        />
      </div>
    </div>
  );
}

export default Garage;
