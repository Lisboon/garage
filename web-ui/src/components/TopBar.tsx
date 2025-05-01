<div className="flex justify-between items-center w-full px-8 py-4 relative">
  {/* Avatar e nome à esquerda */}
  <div className="flex items-center gap-3">
    <img
      src="https://i.imgur.com/WvEu0bT.png"
      alt="Avatar"
      className="w-10 h-10 rounded-full"
    />
    <div className="text-sm">
      <p className="text-gray-400">Olá</p>
      <p className="font-bold">Lisboa</p>
    </div>
  </div>

  <img
    src="/logo-metropole.png"
    alt="Logo Metropole"
    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 opacity-90"
  />
  <button
    className="text-white hover:text-red-500 transition text-sm"
    onClick={() => console.log("Fechar garagem")}
  >
    ❌ Fechar garagem
  </button>
</div>
