export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">Want to work together or just say hi? Reach out below.</p>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" rows="5" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  )
}