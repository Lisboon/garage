
function TopBar() {
  return (
    <div className="w-full flex justify-between items-center px-10 py-4 bg-[#0c0c0c] text-white">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/48"
          alt="avatar"
          className="w-12 h-12 rounded-full border-2 border-[#C6FF00]"
        />
        <div className="leading-tight">
          <p className="text-sm text-gray-400">Hello</p>
          <p className="font-semibold text-base">Lisboa</p>
        </div>
      </div>
      <img src="/metropole-logo.png" alt="metropole" className="h-10 opacity-80" />
    </div>
  );
}
export default TopBar;
