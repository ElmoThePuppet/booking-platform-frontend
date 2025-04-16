const HeroSection = () => {
    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Book Smarter, Not harder</h1>
                <p className="mt-4 text-gray-600">Your all-in-one scheduling platform.</p>
                <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">Get Started!</button>
            </div>
        </section>
    );
};

export default HeroSection;