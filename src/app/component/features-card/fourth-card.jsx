export default function FourthCard() {
  return (
    <div className="border-[0.5px] border-[#E2E6EC] rounded-3xl w-full py-22 lg:flex lg:justify-center lg:items-center">
      <div className="relative w-64 mx-auto">
        <div className="absolute bottom-12 flex items-center justify-center z-0">
          <button className="bg-white rotate-4 p-2 px-4 rounded-xl border-[0.1px] border-[#E2E6EC] font-inter text-sm">
            Finally
          </button>
        </div>

        <div className="absolute top-12 right-0 flex items-center justify-center z-0">
          <button className="-rotate-7 cursor-none bg-[#585BFF] rounded-xl p-2 px-4 text-white font-inter purple-glow text-sm">
            Enjoy!!
          </button>
        </div>

        <button className="relative overflow-hidden text-white font-inter z-20 bg-[#040404] h-14 rounded-2xl border-2 border-[#404040] w-full">
          Day Off Mode
          <div className="absolute inset-0 -top-5 rounded-full border-6 border-[#585BFF] blur-2xl bg-white w-full h-12"></div>
        </button>
      </div>
    </div>
  );
}
