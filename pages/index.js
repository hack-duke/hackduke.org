import Navbar from "../components/Navbar";
import HeroBackground from "../components/HeroBackground";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="hero">
                <HeroBackground />
                <div className="logo">
                    <img src="/images/hd-logo.svg" />
                </div>
            </div>
        </>
    );
}
