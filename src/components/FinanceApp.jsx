import React from "react";
import {
  UploadOutlined,
  DownloadOutlined,
  AttachMoneyOutlined,
  SavingsOutlined,
} from "@mui/icons-material";

const FinanceApp = () => {
  return (
    <div className="w-full max-w-[390px] p-4 bg-[#acacac]/25 rounded-[20px] flex flex-col justify-center items-center gap-4 mx-auto mt-10">
      <div className="flex justify-between items-start gap-4 w-full">
        {/* Icono: Enviar */}
        <div className="flex flex-col justify-start items-center gap-[7px]">
          <div className="w-[54px] h-[54px] bg-[#1e1e2d] rounded-full border flex justify-center items-center">
            <UploadOutlined className="text-white" />
          </div>
          <div className="text-[#a2a2a7] text-sm font-normal font-['Poppins'] text-center">
            Enviar
          </div>
        </div>
        {/* Icono: Recibir */}
        <div className="flex flex-col justify-start items-center gap-[7px]">
          <div className="w-[54px] h-[54px] bg-[#1e1e2d] rounded-full border flex justify-center items-center">
            <DownloadOutlined className="text-white" />
          </div>
          <div className="text-[#a2a2a7] text-sm font-normal font-['Poppins'] text-center">
            Recibir
          </div>
        </div>
        {/* Icono: Préstamo */}
        <div className="flex flex-col justify-start items-center gap-[7px]">
          <div className="w-[54px] h-[54px] bg-[#1e1e2d] rounded-full border flex justify-center items-center">
            <AttachMoneyOutlined className="text-white" />
          </div>
          <div className="text-[#a2a2a7] text-sm font-normal font-['Poppins'] text-center">
            Préstamo
          </div>
        </div>
        {/* Icono: Hucha */}
        <div className="flex flex-col justify-start items-center gap-[7px]">
          <div className="w-[54px] h-[54px] bg-[#1e1e2d] rounded-full border flex justify-center items-center">
            <SavingsOutlined className="text-white" />
          </div>
          <div className="text-[#a2a2a7] text-sm font-normal font-['Poppins'] text-center">
            Hucha
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceApp;
