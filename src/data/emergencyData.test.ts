import { test, expect } from 'bun:test';
import { EMERGENCY_CARDS, EMERGENCY_HOTLINES } from './emergencyData';

const allDonts = EMERGENCY_CARDS.flatMap((c) => c.dontsTh);

test('snake card forbids tourniquet without "too tight" wording', () => {
  expect(allDonts.some((d) => d === 'ห้ามขันชะเนาะหรือรัดแน่น')).toBe(true);
  expect(allDonts.some((d) => d.includes('แน่นเกินไป'))).toBe(false);
});

test('heat stroke card drops the cold-water-immersion dont line', () => {
  expect(allDonts.some((d) => d.includes('น้ำแข็งเย็นจัดแช่ทั้งตัว'))).toBe(false);
});

test('1155 lists no fixed interpreter languages, states staff speak foreign languages', () => {
  const tp = EMERGENCY_HOTLINES.find((h) => h.number === '1155');
  expect(tp).toBeDefined();
  expect(tp!.descriptionTh.includes('Staff speak foreign languages')).toBe(true);
  expect(tp!.descriptionTh.includes('รัสเซีย')).toBe(false);
});
