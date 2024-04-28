import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
Navbar
// Navbar
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
      </head>
      
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
