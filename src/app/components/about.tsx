import Image from 'next/image'
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const certificates = [
  { name: 'Mastering Mobile Programming Android', issuer: 'Skill Academy', image: '/images/sertifikat-programming-android-java.jpg?height=350&width=400' },
  { name: 'Alibaba Cloud Certified Associate', issuer: 'Alibaba', image: '/images/Alibaba-Cloud-Certified-Associate.png' },
  { name: 'Java Coding Bootcamp', issuer: 'YASKI', image: '/images/sertifikat-coding-programming-java-khanza-yaski-hospital-simrs.jpg' },
  { name: 'User Interface Fundametals', issuer: 'Hacktiv8', image: '/images/sertifikat-ui-ux-design-frontend.jpg' },
]

const socialLinks = [
  { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/arwildo' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/arwildo' },
  { name: 'Twitter', icon: <Twitter size={24} />, url: 'https://twitter.com/arwildo' },
  { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://facebook.com/profile.php?id=61563018308694' },
  { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://instagram.com/arwildoo' },
]

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk3YzJmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAyNSAwIEwgMjUgMTAwIE0gNTAgMCBMIDUwIDEwMCBNIDc1IDAgTCA3NSAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZWVmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAwIDI1IEwgMTAwIDI1IE0gMCA1MCBMIDM1IDUwIE0gMCA3NSBMIDM1IDc1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMmVlZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-32 h-32 rounded-full border-2 border-gray-900 overflow-hidden mx-auto mb-2">
            <Image src="/images/arwildo.jpeg" alt="Arwildo" width={150} height={150} className="object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">About</h2>
          <p className="text-md text-gray-600 mb-8 px-4 md:px-8 text-justify">
            I am a software engineer with 6 years of professional experience in developing software solutions for businesses, clinics, schools, hospitals, and other institutions.
            My work spans across various industries, applying innovative programming practices to deliver tailored, efficient, and scalable applications.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image src={cert.image} alt={cert.name} width={300} height={250} className="w-full h-30 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-2 text-gray-900">{cert.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="pt-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-500">
            <p>&copy; 2024 Arwildo</p>
          </div>
        </footer>
      </div>
    </section>
  )
}