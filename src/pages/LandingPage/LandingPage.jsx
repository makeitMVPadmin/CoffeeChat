import Header from "../../components/Landing/Header/Header";
import Hero from "../../components/Landing/Hero/Hero";
import About from "../../components/Landing/About/About";
import Features from "../../components/Landing/Features/Features";
import Partners from "../../components/Landing/Partners/Partners";
// import Testimonials from "../../components/Landing/Testimonials/Testimonials";
import Newsletter from "../../components/Landing/Newsletter/Newsletter";

const LandingPage = () => {
  return (
      <>
      <Header />
      <Hero />
      <About />
      <Partners />
      <Features />
      {/* <Testimonials /> */}
      <Newsletter />
      </>
  );
};

export default LandingPage;