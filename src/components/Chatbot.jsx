import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", name: "Usuario", content: question },
    ]);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", name: "Asistente Bot", content: data.answer },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", name: "Asistente Bot", content: "Hubo un error al obtener la respuesta." },
        ]);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", name: "Asistente Bot", content: "Error de red o servidor." },
      ]);
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {/* Botón para abrir/cerrar el chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#8FE282] rounded-full shadow-lg flex items-center justify-center text-black hover:scale-110 transition-transform"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {/* Ventana del chatbot */}
      {isOpen && (
        <div
          className={`fixed ${
            window.innerWidth < 768
              ? "inset-0"
              : "bottom-20 right-4 w-96 rounded-lg"
          } bg-white shadow-2xl flex flex-col overflow-hidden border border-gray-200`}
        >
          {/* Encabezado */}
          <div className="flex justify-between items-center bg-[#8FE282] p-4">
            <h2 className="text-lg font-semibold text-black">Asistente Chatbot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700"
            >
              ✖
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.length === 0 ? (
              <p className="text-center text-gray-400">
                Inicia la conversación escribiendo tu pregunta.
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    msg.role === "user" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      msg.role === "user" ? "text-black" : "text-[#8FE282]"
                    }`}
                  >
                    {msg.name}
                  </span>
                  <div
                    className={`ml-2 p-3 rounded-lg max-w-xs text-sm shadow ${
                      msg.role === "user"
                        ? "bg-gray-200 text-black"
                        : "bg-[#8FE282] text-black"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Formulario para enviar mensajes */}
          <form onSubmit={handleSubmit} className="p-4 bg-gray-100 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Escribe tu pregunta..."
                value={question}
                onChange={handleChange}
                className="flex-1 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8FE282]"
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 bg-[#8FE282] text-black rounded-lg hover:bg-[#76c871] transition disabled:bg-gray-400"
              >
                {loading ? "..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
