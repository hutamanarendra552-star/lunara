export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Lunara";
export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "/lunara-logo.jpg";


// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

/* Lunara Brand Information */
export const LUNARA_TAGLINE = "Tempat Kamu Didengar";
export const LUNARA_DESCRIPTION = "Lunara adalah ruang aman digital, tempat setiap suara didengar, setiap pengalaman dihargai, dan setiap individu merasa diterima tanpa syarat.";

export const LUNARA_LETTERS = [
  { letter: "L", meaning: "Listen", description: "Kami mendengar suara kamu, tanpa menghakimi." },
  { letter: "U", meaning: "Understand", description: "Bukan sekadar mendengar, tetapi mengerti. Kami hadir untuk memahami konteks, rasa, luka, dan keberanian setiap orang." },
  { letter: "N", meaning: "Nurture", description: "Memberikan penguatan, kehangatan, edukasi, serta dukungan." },
  { letter: "A", meaning: "And", description: "Menyatukan seluruh nilai bersama." },
  { letter: "R", meaning: "Restore", description: "Kami mendukung proses pulih secara perlahan, tidak terburu-buru." },
  { letter: "A", meaning: "All", description: "Semua orang diterima, aman, dan layak mendapat perlindungan tanpa pengecualian." },
];

export const LUNARA_AMBASSADORS = [
  { name: "Julia Kasmir", phone: "+62 831-5379-7905", role: "Ambassador" },
  { name: "Hutama Narendra Kusnadi", phone: "+62 816-3224-1679", role: "Ambassador" },
];

export const LUNARA_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScg1CTWs2sKd50q5Bv3ps7Epa4YhhfugD4vBbxZs0YYKg5TDQ/viewform";
