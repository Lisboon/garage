
import { useRef } from "react";
import VehicleCard from "./VehicleCard";

type Vehicle = {
  name: string;
  image: string;
  onClick: () => void;
  selected: boolean;
};

type Props = {
  vehicles: Vehicle[];
};

function VehicleCarousel({ vehicles }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-10">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ⟨
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x pb-4 px-12 bg-black/20 rounded-2xl backdrop-blur-sm py-4"
      >
        {vehicles.map((v, index) => (
          <VehicleCard
            key={index}
            name={v.name}
            image={v.image}
            selected={v.selected}
            onClick={v.onClick}
          />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ⟩
      </button>
    </div>
  );
}

export default VehicleCarousel;
