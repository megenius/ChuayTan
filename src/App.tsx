/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { TopHotlineBar } from './components/TopHotlineBar';
import { CategorySelector } from './components/CategorySelector';
import { LanguageSelector } from './components/LanguageSelector';
import { TouristFlipCard } from './components/TouristFlipCard';
import { StepByStepGuide } from './components/StepByStepGuide';
import { DontsWarning } from './components/DontsWarning';
import { EmergencyActionPanel } from './components/EmergencyActionPanel';
import { OfflineGuaranteeBadge } from './components/OfflineGuaranteeBadge';
import { BottomNavBar, TabId } from './components/BottomNavBar';
import { CallModal } from './components/CallModal';
import { InfoModal } from './components/InfoModal';
import { FlipScreenView } from './components/screens/FlipScreenView';
import { InteractiveDialogView } from './components/screens/InteractiveDialogView';
import { HotlinesView } from './components/screens/HotlinesView';
import { useEmergencyCards } from './hooks/useEmergencyData';
import { EmergencyCategory, Language } from './types/emergency';

// Configure TanStack Query client with offline-first caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
});

function EmergencyApp() {
  const [activeTab, setActiveTab] = useState<TabId>('cards');
  const [selectedCategory, setSelectedCategory] = useState<EmergencyCategory>('jellyfish');
  const [selectedLang, setSelectedLang] = useState<Language>('EN');

  // Call modal state
  const [callModal, setCallModal] = useState<{
    isOpen: boolean;
    number: string;
    title: string;
    detail: string;
  }>({
    isOpen: false,
    number: '1669',
    title: 'สายด่วนกู้ชีพ 1669',
    detail: 'แจ้งเหตุฉุกเฉินผู้ป่วยบาดเจ็บ',
  });

  // Info modal state
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const { data: cards, isLoading } = useEmergencyCards();
  const currentCard = cards?.find((c) => c.id === selectedCategory) || cards?.[0];

  const handleOpenCall = (number: string, title: string, detail: string) => {
    setCallModal({
      isOpen: true,
      number,
      title,
      detail,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-start items-center">
      {/* Mobile Shell Container (Responsive for all screens) */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-xl relative flex flex-col border-x border-slate-200">
        {/* Sticky App Header */}
        <Header
          onOpenInfo={() => setIsInfoOpen(true)}
          onOpenProfile={() => setIsInfoOpen(true)}
        />

        {/* Dynamic Screen Content Based on Bottom Tab */}
        <main className="flex-1 pb-20">
          {activeTab === 'cards' && currentCard && (
            <div className="animate-in fade-in duration-150">
              {/* Quick Hotlines Header Strip */}
              <TopHotlineBar onCall={handleOpenCall} />

              {/* Danger Category & Urgency Selector */}
              {cards && (
                <CategorySelector
                  cards={cards}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              )}

              {/* Language Selector Bar */}
              <LanguageSelector
                currentLang={selectedLang}
                onSelectLang={setSelectedLang}
              />

              {/* Primary Tourist Handover Flip Card */}
              <TouristFlipCard
                card={currentCard}
                language={selectedLang}
                onOpenFullscreenFlip={() => setActiveTab('flip')}
              />

              {/* Step-by-Step Treatment Guide with Image & 30s Timer */}
              <StepByStepGuide
                card={currentCard}
                onEmergencyCall={() =>
                  handleOpenCall(
                    '1669',
                    'สพฉ. 1669 กู้ชีพฉุกเฉิน',
                    `ผู้ป่วยบาดเจ็บจาก ${currentCard.nameTh}`
                  )
                }
              />

              {/* Red Life-Threatening Prohibitions */}
              <DontsWarning card={currentCard} />

              {/* Emergency Call Actions Bar */}
              <EmergencyActionPanel
                onCall={handleOpenCall}
                categoryNameTh={currentCard.nameTh}
              />

              {/* Offline Verification Trust Badge */}
              <OfflineGuaranteeBadge />
            </div>
          )}

          {activeTab === 'flip' && currentCard && cards && (
            <div className="animate-in fade-in duration-150">
              <FlipScreenView
                card={currentCard}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                cards={cards}
              />
            </div>
          )}

          {activeTab === 'dialog' && (
            <div className="animate-in fade-in duration-150">
              <InteractiveDialogView />
            </div>
          )}

          {activeTab === 'hotlines' && (
            <div className="animate-in fade-in duration-150">
              <HotlinesView onCall={handleOpenCall} />
            </div>
          )}
        </main>

        {/* Fixed Bottom Navigation Bar */}
        <BottomNavBar activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* Emergency Call Modal */}
        <CallModal
          isOpen={callModal.isOpen}
          onClose={() => setCallModal((prev) => ({ ...prev, isOpen: false }))}
          phoneNumber={callModal.number}
          serviceTitle={callModal.title}
          emergencyDetail={callModal.detail}
        />

        {/* System Info / Responder Profile Modal */}
        <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EmergencyApp />
    </QueryClientProvider>
  );
}
