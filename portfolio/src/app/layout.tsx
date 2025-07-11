import '../styles/globals.css';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { ParticlesBackground  } from '@/components/ui/ParticlesBackground';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/jpfav.png" sizes="any" />
      </head>
      <body>
        <ParticlesBackground  />
        <Navbar />
        <main className="pt-16"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}