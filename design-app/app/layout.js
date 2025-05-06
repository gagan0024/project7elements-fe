import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers.js";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Design Drafters",
  description: "Created by Noseberry Pvt. Ltd.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
      <Toaster
          toastOptions={{
            duration: 3000,
            // className: "h-16",
          }}
          position="top-right"
          reverseOrder={false}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
