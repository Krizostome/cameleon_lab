import Hero from '../src/components/sections/Hero'
import NosRealisations from '../src/components/sections/NosRealisations'
import BasedInCotonou from '../src/components/sections/BasedInCotonou'
import Services from '../src/components/sections/Services'
import Process from '../src/components/sections/Process'
import TechExpertise from '../src/components/sections/TechExpertise'
import Testimonials from '../src/components/sections/Testimonials'
import Team from '../src/components/sections/Team'
import FAQ from '../src/components/sections/FAQ'
import CTASection from '../src/components/sections/CTA'
import AppLayout from '../Layouts/AppLayout'

Home.layout = (page: JSX.Element) => <AppLayout>{page}</AppLayout>

export default function Home() {
  return (
    <>
      <Hero />
      <NosRealisations />
      <TechExpertise />
      <BasedInCotonou />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
