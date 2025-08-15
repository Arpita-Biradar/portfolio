export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-600 mb-6">Interested in working together? Let’s talk!</p>
        <a
          href="mailto:arpita@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
