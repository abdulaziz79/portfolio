import Cursor from "./Cursor/Cursor";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Parallax from "./Parallax/Parallax";
import Services from "./Services/Services";
import Test from "./Test";
import "./app.scss"
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import Try from "./tryy/Try";

const App = () => {

  return <div>
    <section id="Homepage">
<Cursor />
      <Navbar/>
      <Hero />
    </section>
     <section id="Services">< Parallax type="services"/></section>
    <section><Services /></section>
    <section id="Portfolio">< Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
    {/* <section id="About">About
    </section> */}
{/* <Test /> */}

    </div>;
};

export default App;
