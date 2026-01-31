// components/CardsStack.jsx
import Image from "next/image";
export default function CardsStack() {
  return (
    <div className="relative flex items-center justify-center">
      <Glass
        text="Github"
        rotate={-15}
        className="-mr-12 z-10"
      />

      <Glass
        text="Code"
        rotate={5}
        className="-mr-12 z-30"
      />

      <Glass
        text="Earn"
        rotate={25}
        className="-mr-12 z-20"
      />
    </div>
  );
}

function Glass({ text, rotate, className = "" }) {
  return (
    <div
      data-text={text}
      style={{ "--r": rotate }}
      className={`${className} mt-4 relative overflow-hidden flex items-center justify-center srounded-[10px] border border-gray-300 to-transparent shadow-lg backdrop-blur-md rounded-lg [transform:rotate(calc(var(--r)*1deg))]`}
    >
      {/* IMAGE */}
      <Image
        src="/images/ibrahim.jpg"
        alt="Ibrahim"
        className="rounded-lg object-cover max-[800px]:w-24 max-[800px]:h-24"
        width={100}
        height={100}
      />
    </div>
  );
}
