import TopBar from "./TopBar";

function Garage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <TopBar />

      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"
          alt="Carro"
          className="w-1/2 rounded-xl shadow-lg"
        />
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 bg-green-500 rounded-full font-bold hover:bg-green-600 transition">Spawn</button>
          <button className="px-6 py-2 bg-blue-500 rounded-full font-bold hover:bg-blue-600 transition">Repair</button>
        </div>
      </div>
    </div>
  );
}

export default Garage;
