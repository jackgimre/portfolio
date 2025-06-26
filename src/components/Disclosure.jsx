import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Disclosure({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:w-[100%] w-[90%] mx-auto border rounded-lg mb-4 shadow-lg bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
      >
        <span className="font-bold">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
}
