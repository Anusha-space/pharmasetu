import React from "react";
import { X } from "lucide-react";

const FloatingAd = () => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-xl border rounded-xl p-4 w-64 animate-bounce-slow z-50">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-black"
      >
        <X size={16} />
      </button>

      <a
        href="https://www.espharma.in/"
        target="_blank"
        className="block text-center"
      >
        <h3 className="font-semibold text-lg">🔥 Join Pharma Coaching</h3>
        <p className="text-sm text-gray-600 mt-1">
          Affordable online pharmacy career guidance.
        </p>
        <button className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default FloatingAd;
