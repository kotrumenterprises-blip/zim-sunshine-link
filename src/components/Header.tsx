import { Button, buttonVariants } from "@/components/ui/button";
import { StarIcon } from "@heroicons/react/24/solid";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const sectionIds = ["home", "services", "portfolio", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <StarIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Abercroft
            </h1>
            <p className="text-sm text-muted-foreground">Project Management & Consulting</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Primary">
          <a href="#home" aria-current={activeSection === "home" ? "true" : undefined} className={cn(
            "relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:content-[''] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
            activeSection === "home" ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary hover:after:scale-x-100",
          )}>
            Home
          </a>
          <a href="#services" aria-current={activeSection === "services" ? "true" : undefined} className={cn(
            "relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:content-[''] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
            activeSection === "services" ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary hover:after:scale-x-100",
          )}>
            Services
          </a>
          <a href="#portfolio" aria-current={activeSection === "portfolio" ? "true" : undefined} className={cn(
            "relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:content-[''] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
            activeSection === "portfolio" ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary hover:after:scale-x-100",
          )}>
            Portfolio
          </a>
          <a href="#contact" aria-current={activeSection === "contact" ? "true" : undefined} className={cn(
            "relative pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:content-[''] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
            activeSection === "contact" ? "text-primary after:scale-x-100" : "text-foreground hover:text-primary hover:after:scale-x-100",
          )}>
            Contact
          </a>
          <a href="#contact">
            <Button className={buttonVariants({ variant: "hero" })}>Get in Touch</Button>
          </a>
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button className={buttonVariants({ variant: "hero" })} aria-haspopup="menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-xs" id="mobile-menu" aria-label="Mobile">
              <nav className="mt-10 flex flex-col space-y-6" role="navigation">
                <SheetClose asChild>
                  <a href="#home" ref={firstMobileLinkRef} className={cn("text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", activeSection === "home" ? "text-primary" : "text-foreground hover:text-primary")}>
                    Home
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#services" className={cn("text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", activeSection === "services" ? "text-primary" : "text-foreground hover:text-primary")}>Services</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#portfolio" className={cn("text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", activeSection === "portfolio" ? "text-primary" : "text-foreground hover:text-primary")}>Portfolio</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className={cn("text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", activeSection === "contact" ? "text-primary" : "text-foreground hover:text-primary")}>Contact</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#contact" className="pt-4">
                    <Button className={buttonVariants({ variant: "hero" }) + " w-full"}>Get in Touch</Button>
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showBackToTop &&
        createPortal(
          <div className="md:hidden fixed left-4 z-[60] bottom-[calc(env(safe-area-inset-bottom)+1rem)]">
            <button
              aria-label="Back to top"
              className="glass rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground">
                <path fillRule="evenodd" d="M11.47 4.47a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06L12.75 6.81V19.5a.75.75 0 01-1.5 0V6.81l-5.47 5.47a.75.75 0 11-1.06-1.06l6.75-6.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </header>
  );
};

export default Header;