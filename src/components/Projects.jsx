export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h4 className="font-semibold mb-2">Portfolio Website</h4>
            <p className="text-gray-600">A modern responsive personal portfolio site built with React and Tailwind.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h4 className="font-semibold mb-2">Doctor Appointment System</h4>
            <p className="text-gray-600">A full-stack appointment booking platform using MERN stack.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h4 className="font-semibold mb-2">Weather App</h4>
            <p className="text-gray-600">A clean UI design for real-time weather updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
