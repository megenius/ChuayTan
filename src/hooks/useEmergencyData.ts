import { useQuery } from '@tanstack/react-query';
import { EMERGENCY_CARDS, EMERGENCY_HOTLINES, PHRASEBOOK } from '../data/emergencyData';
import { EmergencyCategory, Language } from '../types/emergency';

// Simulated API fetches with offline fallback guarantees
export const useEmergencyCards = () => {
  return useQuery({
    queryKey: ['emergency-cards'],
    queryFn: async () => {
      // Simulate rapid offline-first cache resolution
      await new Promise((r) => setTimeout(r, 60));
      return EMERGENCY_CARDS;
    },
    staleTime: 1000 * 60 * 60, // 1 hour cached
  });
};

export const useEmergencyCard = (id: EmergencyCategory) => {
  return useQuery({
    queryKey: ['emergency-card', id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 40));
      const card = EMERGENCY_CARDS.find((c) => c.id === id);
      if (!card) throw new Error('Card not found');
      return card;
    },
    staleTime: 1000 * 60 * 60,
  });
};

export const useHotlines = () => {
  return useQuery({
    queryKey: ['emergency-hotlines'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 50));
      return EMERGENCY_HOTLINES;
    },
    staleTime: 1000 * 60 * 60,
  });
};

export const usePhrasebook = (category?: string) => {
  return useQuery({
    queryKey: ['phrasebook', category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 50));
      if (!category || category === 'all') {
        return PHRASEBOOK;
      }
      return PHRASEBOOK.filter((p) => p.category === category);
    },
    staleTime: 1000 * 60 * 60,
  });
};

export const useUserLocation = () => {
  return useQuery({
    queryKey: ['user-location'],
    queryFn: async () => {
      return new Promise<{ lat: number; lng: number; address: string }>((resolve) => {
        if (!navigator.geolocation) {
          resolve({
            lat: 13.7563,
            lng: 100.5018,
            address: 'ถนนข้าวสาร เขตพระนคร กรุงเทพมหานคร (Khao San Road, Bangkok)'
          });
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve({
              lat: Number(pos.coords.latitude.toFixed(5)),
              lng: Number(pos.coords.longitude.toFixed(5)),
              address: `ละติจูด ${pos.coords.latitude.toFixed(4)}, ลองจิจูด ${pos.coords.longitude.toFixed(4)}`
            });
          },
          () => {
            // Default to tourist hotspot Phuket/Bangkok if geolocation denied
            resolve({
              lat: 7.8804,
              lng: 98.3923,
              address: 'หาดป่าตอง ภูเก็ต (Patong Beach, Phuket 83150)'
            });
          },
          { timeout: 3000 }
        );
      });
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
