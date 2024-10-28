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

/// Test function to see if tailwindcss is working
// export default function TestComponent() {
//   return <div className="bg-blue-500 text-white p-4">Hello World</div>;
// }


export const metadata = {
  title: "josephnguyen.portfolio",
  description: "My portfolio project showcasing my interests, hobbies, passion, and experiences!",
  openGraph: {
    title: "Joseph Nguyen's Portfolio",
    description: "Explore Joseph's portfolio showcasing skills, experiences, and projects in software engineering.",
    url: "https://josephnguyen.vercel.app",
    images: [
      {
        url: "https://josephnguyen.vercel.app/assets/IMG_8826.png",
        width: 1200,
        height: 630,
        alt: "Joseph Nguyen's Portfolio Thumbnail",
      },
    ],
    site_name: "Joseph Nguyen's Portfolio",  // Adding the site name here
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {/* differences between <header /> vs <header><header/> */}
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
