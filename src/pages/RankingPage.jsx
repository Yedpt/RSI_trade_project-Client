import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRankings } from '../services/rankingService';
import CieloAzul from '../assets/rankingImages/CieloAzul.png';
import ElTigre89 from '../assets/rankingImages/ElTigre89.png';
import FuegoBravo from '../assets/rankingImages/FuegoBravo.png';
import LunaPinta from '../assets/rankingImages/LunaPinta.png';
import SolRapido from '../assets/rankingImages/SolRapido.png';
import ElCerdito from '../assets/rankingImages/ElCerdito.svg';
import avatar from '../assets/rankingImages/avatar.svg';

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

const RankingPage = () => {
    const navigate = useNavigate();
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                setLoading(true);
                const data = await getRankings();
                // Transformar los datos si es necesario
                const formattedRankings = data.map((item, index) => ({
                    rank: index + 1,
                    user: item.user_id, // Necesitarás obtener el nombre del usuario
                    amount: item.mount,
                    state: item.state,
                    startDate: new Date(item.start_date),
                    endDate: new Date(item.end_date),
                    // Añadir avatar según el usuario
                    avatar: getAvatarByUserId(item.user_id) // Función que deberás implementar
                }));
                setRankings(formattedRankings);
            } catch (err) {
                setError('Error al cargar el ranking');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRankings();
    }, []);

    if (loading) {
        return <div className="text-white text-center">Cargando...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="bg-[#161622] min-h-screen w-full max-w-md mx-auto">
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

                {/* Barra de búsqueda con avatar */}
                <div className="flex items-center gap-3 mb-6">
                    <img 
                        src={avatar} 
                        alt="User Avatar" 
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="relative flex-1">
                        <input
                            type="search"
                            placeholder="Buscar"
                            className="w-full bg-[#232331] text-white rounded-lg py-2 px-4 pl-10"
                        />
                        <svg 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
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