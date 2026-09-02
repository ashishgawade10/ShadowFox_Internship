import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TreatmentsPreview from "@/components/TreatmentsPreview";
import Testimonials from "@/components/Testimonials";
import Facilities from "@/components/Facilities";
import AppointmentCTA from "@/components/AppointmentCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <WhyChooseUs />
      <TreatmentsPreview />
      <Testimonials />
      <Facilities />
      <AppointmentCTA />
    </main>
  );
}