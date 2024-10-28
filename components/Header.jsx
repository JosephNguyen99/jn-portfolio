// import Link from "next/link";
// import { Button } from "./ui/button";

// // components
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//     <header className="py-8 xl:py-12 text-white">
//         <div className="container mx-auto flex justify-between items-center">
//             {/*  logo */}
//             <Link href="/">
//                 <h1 className="text-4xl font-semibold">
//                     Joseph<span className="text-accent">.</span>
//                 </h1>
//             </Link>

//             {/* desktop nav + questions button */}
//             <div className="hidden xl:flex items-center gap-8">
//                 <Nav />
//                 <Link href="/contact">
//                     <Button>Questions?</Button>
//                 </Link>
//             </div>

//             {/* mobile nav */}
//             <div className="xl:hidden">
//                 <MobileNav />
//             </div>
//         </div>
//     </header>
//   )
// };

// export default Header;

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        {/* Set a consistent max-w and px for alignment */}
        {/* Adjust
         max-w-[1280px]: This width is typically a good balance for aligning with most main content areas. Adjust this width to match the exact layout width of your homepage content.
         px-6 xl:px-8: Adding consistent horizontal padding helps align the logo and other header elements with the main content. 
         */}
        <div className="container mx-auto flex justify-between items-center max-w-[1200px] px-6 xl:px-8">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Joseph<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop nav + questions button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Questions?</Button>
                </Link>
            </div>

            {/* Mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;
