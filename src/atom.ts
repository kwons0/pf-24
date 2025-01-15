import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: true,
})

export const isModalOpen = atom({
    key: "isModalOpen",
    default: false,
})