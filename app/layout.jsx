import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Astrion Innovation",
  description: "Transform your digital vision into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />     
        {children}
        <Footer/>
      </body>
    </html>
  );
}

