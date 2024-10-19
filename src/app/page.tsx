import LandingPage from './components/landing-page'
import ProductsSection from './components/products-section';
import Customer from './components/customer'
import About from './components/about'
import FlyingNav from './components/flying-nav';

export const metadata = {
  title: 'Arwildo',
  description: 'Jasa Modifikasi dan Tambah Fitur SIMKes Khanza. Dipercaya oleh Rumah Sakit, Klinik, Apotek, dan Praktik Dokter di Seluruh Indonesia',
}

export default function Home() {
  return (
    <main>
      <FlyingNav />
      <section id="landing">
        <LandingPage />
      </section>
      <section id="products">
        <ProductsSection />
      </section>
      <section id="customer">
        <Customer />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  )
}