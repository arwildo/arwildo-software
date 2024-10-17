import LandingPage from './components/landing-page'
import ProductsSection from './components/products-section';
import Customer from './components/customer'
import About from './components/about'

export const metadata = {
  title: 'Arwildo',
  description: 'Jasa Modifikasi dan Tambah Fitur SIMKes Khanza. Dipercaya oleh Rumah Sakit, Klinik, Apotek, dan Praktik Dokter di Seluruh Indonesia',
}

export default function Home() {
  return (
    <main>
      <LandingPage />
      <ProductsSection />
      <Customer />
      <About />
    </main>
  )
}