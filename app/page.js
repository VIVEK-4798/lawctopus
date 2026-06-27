import AboutCourse from "@/components/about/AboutCourse";
import WhoShouldEnroll from "@/components/about/WhoShouldEnroll";
import LearningOutcomes from "@/components/benefits/LearningOutcomes";
import Curriculum from "@/components/curriculum/Curriculum";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import TrustedBy from "@/components/trusted/TrustedBy";
import Faculty from "@/components/faculty/Faculty";
import Testimonials from "@/components/testimonials/Testimonials";
import SocialProof from "@/components/testimonials/SocialProof";
import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/faq/FAQ";
import FinalCTA from "@/components/cta/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <AboutCourse />
      <WhoShouldEnroll />
      <LearningOutcomes />
      <Curriculum />
      <Faculty />
      <Testimonials />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
