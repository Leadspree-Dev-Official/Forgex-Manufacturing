import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MetricsStrip } from './components/MetricsStrip';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { QuoteModal } from './components/QuoteModal';
import { ProductionVideoModal } from './components/ProductionVideoModal';
import { DetailModal } from './components/DetailModal';
import { AllItemsModal } from './components/AllItemsModal';

import { CapabilityItem, ProjectItem, FeatureCardItem } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedIndustry, setPreselectedIndustry] = useState<string>('Automotive');
  const [tourModalOpen, setTourModalOpen] = useState(false);

  // Detail Modal State
  const [detailItem, setDetailItem] = useState<CapabilityItem | ProjectItem | FeatureCardItem | null>(null);
  const [detailType, setDetailType] = useState<'capability' | 'project' | 'feature' | null>(null);

  // All Items Modal State (View All Capabilities / View All Projects)
  const [allItemsOpen, setAllItemsOpen] = useState(false);
  const [allItemsType, setAllItemsType] = useState<'capabilities' | 'projects'>('capabilities');

  const handleOpenQuote = (industry?: string) => {
    if (industry) {
      setPreselectedIndustry(industry);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectFeature = (feature: FeatureCardItem) => {
    setDetailItem(feature);
    setDetailType('feature');
  };

  const handleSelectCapability = (capability: CapabilityItem) => {
    setDetailItem(capability);
    setDetailType('capability');
  };

  const handleSelectProject = (project: ProjectItem) => {
    setDetailItem(project);
    setDetailType('project');
  };

  const handleViewAllCapabilities = () => {
    setAllItemsType('capabilities');
    setAllItemsOpen(true);
  };

  const handleViewAllProjects = () => {
    setAllItemsType('projects');
    setAllItemsOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        onRequestQuote={() => handleOpenQuote()}
        onOpenTour={() => setTourModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onRequestQuote={() => handleOpenQuote()}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* 2. About Forgex Section (with 3 dark feature cards) */}
        <AboutSection onSelectFeature={handleSelectFeature} />

        {/* 3. Metrics / Stats Strip */}
        <MetricsStrip />

        {/* 4. Capabilities Section (with 4 cards) */}
        <CapabilitiesSection
          onSelectCapability={handleSelectCapability}
          onViewAll={handleViewAllCapabilities}
        />

        {/* 5. Industries We Serve (with 6 icons & interactive specs) */}
        <IndustriesSection onQuoteForIndustry={(ind) => handleOpenQuote(ind)} />

        {/* 6. Featured Projects (with 3 project cards) */}
        <FeaturedProjectsSection
          onSelectProject={handleSelectProject}
          onViewAllProjects={handleViewAllProjects}
        />

        {/* 7. Bottom CTA Banner ("Have a Production Challenge? Let's Engineer the Solution.") */}
        <CtaBanner onStartProject={() => handleOpenQuote()} />
      </main>

      {/* 8. Comprehensive Footer with requested Developer & Powered By links */}
      <Footer
        onRequestQuote={() => handleOpenQuote()}
        onOpenTour={() => setTourModalOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedIndustry={preselectedIndustry}
      />

      <ProductionVideoModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        onRequestQuote={() => {
          setTourModalOpen(false);
          handleOpenQuote();
        }}
      />

      <DetailModal
        item={detailItem}
        type={detailType}
        onClose={() => {
          setDetailItem(null);
          setDetailType(null);
        }}
        onRequestQuote={() => {
          setDetailItem(null);
          setDetailType(null);
          handleOpenQuote();
        }}
      />

      <AllItemsModal
        isOpen={allItemsOpen}
        type={allItemsType}
        onClose={() => setAllItemsOpen(false)}
        onSelectItem={(item, type) => {
          setDetailItem(item);
          setDetailType(type);
        }}
        onRequestQuote={() => {
          setAllItemsOpen(false);
          handleOpenQuote();
        }}
      />
    </div>
  );
}
