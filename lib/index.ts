export const BASE_URL =
  typeof window === "undefined"
    ? "https://siwa.dipperlab.com"
    : process.env.NEXT_PUBLIC_BASE_URL || "https://siwa.dipperlab.com";

export const ROUTES = {
    home: '/',
    about: '/#about',
    appDownload: 'https://play.google.com/store/search?q=smart%20indigenous%20weather%20app',
    
    features: '/#features',
    impact: '/#impact',
    contact: '/#contact-us',
    waitingList: '/#contact-us',
}