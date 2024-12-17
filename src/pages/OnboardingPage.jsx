import React, { useState, useEffect, useRef } from 'react';
import onboardingUno from '../assets/onboardingImages/onboardingUno.svg';
import onboardingDos from '../assets/onboardingImages/onboardingDos.svg';
import videoTrade from '../assets/onboardingImages/videoTrade.mp4';
import { useNavigate } from 'react-router-dom';
const sanitizeInput = (input) => {
    return input
        .replace(/[<>{}[\]()]/g, '')
        .replace(/[&/\\#,+()$~%'":*?<>{}]/g, '')
        .trim();
};

const validateNickname = (nickname) => {
    const minLength = 3;
    const maxLength = 20;
    const validPattern = /^[a-zA-Z0-9_-]+$/;

    if (nickname.length < minLength) {
        return 'El nickname debe tener al menos 3 caracteres';
    }
    if (nickname.length > maxLength) {
        return 'El nickname no puede exceder 20 caracteres';
    }
    if (!validPattern.test(nickname)) {
        return 'El nickname solo puede contener letras, números, guiones y guiones bajos';
    }
    return '';
};

const Card = ({ 
    title, 
    description, 
    buttonText, 
    onNext, 
    onSkip, 
    image, 
    video, 
    isVideoCard,
    videoRef, 
    handleVideoPlay, 
    handleVideoPause, 
    handleVideoEnded 
}) => {
    return (
        <div className="w-full min-h-screen bg-[#161622] rounded-[20px] flex flex-col items-center justify-center px-8">
            {isVideoCard ? (
                <video
                    ref={videoRef}
                    className="w-full h-[400px] object-cover rounded-t-[20px]"
                    controls
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnded}
                >
                    <source src={video} type="video/mp4" />
                </video>
            ) : (
                image && <img src={image} alt={title} className="w-full h-[400px] object-cover rounded-t-[20px]" />
            )}
            <div className="flex flex-col items-center justify-center flex-1">
                <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
                <p className="text-[#E0E0D1] text-lg mb-8">{description}</p>
                <div className="flex flex-col w-full gap-4">
                    <button
                        className="bg-[#8FE282] text-white px-6 py-3 rounded-lg hover:bg-[#6dcb5c]"
                        onClick={onNext}
                    >
                        {buttonText}
                    </button>
                    <button
                        className="text-white px-6 py-3 rounded-lg hover:text-[#6dcb5c]"
                        onClick={onSkip}
                    >
                        Saltar
                    </button>
                </div>
            </div>
        </div>
    );
};

const AvatarCard = ({ userInfo, setUserInfo, onNext, onSkip }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleStart = () => {
            navigate('/auth/trade/home');
    };
    const avatarOptions = [
        { 
            id: 1, 
            url: 'https://api.dicebear.com/6.x/adventurer/svg?seed=Felix', 
            label: 'Aventurero' 
        },
        { 
            id: 2, 
            url: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Pepper', 
            label: 'Casual' 
        },
        { 
            id: 3, 
            url: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Aneka', 
            label: 'Emoji' 
        },
        { 
            id: 4, 
            url: 'https://api.dicebear.com/6.x/bottts/svg?seed=Robot', 
            label: 'Robot' 
        },
        { 
            id: 5, 
            url: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=Pixie', 
            label: 'Pixel' 
        },
        { 
            id: 6, 
            url: 'https://api.dicebear.com/6.x/lorelei/svg?seed=Star', 
            label: 'Anime' 
        }
    ];

    const handleNicknameChange = (e) => {
        const rawInput = e.target.value;
        const sanitizedInput = sanitizeInput(rawInput);
        const validationError = validateNickname(sanitizedInput);
        
        setErrorMessage(validationError);
        setUserInfo(prev => ({...prev, nickname: sanitizedInput}));
    };

    return (
        <div className="w-full min-h-screen bg-[#161622] rounded-[20px] flex flex-col items-center justify-between px-8 py-12">
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="bg-[#7DA477] w-full max-w-[300px] p-8 rounded-[20px] flex flex-col items-center">
                    <div className="text-white rounded-full bg-[#161622] p-4 mb-4">
                        {userInfo.avatarUrl ? (
                            <img 
                                src={userInfo.avatarUrl} 
                                alt="Selected Avatar" 
                                className="w-16 h-16 rounded-full"
                            />
                        ) : (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-16 w-16" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                />
                            </svg>
                        )}
                    </div>

                    <div className="w-full mb-4">
                        <input
                            type="text"
                            placeholder="Crea su nickname"
                            className={`w-full px-4 py-2 rounded-lg bg-[#161622] text-white text-center 
                                ${errorMessage ? 'border-2 border-red-500' : ''}`}
                            value={userInfo.nickname}
                            onChange={handleNicknameChange}
                            maxLength={20}
                            pattern="[a-zA-Z0-9_-]*"
                            title="Solo letras, números, guiones y guiones bajos"
                        />
                        {errorMessage && (
                            <p className="text-red-400 text-xs mt-1 text-center">
                                {errorMessage}
                            </p>
                        )}
                        <p className="text-white text-xs mt-1 text-center">
                            {`${userInfo.nickname.length}/20 caracteres`}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                        {avatarOptions.map(avatar => (
                            <button
                                key={avatar.id}
                                onClick={() => setUserInfo(prev => ({...prev, avatarUrl: avatar.url}))}
                                className={`p-2 rounded-lg transition-all ${
                                    userInfo.avatarUrl === avatar.url 
                                    ? 'bg-[#161622] ring-2 ring-[#8FE282]' 
                                    : 'bg-[#161622] hover:bg-opacity-80'
                                }`}
                            >
                                <img 
                                    src={avatar.url} 
                                    alt={avatar.label}
                                    className="w-full h-auto rounded-lg"
                                />
                            </button>
                        ))}
                    </div>

                    <p className="text-white text-lg text-center">¡Participe de los retos!</p>
                    <p className="text-white text-sm text-center mt-2">Crea su perfil y participe de los retos!</p>
                </div>
            </div>

            <div className="w-full">
                <button
                    className="bg-[#8FE282] text-white w-full px-6 py-3 rounded-lg hover:bg-[#6dcb5c] mb-4 
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleStart}
                    disabled={!userInfo.nickname || !userInfo.avatarUrl || errorMessage}
                >
                    Empezar
                </button>
                <button
                    className="text-white text-center w-full hover:text-[#6dcb5c]"
                    onClick={onSkip}
                >
                    Saltar
                </button>
            </div>
        </div>
    );
};


const OnboardingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInfo, setUserInfo] = useState({ nickname: '', avatarUrl: '' });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);


    const handleNext = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsVideoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handleSkip = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsVideoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    const handleVideoPause = () => {
        setIsVideoPlaying(false);
    };

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
    };

    const cards = [
        {
            title: 'Aprenda a invertir con simulaciones',
            description: 'Simulaciones prácticas permiten experimentar inversiones sin riesgo financiero real.',
            buttonText: 'Siguiente',
            image: onboardingUno,
        },
        {
            title: 'Practique con dinero virtual',
            description: 'Entrena habilidades de inversión sin perder dinero real.',
            buttonText: 'Siguiente',
            image: onboardingDos,
        },
        {
            title: '¡Invierta y gane!',
            description: 'Aprenda, domine estrategias y juegue, invierta con confianza.',
            buttonText: 'Siguiente',
            video: videoTrade,
            isVideoCard: true,
        },
        {
            title: 'Crea su nickname o avatar',
            description: '¡Participe de los retos!',
            subDescription: 'Crea su perfil y participe de los retos!',
            buttonText: 'Empezar',
            isAvatarCard: true,
        }
    ];

    useEffect(() => {
        let timer;
        if ((!cards[currentIndex]?.isVideoCard || !isVideoPlaying) && !cards[currentIndex]?.isAvatarCard) {
            timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [currentIndex, cards.length, isVideoPlaying]);

    return (
        <div className="flex justify-center items-center h-screen">
            {cards[currentIndex].isAvatarCard ? (
                <AvatarCard
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    onNext={handleNext}
                    onSkip={handleSkip}
                />
            ) : (
                <Card
                    title={cards[currentIndex].title}
                    description={cards[currentIndex].description}
                    buttonText={cards[currentIndex].buttonText}
                    onNext={handleNext}
                    onSkip={handleSkip}
                    image={cards[currentIndex].image}
                    video={cards[currentIndex].video}
                    isVideoCard={cards[currentIndex].isVideoCard}
                    videoRef={videoRef}
                    handleVideoPlay={handleVideoPlay}
                    handleVideoPause={handleVideoPause}
                    handleVideoEnded={handleVideoEnded}
                />
            )}
        </div>
    );
};

export default OnboardingPage;