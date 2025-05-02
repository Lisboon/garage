import { motion } from "framer-motion";

type CarImageProps = {
    name?: string
    image?: string
}

export default function CarImage(props: CarImageProps) {
  return  (     
  <div className="flex justify-center">
  <motion.img
    src={props.image || "https://cdn.discordapp.com/attachments/1326903184664297532/1367413895551258634/LAMBORGHINI_URUS_4.png?ex=68147eee&is=68132d6e&hm=8f2049d8567dd3577fcb87fd869c2062a5b860dca6f630f80544402cc7365c8b&"}
    alt={props.name}
    className="w-[500px] max-w-full rounded-xl drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] shadow-[0_0_60px_#C6FF00]/10 transition"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  />
</div> 
)
}