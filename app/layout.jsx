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
  description: "My portfolio project showcasing my interest, hobbies, passion, and experiences!",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={jetbrainsMono.variable}>{children}</body>
//     </html>
//   );

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
