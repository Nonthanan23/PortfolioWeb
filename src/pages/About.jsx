export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          I’m a developer based in Stockholm, currently studying Frontend Development at <span className="text-white font-medium">KYH Yrkeshögskola</span> until 2025.
          I’m passionate about creating simple, clean, and user-friendly web experiences and learning new things.
        </p>
        <p>
          I enjoy learning by doing — whether it’s building projects, solving problems, or figuring out how to make things more intuitive.
          My background is hands-on, and I like to focus on structure, clarity, and small improvements every day.
        </p>
        <p>
        Outside of coding, I like to improve myself by reading and working out, enjoying small things like playing with my cat, eating good food playing video games or watching movies, and spending time with my family that help me recharge and stay balanced.
        </p>
        <p className="pt-2 text-sm text-slate-500">
          Tech Stack: HTML · CSS · JavaScript · TypeScript · React · Node.js · Git · REST APIs
        </p>
      </div>
    </div>
  )
}