import { About } from "@/components/About/About";
import { ContactCta } from "@/components/ContactCta/ContactCta";
import { Differentials } from "@/components/Differentials/Differentials";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home(): React.JSX.Element {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
