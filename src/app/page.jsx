import GsapFlip from "./components/gsap/flip";
import FramerFlip from "./components/framer-motion/flip";
import SpringFlip from "./components/react-spring/flip";
import ProgressBar from "./components/framer-motion/ProgressBar";

export default function Home() {
  return (
    <main className="flex flex-col text-white bg-gray-900 min-h-screen py-20">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">Animações</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-2xl font-bold">Flip</h2>
        <div className="flex justify-between mt-5 w-full px-36">
          <GsapFlip />
          <FramerFlip />
          <SpringFlip />
        </div>
        <div className="px-72 mt-24">
          <ProgressBar />
        </div>
      </div>
    </main>
  );
}
