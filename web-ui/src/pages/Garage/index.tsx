import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./components/TopBar";
import CarSpecs from "./components/CarSpecs";
import VehicleDetails from "./components/VehicleDetails";
import GarageButton from "./components/GarageButton";
import VehicleCarousel from "./components/VehicleCarousel";
import VEHICLES from "./constants/vehicles";
import CarImage from "./components/CarImage";


function Garage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = VEHICLES[selectedIndex];

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center font-sans">
      <div className="w-[90vw] max-w-[1280px] h-[90vh] bg-black/80 rounded-2xl shadow-2xl p-10 flex flex-col justify-between overflow-hidden border-4 border-lime-400">
      <TopBar name="Jose" avatar="https://cdn.discordapp.com/attachments/1326903184664297532/1367403758904021013/Z.png?ex=6814757d&is=681323fd&hm=402093ef6d772440847313131fd18d151b64100c3a82a9309571a0e2ede49289&"/>
        {/* Corpo principal com 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center flex-1">
          <div>
            <VehicleDetails name={selected.name} />
          </div>

      <CarImage name={selected.name} image={selected.image}/>

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
                label="Retirar"
                color="green"
                onClick={() => alert("Spawn")}
              />
              <GarageButton
                label="Guardar"
                color="blue"
                onClick={() => alert("Repair")}
              />
            </motion.div>
          </div>
        </div>

        {/* Carrossel */}
        <div className="mt-8">
          <VehicleCarousel
            vehicles={VEHICLES.map((vehicle, index) => ({
              ...vehicle,
              selected: index === selectedIndex,
              onClick: () => setSelectedIndex(index),
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default Garage;
