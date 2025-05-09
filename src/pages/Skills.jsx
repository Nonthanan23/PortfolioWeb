export default function Skills() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <p className="mb-4">These are the technologies and tools I'm proficient in.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-6 rounded shadow-sm">HTML</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">CSS</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">JavaScript</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">React</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">TypeScript</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">Node.js</div>
        <div className="bg-gray-100 p-6 rounded shadow-sm">REST APIs</div>
      </div>
    </section>
  )
}