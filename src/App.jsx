import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setTimeout(() => {
        console.log({ text });
        setLoading(false);
        setText("");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  // eslint-disable-next-line react/prop-types
  const Message = ({ bot, body }) => {
    return (
      <div className={`flex ${!bot ? "justify-end" : ""}`}>
        <div
          className={`inline-flex p-4 max-w-[75%] text-sm rounded-3xl shadow ${
            bot ? "rounded-bl-none bg-teal-900 text-white" : "rounded-br-none bg-white"
          }`}
        >
          {body}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen p-4">
      <section className="max-w-screen-md mx-auto flex flex-col justify-center h-full gap-8">
        <h1 className="text-3xl md:text-3xl font-black text-teal-900 text-center">
          Ask Riches about your real estate property needs! 🏘️
        </h1>
        {/*  */}
        <section className="shadow rounded-2xl">
          <header className="px-4 py-2.5 bg-teal-900 text-white rounded-t-2xl flex items-center gap-2 font-medium shadow">
            <img src="/bigSmile.svg" className="bg-gray-400 h-10 w-10 rounded-full" />
            Riches
          </header>
          {/*  */}
          <main className="h-[45vh] bg-gray-100 px-4 py-4 flex flex-col gap-6 overflow-y-auto">
            <Message body="Hey Riches! 👋🏼" />

            {[...Array(10)].map((_, i) => (
              <Message
                key={i}
                bot={!(i % 2)}
                body="Hi Fella 👋🏼. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita, praesentium ut
                accusamus assumenda dolore incidunt quibusdam nisi nulla officiis nobis tenetur exercitationem cum sit
                maiores modi. Suscipit, eaque laboriosam."
              />
            ))}
          </main>
          {/*  */}
          <footer className="border-t bg-white p-4 rounded-b-2xl">
            <form onSubmit={handleSend}>
              <textarea
                rows="4"
                className="block w-full border rounded focus:outline-none focus:ring transition-all focus:ring-offset-2 focus:ring-teal-900/20 mb-4 text-sm p-2.5"
                placeholder="Type a message for Riches"
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className={`bg-teal-900 text-white text-sm font-medium px-6 py-3 rounded hover:bg-teal-950 focus:outline-none focus:ring transition-all focus:ring-offset-2 focus:ring-teal-900/20 ${
                  loading ? "opacity-75" : "opacity-100"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </footer>
        </section>
      </section>
    </div>
  );
}
