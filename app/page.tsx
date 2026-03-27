import Hero from "@/components/home/Hero";
import HomeListings from "@/components/home/HomeListings";
import AboutUs from "@/components/home/AboutUs";
import SignatureProjects from "@/components/home/SignatureProjects";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import InsightsInspiration from "@/components/home/InsightsInspiration";
import HomeFaq from "@/components/home/HomeFaq";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import HomeCtaStrip from "@/components/home/HomeCtaStrip";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeListings />
      <AboutUs />
      <SignatureProjects />
      <ClientTestimonials />
      <InsightsInspiration />
      <HomeFaq />
      <FinalCtaSection />
      <HomeCtaStrip />
    </div>
  );
}
