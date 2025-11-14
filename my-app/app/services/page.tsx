export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="text-gray-600 max-w-2xl">
        We provide a wide range of professional services designed to help you
        achieve your goals. Explore our offerings below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* SERVICE CARD 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
          <p className="text-gray-600 mb-4">
            Modern full-stack development using React, Next.js, Node.js, and
            scalable cloud solutions.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* SERVICE CARD 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">UI/UX Design</h2>
          <p className="text-gray-600 mb-4">
            Clean, user-friendly interfaces with a focus on accessibility and
            modern design trends.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* SERVICE CARD 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Mobile Development</h2>
          <p className="text-gray-600 mb-4">
            Native & cross-platform apps built with React Native and Expo.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* SERVICE CARD 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Data Analytics</h2>
          <p className="text-gray-600 mb-4">
            Professional dashboards, business intelligence, and data insights.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* SERVICE CARD 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Cloud Architecture</h2>
          <p className="text-gray-600 mb-4">
            Scalable, secure cloud solutions using AWS, Azure, or Google Cloud.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* SERVICE CARD 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Automation & AI</h2>
          <p className="text-gray-600 mb-4">
            Workflow automation, AI integration, and custom ML models.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
