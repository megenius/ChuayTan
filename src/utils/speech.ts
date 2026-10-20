import { Language } from '../types/emergency';

const LANG_CODES: Record<Language, string> = {
  EN: 'en-US',
  中文: 'zh-CN',
  RU: 'ru-RU',
  DE: 'de-DE',
  JA: 'ja-JP',
};

export const speakText = (text: string, lang: Language = 'EN'): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve(false);
      return;
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = LANG_CODES[lang] || 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity in emergencies
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onend = () => {
      resolve(true);
    };

    utterance.onerror = () => {
      resolve(false);
    };

    window.speechSynthesis.speak(utterance);
  });
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
