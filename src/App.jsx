import Header from './components/Header'
import Footer from './components/Footer'
import DotNav from './components/DotNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      <Header />
      <DotNav />
      <main className="scroll-smooth">
      <section id="home" className="min-h-screen flex items-center py-32" data-aos="fade-up"><Home /></section>
        <section id="projects" className="min-h-screen py-32" data-aos="fade-up"><Projects /></section>
        <section id="about" className="min-h-screen py-32" data-aos="fade-up"><About /></section>
        <section id="contact" className="min-h-screen py-32" data-aos="fade-up"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}




