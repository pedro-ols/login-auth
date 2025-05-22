import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Login-Auth",
  description: "Projeto Front-end realizado em sala para desenvolver a capacidade de conectar uma aplicação full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
