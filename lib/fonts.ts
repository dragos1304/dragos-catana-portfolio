import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans-src", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-display-src", display: "swap" });
const accent = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", style: ["normal", "italic"], variable: "--font-accent-src", display: "swap" });

export const fontClasses = `${sans.variable} ${display.variable} ${accent.variable}`;
