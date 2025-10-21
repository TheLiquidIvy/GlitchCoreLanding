import React, { useState, useEffect } from 'react';

// Confetti component (re-purposed for "digital burst" effect)
const DigitalBurstEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
        {[...Array(30)].map((_, i) => (
            <div
                key={i}
                className="confetti" // Reusing confetti class, but styling differently
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`, // Neon colors
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    borderRadius: Math.random() > 0.5 ? '0%' : '50%', // Mix of squares and circles
                    animationDuration: `${Math.random() * 2 + 1}s`,
                    animationIterationCount: 'infinite',
                    opacity: Math.random() * 0.7 + 0.3,
                    boxShadow: `0 0 5px hsl(${Math.random() * 360}, 80%, 60%)`, // Glowing effect
                }}
            ></div>
        ))}
    </div>
);

// Contact Form component (adapted for GlitchCore)
const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Data-link established, ${formData.name}! We'll transmit a response shortly.`);
        // In a real app, you'd send this data to a backend
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mt-8 animate-fade-in border border-blue-700">
            <h3 className="text-3xl font-bold text-center text-blue-400 mb-6 animate-text-glitch">Need a direct data-link?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Alias / Handle</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-blue-600 rounded-md shadow-sm bg-gray-700 text-gray-50 focus:ring-pink-500 focus:border-pink-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Encrypted Comms Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-blue-600 rounded-md shadow-sm bg-gray-700 text-gray-50 focus:ring-pink-500 focus:border-pink-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Transmission</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full p-3 border border-blue-600 rounded-md shadow-sm bg-gray-700 text-gray-50 focus:ring-pink-500 focus:border-pink-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                >
                    Initiate Data-Link
                </button>
            </form>
        </div>
    );
};

