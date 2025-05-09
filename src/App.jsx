import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      <Header />
      <main className="scroll-smooth">
        <section id="home" className="min-h-screen flex items-center"><Home /></section>
        <section id="projects" className="py-28"><Projects /></section>
        <section id="about" className="py-28"><About /></section>
        <section id="contact" className="py-28"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}




