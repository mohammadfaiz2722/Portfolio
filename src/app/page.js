import Image from "next/image";
import FirstBox from "./components/FirstBox";
import SeconBox from "./components/SeconBox";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
    <FirstBox/>
    <SeconBox/>
    <Footer/>
    </main>
  );
}
