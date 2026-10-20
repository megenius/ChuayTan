import { useQuery } from '@tanstack/react-query';
import { EMERGENCY_CARDS, EMERGENCY_HOTLINES, PHRASEBOOK } from '../data/emergencyData';
import { EmergencyCategory, Language } from '../types/emergency';

export const useEmergencyCards = () => {
  return useQuery({
    queryKey: ['emergency-cards'],
    queryFn: () => EMERGENCY_CARDS,
    staleTime: 1000 * 60 * 60, // 1 hour cached
  });
};

export const useEmergencyCard = (id: EmergencyCategory) => {
  return useQuery({
    queryKey: ['emergency-card', id],
    queryFn: () => {
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
    queryFn: () => EMERGENCY_HOTLINES,
    staleTime: 1000 * 60 * 60,
  });
};

export const usePhrasebook = (category?: string) => {
  return useQuery({
    queryKey: ['phrasebook', category],
    queryFn: () => {
      if (!category || category === 'all') {
        return PHRASEBOOK;
      }
      return PHRASEBOOK.filter((p) => p.category === category);
    },
    staleTime: 1000 * 60 * 60,
  });
};

export const LOCATION_UNKNOWN_TH = 'ไม่ทราบตำแหน่ง ถามคนข้างๆ หรืออ่านป้ายใกล้ตัว';

export const useUserLocation = () => {
  return useQuery({
    queryKey: ['user-location'],
    queryFn: () =>
      new Promise<{ lat: number; lng: number; address: string } | null>((resolve) => {
        if (!navigator.geolocation) {
          resolve(null);
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
            // Permission denied or failed: never show a fabricated location
            resolve(null);
          },
          { timeout: 3000 }
        );
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
