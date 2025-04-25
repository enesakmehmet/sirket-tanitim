export default function TeamSection() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Ekibimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-1 text-gray-900">Ahmet Yılmaz</h3>
          <p className="text-gray-700">Full Stack Developer</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-1 text-gray-900">Elif Demir</h3>
          <p className="text-gray-700">UI/UX Designer</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-1 text-gray-900">Mehmet Kaya</h3>
          <p className="text-gray-700">Frontend Developer</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-1 text-gray-900">Zeynep Aksoy</h3>
          <p className="text-gray-700">SEO Specialist</p>
        </div>
      </div>
    </section>
  );
}
