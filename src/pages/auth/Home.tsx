export default function Home() {
  return (
    <div className="bg-[#0A1026] text-white min-h-screen px-6 lg:px-20 flex flex-col">

      {/* NAVBAR */}
      <header className="flex justify-between items-center py-6">
        <h2 className="text-2xl font-bold">ven<span className="text-blue-500">us</span></h2>

        <nav className="hidden lg:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Portfolio</a>
          <a href="#" className="hover:text-white transition">Blog</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Docs</a>
        </nav>

        <div className="hidden lg:flex gap-4">
          <button className="border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Sign In
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>

      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col lg:flex-row items-center justify-between flex-1 mt-10 gap-10">

        {/* LEFT TEXT CONTENT */}
        <div className="max-w-xl">
          <p className="text-green-400 text-sm mb-4">● build everything</p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Unveiling My <br />
            Professional Odyssey: <br />
            Portfolio Highlights
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            A brief introduction about myself and my professional objectives.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-10">
            Get Started
          </button>

          {/* PEOPLE + MESSAGE */}
          <div className="flex items-center gap-4">
            <div className="flex">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border-2 border-blue-600 -mr-3"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full border-2 border-blue-600 -mr-3"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                className="w-10 h-10 rounded-full border-2 border-blue-600"
                alt=""
              />
            </div>

            <div className="text-gray-400 text-sm leading-5">
              Need help? <span className="text-blue-400 cursor-pointer hover:underline">Contact our experts</span>
              <br />
              Tell us about your project
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[45%]">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
            className="rounded-2xl w-full max-w-md object-cover shadow-xl"
            alt="Business Man"
          />
        </div>

      </main>

      {/* TEMPLATE BUTTON BOTTOM RIGHT */}
      <div className="flex justify-end py-6">
        <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get This Template
        </button>
      </div>

    </div>
  );
}
