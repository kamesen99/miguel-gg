import useSound from 'use-sound';
//import fartSfx from '../public/fart.mp3';

export default function Hero() {
    const [play] = useSound('/sound.mp3');

    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                {/*<h1 className="text-5xl font-bold">Welcome to the Domain</h1>
                <audio controls src="/fart.mp3" />
                */}
                <div  className="justify-center items-center lg:pl-10">
                    <p className="py-6">We both know why you're here ;)</p>
                    
                    <div className="flex justify-center">
                        <button onClick={() => play} className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
