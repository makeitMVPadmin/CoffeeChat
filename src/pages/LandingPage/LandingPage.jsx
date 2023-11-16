import Header from "../../components/Landing/Header/Header";
import Hero from "../../components/Landing/Hero/Hero";
import About from "../../components/Landing/About/About";
import Features from "../../components/Landing/Features/Features";
import Partners from "../../components/Landing/Partners/Partners";
// import Testimonials from "../../components/Landing/Testimonials/Testimonials";
import Newsletter from "../../components/Landing/Newsletter/Newsletter";
import Footer from "../../components/Landing/Footer/Footer";

const LandingPage = () => {
  return (
      <>
      <Header />
      <Hero />
      <About id="About"/>
      <Partners />
      <Features id="FAQs"/>
      {/* <Testimonials /> */}
      <Newsletter />
      <Footer />
      </>
  );
};

export default LandingPage;