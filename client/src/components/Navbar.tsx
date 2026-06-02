import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import signature from "../assets/signature.png"

const links = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/authority-book", label: "The Book" },
    { to: "/#apps", label: "Apps" },
    { to: "/#podcast", label: "Podcast" },
    { to: "/#contact", label: "Contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link to="/">
                    <img
                        src={signature}
                        alt="Adam Chronister"
                        className="h-12 w-auto object-contain"
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => {
                        if (l.to.includes("#")) {
                            return (
                                <a key={l.label} href={l.to} className="text-sm text-foreground/80 hover:text-gold transition-colors">
                                    {l.label}
                                </a>
                            );
                        }
                        return (
                            <Link key={l.label} to={l.to} className="text-sm text-foreground/80 hover:text-gold transition-colors">
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>
                <a
                    href="/authority-book"
                    className="hidden md:inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-md hover:brightness-110 transition shadow-gold"
                >
                    Pre Order →
                </a>
                <button className="md:hidden text-foreground p-3 rounded-full hover:bg-white/10 transition" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            {open && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
                    <nav className="flex flex-col px-4 sm:px-6 py-4 gap-3">
                        {links.map((l) => (
                            <a key={l.label} href={l.to} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-gold py-3 text-base">
                                {l.label}
                            </a>
                        ))}
                        <a href="/authority-book" className="bg-gold text-primary-foreground px-5 py-3 text-sm font-semibold rounded-md text-center w-full">
                            Pre Order →
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}