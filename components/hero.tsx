//import useSound from 'use-sound';
import Image from "next/image";
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener';



export default function Hero() {
    //const [play] = useSound('/sound.mp3');
    const [effect, setEffect] = useState(false);
    
    const onClickHandler = () => {
        setEffect(!effect)
    }

    const handleClickAway = () => {
		setEffect(false);
	};

    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {!effect && <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />}
                {/*<h1 className="text-5xl font-bold">Welcome to the Domain</h1>*/}
                {/*<audio controls src="/sound.mp3" />*/}
                
                <div  className="justify-center items-center lg:pl-10">     
                    {!effect && <p className="py-6 items-center">We both know why you're here ;)</p>}
                    <div className="flex justify-center pb-2">
                    {!effect && <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                        </div>
                    }
                    </div>
                    {!effect && 
                        <div className="flex justify-center">
                            <button onClick={() => {onClickHandler()}} className="btn btn-primary">Get Started</button>
                        </div>}
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <>
                        {effect && <Image className="max-w-full h-auto rounded-full p-2 bg-white border max-w-sm animate-grow"  src='/popup.jpg' width="250" height="250" alt={"Popup"}></Image>}    
                        </>
                    </ClickAwayListener>    
                </div>
            </div>
        </div>
    )
}
