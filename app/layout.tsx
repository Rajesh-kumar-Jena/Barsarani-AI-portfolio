import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Barsarani Nayak | Generative AI & Agentic AI Developer",
  description:
    "Portfolio of Barsarani Nayak — Generative AI and Agentic AI Developer building LLM applications, RAG pipelines, and multi-agent systems.",
  keywords: ["Barsarani Nayak", "Generative AI Developer", "Agentic AI", "RAG", "LangGraph", "LangChain", "Python", "FastAPI"],
  openGraph: {
    title: "Barsarani Nayak | Generative AI & Agentic AI Developer",
    description: "Building grounded RAG pipelines, multi-agent workflows, and reliable LLM-powered applications.",
    type: "website",
    images: ["/images/profile-cutout.png"],
  },
  icons: { icon: "/images/profile-cutout.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
