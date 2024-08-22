import React from "react";
import {
    Navbar,
    Typography,
    Button,
} from "@material-tailwind/react";
import brandDark from '/src/assets/brand.png';

export function Header() {
    const [openMenu, setOpenMenu] = React.useState(false);

    const navigationItems = [
        { label: "CoGuide", href: "/CoGuide" },
        { label: "Contact", href: "/Contact" },
        { label: "About", href: "/About" },
    ];

    const handleMenuToggle = () => setOpenMenu(!openMenu);

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex justify-between text-blue-gray-900">
                {/* Logo and App Name */}
                <div className="flex items-center">
                    <img src={brandDark} alt="CoGuide Logo" className="h-8 mr-2" />
                    <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
                        CoGuide
                    </Typography>
                </div>

                <nav className="hidden lg:flex items-center gap-4">
                    {navigationItems.map((item) => (
                        <Typography
                            key={item.label}
                            as="a"
                            href={item.href}
                            variant="small"
                            color="blue-gray"
                            className="p-2 font-normal text-lg hover:text-blue-600"
                        >
                            {item.label}
                        </Typography>
                    ))}
                </nav>

                {/* Sign In & Try CoGuide Button */}
                <div className="flex items-center gap-x-1">
                    <a href="/signin">
                        <Button variant="text" size="sm" className="">
                            Sign In
                        </Button>
                    </a>
                    <a href="/chat">
                        <Button Avariant="gradient" size="sm" className="flex items-center gap-3
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                            Try CoGuide
                        </Button>
                    </a>
                </div>
            </div>

        </Navbar>
    );
}