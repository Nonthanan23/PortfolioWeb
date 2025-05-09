export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/75 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between text-sm text-slate-200">
        <div className="font-bold">Nonthanan</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>
    </header>
  )
}