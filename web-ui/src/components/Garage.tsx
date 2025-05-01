import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import VehicleCard from "./VehicleCard";
import CarSpecs from "./CarSpecs";
import VehicleDetails from "./VehicleDetails";
import GarageButton from "./GarageButton";
import VehicleCarousel from "./VehicleCarousel";

const vehicles = [
  {
    name: "Koenisegg Agera",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367379458348023880/ae76f620eb60e2c4931b4c0548956210-removebg-preview.png?ex=68145edb&is=68130d5b&hm=5c852e1c83d0cf181ae93ea09766cd1c8389ec081728613f2685d72faa9fb25f&",
    topSpeed: 220,
    acceleration: 5.6,
    weight: 1500,
    plate: "AAA1111",
  },
  {
    name: "Nissan GTR",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367413971166171146/2019-nissan-gt-r-removebg-preview.png?ex=68147f00&is=68132d80&hm=febceb0106032f3501c5487f2e871580bdd667225566816c99968cbd02a4a240&",
    topSpeed: 240,
    acceleration: 4.8,
    weight: 1400,
    plate: "BBB2222",
  },
  {
    name: "Urus",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367413895551258634/LAMBORGHINI_URUS_4.png?ex=68147eee&is=68132d6e&hm=8f2049d8567dd3577fcb87fd869c2062a5b860dca6f630f80544402cc7365c8b&",
    topSpeed: 200,
    acceleration: 6.0,
    weight: 1600,
    plate: "CCC3333",
  },
  {
    name: "BMW X7 Blindada",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367428429028397076/comprar-m60i_03acd0be4a.png?ex=68148c77&is=68133af7&hm=ca6a414953ae7f8d8e2efa55aa18804d62ec14137b4f06d01e8b2ba27aa5fb38&",
    topSpeed: 200,
    acceleration: 6.0,
    weight: 1600,
    plate: "CCC3333",
  },
  {
    name: "Corvette",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367428952339251271/images-removebg-preview.png?ex=68148cf3&is=68133b73&hm=0623f9de8e974839026355825038ce4a208f36840573e60dbcaad8c6f3c90da6&",
    topSpeed: 200,
    acceleration: 6.0,
    weight: 1600,
    plate: "CCC3333",
  },
  {
    name: "BMW R1250",
    image: "https://media.discordapp.net/attachments/1326903184664297532/1367429223056412723/bmw-r-1250-gs-adventure-triple-black-removebg-preview.png?ex=68148d34&is=68133bb4&hm=ae60f2932f2dc50c56119737d1a4e8bf342853c6ed6620e453c4013c3601f2bb&=&format=webp&quality=lossless",
    topSpeed: 200,
    acceleration: 6.0,
    weight: 1600,
    plate: "CCC3333",
  },
  {
    name: "Mustang Shelby 2015",
    image: "https://cdn.discordapp.com/attachments/1326903184664297532/1367429814809788426/2015-ford-shelby-gt350-50th-anniversary_7699-removebg-preview.png?ex=68148dc1&is=68133c41&hm=767f4943bc8ff44cec850835c15ca45fbf6f2dd91dddc5a72636a846836f24d5&",
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
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center font-sans">
      <div className="w-[90vw] max-w-[1280px] h-[90vh] bg-black/80 rounded-2xl shadow-2xl p-10 flex flex-col justify-between overflow-hidden">

        {/* Topbar com logo e botão fechar */}
        <div className="flex justify-between items-center relative z-10 mb-8">
          <div className="flex items-center gap-3">
            <img src="https://cdn.discordapp.com/attachments/1326903184664297532/1367403758904021013/Z.png?ex=6814757d&is=681323fd&hm=402093ef6d772440847313131fd18d151b64100c3a82a9309571a0e2ede49289&" alt="avatar" className="w-10 h-10 rounded-full border-2 border-lime-400" />
            <div className="flex flex-col">
              <span className="text-sm text-white/70">Olá</span>
              <span className="font-bold text-white">Lisboa</span>
            </div>
          </div>
          <img src="https://cdn.discordapp.com/attachments/1326903184664297532/1367388225710194758/images-removebg-preview.png?ex=68146705&is=68131585&hm=e849757979847e4b654aa0922bb934b9f1a466ce7b75727566aeb1e4c502530f&" alt="Logo Central" className="absolute left-1/2 -translate-x-1/2 w-12 opacity-80" />
          <button className="text-white text-sm hover:text-red-500 transition">Fechar garagem</button>
        </div>

        {/* Corpo principal com 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center flex-1">
          <div>
            <VehicleDetails name={selected.name} />
          </div>

          <div className="flex justify-center">
            <motion.img
              key={selected.image}
              src={selected.image}
              alt={selected.name}
              className="w-[500px] max-w-full rounded-xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] shadow-[0_0_60px_#C6FF00]/10 transition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

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
            vehicles={vehicles.map((vehicle, index) => ({
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
