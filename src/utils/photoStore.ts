// Utility to manage 100% genuine user profile photo and certificate with persistence in localStorage
import { useState, useEffect } from 'react';

export const OFFICIAL_PROFILE_URL = 'https://cdn.lynkid.my.id/draft-products/10-09-2026/1789043066257_3696463.jpeg?format=webp';
export const OFFICIAL_CERTIFICATE_URL = 'https://cdn.lynkid.my.id/draft-products/10-09-2026/1789049059455_8304441.jpeg?format=webp';

const PHOTO_STORAGE_KEY = 'mrf_genuine_profile_photo_v2';
const PHOTO_EVENT_NAME = 'mrf_profile_photo_updated';

const CERT_STORAGE_KEY = 'mrf_genuine_certificate_photo_v2';
const CERT_EVENT_NAME = 'mrf_certificate_photo_updated';

export const getStoredProfilePhoto = (): string | null => {
  try {
    return localStorage.getItem(PHOTO_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const saveProfilePhoto = (dataUrl: string): void => {
  try {
    localStorage.setItem(PHOTO_STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(PHOTO_EVENT_NAME, { detail: dataUrl }));
  } catch (err) {
    console.error('Error saving profile photo to storage:', err);
  }
};

export const clearStoredProfilePhoto = (): void => {
  try {
    localStorage.removeItem(PHOTO_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PHOTO_EVENT_NAME, { detail: null }));
  } catch (err) {
    console.error('Error clearing profile photo:', err);
  }
};

export const useProfilePhoto = (fallbackDefault: string = OFFICIAL_PROFILE_URL) => {
  const [photo, setPhoto] = useState<string>(() => {
    const stored = getStoredProfilePhoto();
    return stored || fallbackDefault;
  });

  const [isCustomOriginal, setIsCustomOriginal] = useState<boolean>(() => {
    return !!getStoredProfilePhoto();
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      if (customEvent.detail) {
        setPhoto(customEvent.detail);
        setIsCustomOriginal(true);
      } else {
        const stored = getStoredProfilePhoto();
        setPhoto(stored || fallbackDefault);
        setIsCustomOriginal(!!stored);
      }
    };

    window.addEventListener(PHOTO_EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(PHOTO_EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [fallbackDefault]);

  return {
    photo,
    isCustomOriginal,
    savePhoto: saveProfilePhoto,
    clearPhoto: clearStoredProfilePhoto,
  };
};

// ================= CERTIFICATE STORAGE =================
export const getStoredCertificatePhoto = (): string | null => {
  try {
    return localStorage.getItem(CERT_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const saveCertificatePhoto = (dataUrl: string): void => {
  try {
    localStorage.setItem(CERT_STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(CERT_EVENT_NAME, { detail: dataUrl }));
  } catch (err) {
    console.error('Error saving certificate photo to storage:', err);
  }
};

export const clearStoredCertificatePhoto = (): void => {
  try {
    localStorage.removeItem(CERT_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(CERT_EVENT_NAME, { detail: null }));
  } catch (err) {
    console.error('Error clearing certificate photo:', err);
  }
};

export const useCertificatePhoto = (fallbackDefault: string = OFFICIAL_CERTIFICATE_URL) => {
  const [certPhoto, setCertPhoto] = useState<string>(() => {
    const stored = getStoredCertificatePhoto();
    return stored || fallbackDefault;
  });

  const [isCustomCert, setIsCustomCert] = useState<boolean>(() => {
    return !!getStoredCertificatePhoto();
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      if (customEvent.detail) {
        setCertPhoto(customEvent.detail);
        setIsCustomCert(true);
      } else {
        const stored = getStoredCertificatePhoto();
        setCertPhoto(stored || fallbackDefault);
        setIsCustomCert(!!stored);
      }
    };

    window.addEventListener(CERT_EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(CERT_EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [fallbackDefault]);

  return {
    certPhoto,
    isCustomCert,
    saveCertPhoto: saveCertificatePhoto,
    resetCertPhoto: clearStoredCertificatePhoto,
  };
};

