import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: 'Mahmoud .N',
  description:
    'Portfolio of Mahmoud Abdelnasser — Product Designer & UI/UX Designer building fast, modern digital products.',
  icons: { icon: '/assets/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise"></div>
        <Navbar />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
