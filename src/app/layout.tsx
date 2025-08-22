import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ezenwa.dev | Portfolio",
  description: "Portfolio of Okechukwu Ezenwa Prince - Fullstack Developer",
  keywords: ["Portfolio", "Next.js", "Fullstack", "React", "Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white font-sans antialiased">
        {/* Navbar fixed at the top */}
        <Navbar />

        {/* Main content */}
        <main className="pt-20 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12 border-t border-gray-800">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">Ezenwa.dev</span> | Built with ❤️ using Next.js
          </p>
        </footer>
      </body>
    </html>
  );
}
