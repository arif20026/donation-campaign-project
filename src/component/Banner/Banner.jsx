const Banner = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-20">
            <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-image"
                style={{
                    backgroundImage: `url("https://i.ibb.co/tCdcT99/Food.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    opacity: 0.1,
                }}
            ></div>
            <h2 className="text-5xl font-bold relative z-10">I Grow By Helping People In Need</h2>
            <div className="join m-10 pb-72 relative z-10">
                <input className="input input-bordered join-item" placeholder="Search here..." />
                <button className="btn join-item">Search</button>
            </div>
        </div>
    );
};

export default Banner;
