import Image from "next/image";
import Link from "next/link";

import heroImage from "../../../public/images/hero.jpeg";
import logoGucci from "../../../public/logo-gucci.svg";
import gucciMen from "../../../public/images/gucci-men.png";
import gucciWoman from "../../../public/images/gucci-woman.png";
import gucciFlora from "../../../public/images/gucci-flora.png";

export default function Sticky() {
  return (
    <main className="flex flex-col relative min-h-screen gap-52">
      <div className="sticky top-0 flex flex-col w-full h-screen items-center justify-center z-10">
        <Image
          src={heroImage}
          className="w-full h-full object-cover"
          alt="Hero Image"
        />
        <Image
          src={logoGucci}
          className="absolute top-20 w-[70%] opacity-40"
          alt="Gucci Logo"
        />
      </div>
      <div className="w-full bg-white flex flex-col z-20 p-5 gap-60 min-h-screen sticky top-0">
        <div className="w-full flex flex-row gap-5 sticky top-5">
          <div className="flex flex-col items-center justify-center w-1/2 max-h-screen relative">
            <div className="w-full h-full absolute bg-black/15" />
            <Image
              src={gucciWoman}
              className="w-full max-h-screen object-cover"
              alt="Gucci Woman"
            />
            <div className="flex flex-col items-center absolute bottom-20 gap-4">
              <p className="text-white text-3xl">Pre-Fall 2024</p>
              <button className=" text-white items-center justify-center text-center px-7 py-3 border border-white backdrop-blur-lg">
                Explorar a coleção
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 max-h-screen relative">
            <div className="w-full h-full absolute bg-black/15" />
            <Image
              src={gucciMen}
              className="w-full max-h-screen object-cover"
              alt="Gucci Men"
            />
            <div className="flex flex-col items-center absolute bottom-20 gap-4">
              <p className="text-white text-3xl">
                Men&apos;s Fall Winter 2024 Collection
              </p>
              <button className=" text-white items-center justify-center text-center px-7 py-3 border border-white backdrop-blur-lg">
                Explorar os novos estilos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col z-20 p-5 min-h-screen sticky top-0">
        <div className="flex flex-col items-center justify-center max-h-screen sticky top-5">
          <div className="w-full h-full absolute bg-black/15" />
          <div className="absolute top-20 bg-white/20 backdrop-blur-md py-1 px-3">
            <p className="text-white font-bold text-sm">Fragancias</p>
          </div>
          <Image
            src={gucciFlora}
            className="w-full max-h-screen object-cover"
            alt="Gucci Flora"
          />
          <div className="flex flex-col items-center justify-center absolute text-center bottom-20 gap-5">
            <p className="text-white text-3xl">Gucci Flora Gorgeous Orchid</p>
            <button className="text-white items-center justify-center text-center px-7 py-3 border border-white backdrop-blur-lg">
              Explorar nova entrada
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-72 py-20 w-full min-h-screen bg-black z-20 sticky">
        <div className="flex flex-col gap-40">
          <div className="flex flex-col gap-10">
            <p className="text-white/70 text-sm">Como podemos te ajudar?</p>
            <Link href="" className="text-white font-medium underline text-sm">
              Fale conosco
            </Link>
            <Link href="" className="text-white font-medium underline text-sm">
              FAQs
            </Link>
            <Link href="" className="text-white font-medium underline text-sm">
              Não receber publicidades por email
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-white/70 text-sm">Serviços Gucci</p>
            <Link href="" className="text-white font-medium underline text-sm">
              Descubra nossos serviços
            </Link>
            <Link href="" className="text-white font-medium underline text-sm">
              Agende um encontro
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-white/70 text-sm">A Empresa</p>
          <Link href="" className="text-white font-medium underline text-sm">
            Sobre a Gucci
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Equilibrio Gucci
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Código de Ética
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Carreiras
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Legal
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Política de Cookies & Privacidade
          </Link>
          <Link href="" className="text-white font-medium underline text-sm">
            Informações da Corporação
          </Link>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-white/70 text-sm">
              Se inscreva para atualizações da Gucci
            </p>
            <p className="text-white text-xs max-w-[500px]">
              Ao inserir o seu endereço de email abaixo, você concorda em
              receber nossa newsletter com acesso às nossas mais novas coleções,
              eventos e iniciativas. Você pode encontrar mais detalhes sobre na
              nossa{" "}
              <span className="font-bold underline">
                Política de Privacidade
              </span>
            </p>
            <input
              type="text"
              className="py-2 border-b border-white bg-black max-w-[500px] focus:outline-none text-white"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