// Main App component
const App = () => {
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [accessCode, setAccessCode] = useState('');

    const quizQuestion = "Your operating system just crashed. What's your first thought?";
    const quizOptions = [
        { id: 'a', text: 'Reboot and optimize.' },
        { id: 'b', text: 'Blame the megacorp.' },
        { id: 'c', text: 'Hack a workaround, then upgrade to a neural interface.' }, // Correct answer
        { id: 'd', text: 'Wait for the system to fix itself.' },
    ];
    const correctAnswerId = 'c';

    // Generate a simple access code on component mount or quiz submission
    useEffect(() => {
        if (isCorrect && quizSubmitted) {
            const code = `GLITCH${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            setAccessCode(code);
        }
    }, [isCorrect, quizSubmitted]);

    const handleAnswerSelect = (id) => {
        if (!quizSubmitted) {
            setSelectedAnswer(id);
        }
    };

    const handleSubmitQuiz = () => {
        if (selectedAnswer) {
            const correct = selectedAnswer === correctAnswerId;
            setIsCorrect(correct);
            setQuizSubmitted(true);
        } else {
            alert("Select a response, citizen.");
        }
    };

    const handleCopyAccessCode = () => {
        navigator.clipboard.writeText(accessCode);
        alert('Access code copied to clipboard!');
    };

    const handleShareOnSocial = (platform) => {
        const text = encodeURIComponent("System Access Granted! I passed the GlitchCore test. My style is on point. #GlitchCore #CyberpunkFashion");
        const url = encodeURIComponent(window.location.href); // Share current page URL

        let shareUrl = '';
        if (platform === 'twitter') {
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        } else if (platform === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
        }
        window.open(shareUrl, '_blank');
    };

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-950 to-black flex flex-col items-center justify-center p-4 overflow-hidden">
            {isCorrect && <DigitalBurstEffect />}

            {/* Animated Digital Particles/Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-blue-700 rounded-full digital-particle shadow-lg opacity-60"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-pink-600 rounded-lg transform rotate-45 digital-particle shadow-lg opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-purple-700 rounded-full digital-particle shadow-lg opacity-60" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-lime-500 rounded-md digital-particle shadow-lg opacity-60" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 left-5 w-10 h-10 bg-cyan-500 rounded-full digital-particle shadow-lg opacity-60" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-1/3 right-5 w-18 h-18 bg-orange-600 rounded-full digital-particle shadow-lg opacity-60" style={{ animationDelay: '1.5s' }}></div>


            <div className="relative z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center max-w-3xl w-full border border-blue-800">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-lg animate-text-glitch">
                    GLITCHCORE
                </h1>
                <p className="text-xl text-gray-300 mb-10 font-mono">
                    // Your source for cutting-edge cyberpunk & techwear apparel //
                </p>

                {/* Interactive Quiz Section */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8 border border-purple-700">
                    <h2 className="text-3xl font-bold text-blue-400 mb-6 animate-text-glitch">{quizQuestion}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {quizOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleAnswerSelect(option.id)}
                                disabled={quizSubmitted}
                                className={`
                                    p-4 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out font-mono
                                    ${selectedAnswer === option.id
                                        ? 'bg-purple-600 text-white shadow-lg scale-105 border border-pink-500'
                                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:scale-105 border border-gray-600'
                                    }
                                    ${quizSubmitted ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
                                `}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                    {!quizSubmitted && (
                        <button
                            onClick={handleSubmitQuiz}
                            className="w-full py-3 px-6 bg-pink-600 text-white font-bold rounded-lg text-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md border border-pink-500"
                        >
                            Execute Command
                        </button>
                    )}

                    {quizSubmitted && (
                        <div className="mt-6 text-xl font-semibold font-mono">
                            {isCorrect ? (
                                <p className="text-lime-400 animate-text-glitch">
                                    <span className="text-2xl">✅</span> System Access Granted: You're one of us. Welcome to the Core.
                                </p>
                            ) : (
                                <p className="text-red-400 animate-text-glitch">
                                    <span className="text-2xl">❌</span> Error 404: Style Not Found. Initiate GlitchCore Protocol.
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Strategic Follow-up Interactions */}
                {quizSubmitted && (
                    <div className="mt-8 p-8 bg-gray-800 rounded-lg shadow-xl animate-fade-in border border-blue-700">
                        {isCorrect ? (
                            <>
                                <h3 className="text-3xl font-bold text-center text-lime-400 mb-6 animate-text-glitch">Inner Core Access Unlocked!</h3>
                                <p className="text-lg text-gray-200 mb-4 font-mono">
                                    As a verified member, enjoy <span className="font-bold text-pink-400">20% off your first Glitch-Gear purchase!</span> Use code:
                                </p>
                                <div className="flex items-center justify-center mb-6">
                                    <span className="bg-gray-700 text-white text-2xl font-mono p-3 rounded-l-md border border-r-0 border-pink-500">
                                        {accessCode}
                                    </span>
                                    <button
                                        onClick={handleCopyAccessCode}
                                        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-r-md transition duration-300 border border-pink-500"
                                    >
                                        Copy Code
                                    </button>
                                </div>
                                <a
                                    href="#shop-now" // Placeholder for your shop link
                                    className="block w-full py-3 px-6 bg-purple-600 text-white font-bold rounded-lg text-xl hover:bg-purple-700 transition duration-300 ease-in-out shadow-md mb-6 border border-purple-500"
                                >
                                    Access Glitch-Gear Catalog
                                </a>

                                <h4 className="text-2xl font-bold text-center text-cyan-400 mb-4 animate-text-glitch">Transmit Your Status!</h4>
                                <p className="text-gray-300 mb-4 font-mono">Let the network know your cyber-cred is verified!</p>
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={() => handleShareOnSocial('twitter')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 border border-blue-400"
                                    >
                                        Share on X
                                    </button>
                                    <button
                                        onClick={() => handleShareOnSocial('facebook')}
                                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 border border-blue-600"
                                    >
                                        Share on Meta
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-3xl font-bold text-center text-red-400 mb-6 animate-text-glitch">Initiate GlitchCore Protocol!</h3>
                                <p className="text-lg text-gray-200 mb-4 font-mono">
                                    Your aesthetic needs an upgrade. Let us re-program your wardrobe.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <a
                                        href="#core-concepts" // Placeholder for your "What is Techwear/Cyberpunk?" blog post
                                        className="block py-3 px-6 bg-blue-600 text-white font-bold rounded-lg text-xl hover:bg-blue-700 transition duration-300 ease-in-out shadow-md border border-blue-500"
                                    >
                                        Explore Core Concepts
                                    </a>
                                    <a
                                        href="#entry-point" // Placeholder for your "Entry Point" collection
                                        className="block py-3 px-6 bg-lime-600 text-white font-bold rounded-lg text-xl hover:bg-lime-700 transition duration-300 ease-in-out shadow-md border border-lime-500"
                                    >
                                        View Entry Point Collection
                                    </a>
                                </div>

                                <h4 className="text-2xl font-bold text-center text-orange-400 mb-4 animate-text-glitch">Calibrate Your Look?</h4>
                                <p className="text-gray-300 mb-4 font-mono">
                                    Take our 'Cyber-Style Architect' quiz to find your perfect gear.
                                </p>
                                <a
                                    href="#style-quiz" // Placeholder for your style quiz page
                                    className="block w-full py-3 px-6 bg-pink-600 text-white font-bold rounded-lg text-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md border border-pink-500"
                                >
                                    Run Style Diagnostics
                                </a>
                            </>
                        )}
                    </div>
                )}

                {/* Contact Form (conditionally rendered after quiz) */}
                {quizSubmitted && <ContactForm />}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
