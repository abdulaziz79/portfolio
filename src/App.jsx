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
     {/* <section >< Parallax type="services"/></section> */}
    <section id="Services"><Services /></section>
    <div id="Portfolio">< Parallax type="portfolio"/></div>
    {/* <section id="Portfolio"> </section> */}

    <Portfolio  id="Portfolio" />
    <section id="Contact"><Contact /></section>
    {/* <section id="About">About
    </section> */}
{/* <Test /> */}

    </div>;
};

export default App;
