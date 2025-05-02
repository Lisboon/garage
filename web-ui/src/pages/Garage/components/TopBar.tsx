type TopBarProps = {
  avatar: string 
  logo?: string
  name: string
}

export default function TopBar(props: TopBarProps) {
  return(        
  <div className="flex justify-between items-center relative z-10 mb-8">
    <div className="flex items-center gap-3">
      <img src={props.avatar} alt="avatar" className="w-10 h-10 rounded-full border-2 border-lime-400" />
      <div className="flex flex-col">
        <span className="text-sm text-white/70">Olá</span>
        <span className="font-bold text-white">{props.name}</span>
      </div>
    </div>
    <img src={props.logo || "https://cdn.discordapp.com/attachments/1326903184664297532/1367388225710194758/images-removebg-preview.png?ex=68146705&is=68131585&hm=e849757979847e4b654aa0922bb934b9f1a466ce7b75727566aeb1e4c502530f&"} alt="Logo Central" className="absolute left-1/2 -translate-x-1/2 w-12 opacity-80" />
    <button className="text-white text-sm hover:text-red-500 transition">Fechar garagem</button>
  </div>
  )

}