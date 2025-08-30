'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { WaitlistBenefitsSection } from '@/components/WaitlistBenefitsSection'
import { LaunchTimelineSection } from '@/components/LaunchTimelineSection'
import { BenefitsSection } from '@/components/BenefitsSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ProductDemoSection } from '@/components/ProductDemoSection'
import { PricingSection } from '@/components/PricingSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { LeadForm } from '@/components/LeadForm'

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>()

  const handleOpenLeadForm = (planId?: string) => {
    setSelectedPlan(planId)
    setIsLeadFormOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection onOpenLeadForm={handleOpenLeadForm} />
        <WaitlistBenefitsSection onOpenLeadForm={handleOpenLeadForm} />
        <LaunchTimelineSection />
        <BenefitsSection />
        {/* <SocialProofSection /> */}
        <ProductDemoSection />
        <PricingSection onOpenLeadForm={handleOpenLeadForm} />
        <FAQSection />
        {/* <CTASection onOpenLeadForm={handleOpenLeadForm} /> */}
      </main>
      <Footer />
      
      <LeadForm 
        open={isLeadFormOpen} 
        onOpenChange={setIsLeadFormOpen}
        selectedPlan={selectedPlan}
      />
    </div>
  )
}
