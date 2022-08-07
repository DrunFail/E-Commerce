import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import ProfileCard from "../profilecard/ProfileCard";

export default function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
            <ProfileCard />
        </header>
    );
}