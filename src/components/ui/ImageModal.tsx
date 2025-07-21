import React, { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  images: string[];
  onClose: () => void;
}

export default function ImageModal({ images, onClose }: ImageModalProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <button
        className="absolute text-2xl text-white top-4 right-4"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="flex items-center gap-4">
        <button onClick={prev} className="px-2 text-3xl text-white">
          &#8592;
        </button>
        <div className="max-h-[80vh] w-auto flex items-center justify-center">
          <Image
            src={images[current]}
            alt={`Imagem ${current + 1}`}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-contain max-h-[80vh]"
          />
        </div>
        <button onClick={next} className="px-2 text-3xl text-white">
          &#8594;
        </button>
      </div>
      <div className="absolute left-0 right-0 flex justify-center gap-2 bottom-8">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full ${
              i === current ? "bg-primary" : "bg-gray-400"
            }`}
            style={{ margin: "0 2px" }}
          />
        ))}
      </div>
    </div>
  );
}
