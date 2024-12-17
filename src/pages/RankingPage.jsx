import React from 'react';
import { useNavigate } from 'react-router-dom';
import CieloAzul from '../assets/rankingImages/CieloAzul.png';
import ElTigre89 from '../assets/rankingImages/ElTigre89.png';
import FuegoBravo from '../assets/rankingImages/FuegoBravo.png';
import LunaPinta from '../assets/rankingImages/LunaPinta.png';
import SolRapido from '../assets/rankingImages/SolRapido.png';
import ElCerdito from '../assets/rankingImages/ElCerdito.svg';
import { FaArrowLeft } from "react-icons/fa";

// Componente para el banner VIP
const VIPBanner = () => (
    <div className="bg-[#8FE282] rounded-lg p-4 mb-6 flex justify-between items-center">
        <div>
            <h3 className="text-[#161622] font-bold text-lg mb-1">Gane hasta 5% APR</h3>
            <p className="text-[#161622] text-sm">Participe de los retos y sume puntos en la area VIP</p>
        </div>
        <div className="flex items-center">
            <img 
                src={ElCerdito}
                alt="VIP savings" 
                className="w-12 h-12"
            />
        </div>
    </div>
);

// Componente para cada fila del ranking
const RankingRow = ({ rank, user, amount, percentage, avatar }) => (
    <div className="flex items-center justify-between mb-4 p-2 hover:bg-[#232331] rounded-lg transition-all">
        <div className="flex items-center gap-4">
            <span className="text-white text-lg min-w-[20px]">{rank}</span>
            <img 
                src={avatar} 
                alt={user} 
                className="w-10 h-10 rounded-full"
            />
            <div>
                <h4 className="text-white font-medium">{user}</h4>
                <button 
                    className="text-[#8FE282] text-sm hover:text-[#6dcb5c]"
                    onClick={() => {/* Lógica para ver más */}}
                >
                    ver más
                </button>
            </div>
        </div>
        <div className="text-right">
            <p className="text-white font-medium">${amount.toFixed(2)}</p>
            <p className={`text-sm ${percentage >= 0 ? 'text-[#8FE282]' : 'text-red-500'}`}>
                {percentage >= 0 ? '+' : ''}{percentage.toFixed(2)}%
            </p>
        </div>
    </div>
);

const RankingPage = () => {
    const navigate = useNavigate();
    
    const rankings = [
        {
            rank: 1,
            user: 'ElTigre89',
            amount: 200055.02,
            percentage: 3.99,
            avatar: ElTigre89
        },
        {
            rank: 2,
            user: 'SolRapido',
            amount: 180055.45,
            percentage: 33.79,
            avatar: SolRapido
        },
        {
            rank: 3,
            user: 'LunaPinta',
            amount: 90055.62,
            percentage: -6.56,
            avatar: LunaPinta
        },
        {
            rank: 4,
            user: 'CieloAzul',
            amount: 88055.12,
            percentage: 3.99,
            avatar: CieloAzul
        },
        {
            rank: 5,
            user: 'FuegoBravo',
            amount: 9095.27,
            percentage: 3.99,
            avatar: FuegoBravo
        }
    ];

    return (
        <div className="bg-[#161622] min-h-screen w-full max-w-md mx-auto mt-[4.5rem]">
            {/* Header fijo en la parte superior */}
            <div className="p-4">
                <div className="flex items-center gap-4 mb-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="text-white hover:text-[#8FE282]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-white text-xl font-bold">Ranking de los ganadores</h1>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <button
                            onClick={() => navigate(-1)}
                            className="absolute top-4 left-4 flex items-center bg-green-500 hover:bg-green-400 text-white rounded-full p-2 shadow-lg transition"
                            aria-label="Regresar"
                          >
                            <FaArrowLeft className="text-lg" />
                          </button>
                </div>
            </div>

            {/* Contenedor principal centrado */}
            <div className="px-4">
                {/* VIP Banner */}
                <VIPBanner />

                {/* Lista de rankings */}
                <div className="pb-24">
                    {rankings.map((item) => (
                        <RankingRow 
                            key={item.rank}
                            {...item}
                        />
                    ))}
                </div>
            </div>

            {/* Barra de navegación fija en la parte inferior */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#161622] border-t border-[#232331]">
                <div className="flex justify-between max-w-md mx-auto px-4 py-3">
                    {['Portfolio', 'Invertir', 'Home', 'News', 'Wallet'].map((item) => (
                        <button
                            key={item}
                            className={`flex flex-col items-center ${
                                item === 'News' ? 'text-[#8FE282]' : 'text-gray-400'
                            }`}
                        >
                            <span className="text-xs">{item}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default RankingPage;