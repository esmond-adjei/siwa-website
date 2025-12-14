export const BASE_URL =
  typeof window === "undefined"
    ? "https://siwa.dipperlab.com"
    : process.env.NEXT_PUBLIC_BASE_URL || "https://siwa.dipperlab.com";

export const ROUTES = {
    home: '/',
    about: '#about',
    waitingList: '/waiting-list',

    team: '#team',
    contact: '#contact-us',
}