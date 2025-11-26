// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function   Home() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
//  alert(JSON.stringify(user));
  const isLoggedIn = !!user;

  return (
    <div className="bg-[#0A1026] text-white min-h-screen px-6 lg:px-20 flex flex-col">
      {/* NAVBAR */}
      <header className="flex justify-between items-center py-6">
        <h2 className="text-2xl font-bold">
          ven<span className="text-blue-500">us</span>
        </h2>

        <nav className="hidden lg:flex gap-8 text-gray-300">
          <a className="hover:text-white transition cursor-pointer">Home</a>
          <a className="hover:text-white transition cursor-pointer">About</a>
          <a className="hover:text-white transition cursor-pointer">Services</a>
          <a className="hover:text-white transition cursor-pointer">
            Portfolio
          </a>
          <a className="hover:text-white transition cursor-pointer">Blog</a>
          <a className="hover:text-white transition cursor-pointer">Contact</a>
          <a className="hover:text-white transition cursor-pointer">Docs</a>
        </nav>

        {/* 🔥 AUTH BUTTONS LOGIC */}
        <div className="flex gap-4">
          {!isLoggedIn ? (
            <>
              <button
                className="border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>

              <button
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col lg:flex-row items-center justify-between flex-1 mt-10 gap-10">
        <div className="max-w-xl">
          <p className="text-green-400 text-sm mb-4">● build everything</p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Unveiling My <br />
            Professional Odyssey: <br />
            Portfolio Highlights
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Discover work that defines vision, creativity, and technological
            expertise.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-10">
            Get Started
          </button>

          <div className="flex items-center gap-4">
            <div className="flex">
              <img
                src="https://i.pravatar.cc/40?img=21"
                className="w-10 h-10 rounded-full border-2 border-blue-600 -mr-3"
              />
              <img
                src="https://i.pravatar.cc/40?img=14"
                className="w-10 h-10 rounded-full border-2 border-blue-600 -mr-3"
              />
              <img
                src="https://i.pravatar.cc/40?img=5"
                className="w-10 h-10 rounded-full border-2 border-blue-600"
              />
            </div>

            <div className="text-gray-400 text-sm leading-5">
              Need help?{' '}
              <span className="text-blue-400 cursor-pointer hover:underline">
                Contact our experts
              </span>
            </div>
          </div>
        </div>

        {/* NEW LIVE IMAGE */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[45%]">
          <img
            src={user  &&  user?.image ? user?.image  : "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" } //"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            className="rounded-2xl w-full max-w-md object-cover shadow-xl"
            alt="Working Professional"
          />
        </div>
      </main>

      {/* 🔻 EXTRA SECTION BELOW (scrollable) */}
      <section className="mt-20 mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          More Content Coming Soon 🚀
        </h3>
        <p className="text-gray-400">
          Scroll down to explore additional features & sections.
        </p>
      </section>
    </div>
  );
}
