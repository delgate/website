"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

import { Message } from './components';

import { BiSend, BiLogoWhatsapp } from 'react-icons/bi';
import ReactPlayer from 'react-player'

export default function Home() {


    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
    );

    const [task, setTask] = useState('');
    const [isDark, setIsDark] = useState(systemPrefersDark);
    const [delgateLogo, setDelgateLogo] = useState("/delgate_clear.svg");

    useEffect(() => {
        if (isDark) {
            setDelgateLogo("/delgate_clear.svg");
        } else {
            setDelgateLogo("/delgate_dark.svg");
        }
    }, [isDark]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-12 lg:p-24">
        <Image
            src={delgateLogo}
            className="my-12"
            alt="Delegate logo"
            height={200}
            width={400}
        />

        <p className="font-semibold text-xl dark:text-blue-200 text-blue-950">¿Qué quieres delegar hoy?</p>

        <form
            method="post"
            action={`https://api.whatsapp.com/send?phone=34613071167&text=${task}`}
            className="w-full max-w-lg px-8 py-8"
        >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input
                    type="text"
                    id="task"
                    className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Necesito que me grabes y transcribas un webinario mañana a las 11:00, este es el link: ..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required />
                <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 p-1.5 bg-blue-950 rounded-lg">
                        <BiSend className="text-white" size={24}/>
                </button>
            </div>
        </form>

        {/* <div className="max-w-md flex"> */}
        {/*     <ReactPlayer */}
        {/*         className='relative' */}
        {/*         url='/trailer.mp4' */}
        {/*         controls={true} */}
        {/*     /> */}
        {/* </div> */}



        <p className="font-semibold text-xl dark:text-blue-200 text-blue-950 pt-12">
            Ejemplos reales
        </p>
        <div className="w-full max-w-sm dark:bg-blue-200 bg-slate-100 rounded-xl py-2 px-4 my-8">
            <Message message="Hola! 👋" isClient />
            <Message message="Necesito una nevera de menos de 183 cm de alto" isClient />
            <Message message="Sin problemas, aquí tienes varias opciones: ..." />
        </div>
        <div className="w-full max-w-sm dark:bg-blue-200 bg-slate-100 rounded-xl py-2 px-4 my-8">
            <Message message="¿Puedes pasarme a Excel todas estas facturas?" isClient />
            <Message message="Por supuesto, aquí tienes el documento: ..." />
        </div>

        <Link
            className="flex flex-col items-center dark:text-blue-200 text-blue-950 pb-8 pt-12"
            href="https://api.whatsapp.com/send?phone=34613071167&text=Hola%20delgate!">
            <BiLogoWhatsapp size={48}/>
            WhatsApp
        </Link>
    </main>
  )
}
