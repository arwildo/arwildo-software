import Image from 'next/image'
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const certificates = [
  { name: 'Mastering Mobile Programming Android', issuer: 'Skill Academy', skill: 'Java', image: '/images/sertifikat-programming-android-java.jpg?height=350&width=400' },
  { name: 'Advanced JavaScript', issuer: 'Udacity', skill: 'JavaScript', image: '/placeholder.svg?height=150&width=200' },
  { name: 'User Interface Fundametals', issuer: 'Hacktiv8', skill: 'UI/UX', image: '/images/sertifikat-ui-ux-design-frontend.jpg' },
  { name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', skill: 'Web Dev', image: '/placeholder.svg?height=150&width=200' },
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
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Tentang</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm a passionate UI developer with a focus on creating accessible and performant web applications. 
            With years of experience in React and modern web technologies, I strive to build intuitive and 
            beautiful user interfaces that make a difference.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image src={cert.image} alt={cert.name} width={200} height={150} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {cert.skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="border-t border-gray-200 pt-8">
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
            <p>&copy; 2024 Arwildo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}