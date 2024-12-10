import { Play } from "lucide-react";

const VideoCard = () => {
  return (
    <div className="p-4 bg-[#161622] rounded-xl shadow flex justify-between items-start w-full hover:bg-opacity-90 transition-all cursor-pointer">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
        <div className="flex flex-col gap-1 flex-grow">
          <h2 className="text-white text-base font-bold font-manrope leading-tight">
            Entenda lo que són los fundos de inversión
          </h2>
          <div className="flex items-center gap-2">
            <Play size={16} className="text-gray-400" />
            <span className="text-gray-400 text-sm font-normal leading-normal">
              Video · 2 minutos
            </span>
          </div>
        </div>

        <div className="relative w-full sm:w-auto">
          <img
            src="/api/placeholder/104/65"
            alt="Investment funds video thumbnail"
            className="w-full sm:w-[104px] h-[65px] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
