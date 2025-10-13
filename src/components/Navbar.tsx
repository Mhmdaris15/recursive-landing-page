// Navbar.tsx - VERSI BARU HANYA UNTUK PORTOFOLIO

import { useState } from "react";
// <-- LANGKAH 1: IMPORT Link dari react-router-dom
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { LinkedinIcon, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/#features", label: "Features" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/portofolio", label: "Portofolio" }, 
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            {/* <-- LANGKAH 2: Ubah logo menjadi Link agar kembali ke home tanpa refresh */}
            <Link to="/" className="ml-2 font-bold text-xl flex">
              <LogoIcon />
              Recursive Tech
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Recursive Tech
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) =>
                    href.startsWith("/") ? (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                    )
                  )}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/muhammad-aris-septanugroho/"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <LinkedinIcon className="mr-2 w-5 h-5" />
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {/* <-- LANGKAH 4: Modifikasi perulangan untuk menu desktop */}
            {routeList.map((route: RouteProps, i) =>
              route.href.startsWith("/") ? (
                <Link
                  to={route.href}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </Link>
              ) : (
                <a
                  rel="noreferrer noopener"
                  href={route.href}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </a>
              )
            )}
          </nav>

          {/* ... (div terakhir tetap sama) ... */}
          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/muhammad-aris-septanugroho/"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <LinkedinIcon className="mr-2 w-5 h-5" />
              Contact
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};