
export default function Hero() {
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <h1 className="text-5xl font-bold">Welcome to the Domain</h1>
                <div  className="flex justify-center items-center">
                    <p className="py-6">Stay tuned to this space for upcoming features and changes.</p>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
