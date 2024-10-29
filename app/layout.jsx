// jn-portfolio/app/layout.jsx
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components 
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
}); 


// Comment metadata section code out. Let's explicitly call metadata in the func
// export const metadata = {
//   title: "josephnguyen.portfolio",
//   description: "My portfolio project showcasing my interests, hobbies, passion, and experiences!",
//   openGraph: {
//     title: "Joseph Nguyen's Portfolio",
//     description: "Explore Joseph's portfolio showcasing skills, experiences, and passion in software engineering.",
//     url: "https://josephnguyen.vercel.app",
//     images: [
//       {
//         url: "https://josephnguyen.vercel.app/assets/IMG_8826.png",
//         width: 1200,
//         height: 630,
//         alt: "Joseph Nguyen's Portfolio Thumbnail",
//       },
//     ],
//     site_name: "Joseph Nguyen's Portfolio",  // Adding the site name here
//     type: "website",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <title>Joseph Nguyen's Portfolio</title>
        <meta name="description" content="My portfolio project showcasing my interests, hobbies, passion, and experiences!" />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="Joseph Nguyen's Portfolio" />
        <meta property="og:description" content="Explore Joseph's portfolio showcasing skills, experiences, and passion in software engineering." />
        <meta property="og:url" content="https://josephnguyen.vercel.app" />
        <meta property="og:image" content="https://josephnguyen.vercel.app/assets/IMG_8826.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Joseph Nguyen's Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joseph Nguyen's Portfolio" />
        <meta name="twitter:description" content="Explore Joseph's portfolio showcasing skills, experiences, and passion in software engineering." />
        <meta name="twitter:image" content="https://josephnguyen.vercel.app/assets/IMG_8826.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="https://josephnguyen.vercel.app/assets/IMG_8826.png" />
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
