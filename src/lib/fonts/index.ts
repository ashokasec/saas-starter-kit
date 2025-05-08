import {
  AR_One_Sans,
  Bricolage_Grotesque,
  Epilogue,
  Geist,
  Inter,
  Source_Code_Pro,
  Space_Grotesk,
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
export const epilogue = Epilogue({ subsets: ["latin"] });
export const space_grtoesk = Space_Grotesk({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
export const arOneSans = AR_One_Sans({ subsets: ["latin"] });
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
