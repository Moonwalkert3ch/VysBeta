import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-brandBlue">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-brandRed to-brandBlue text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to VYS</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A Virtual Yard Sale platform to explore secondhand items like never before — in 3D and VR.
        </p>
      </section>

      {/* 3D Model Section */}
      <section className="p-6 flex justify-center">
        <div className="w-full max-w-3xl aspect-video">
          <iframe
            title="3d Glasses"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://sketchfab.com/models/0eeb672fdcfc454cae92452f611fb541/embed"
            />

        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-brandRed">The Problem</h2>
        <p className="mb-8">
          Many buyers and sellers in their 20s–30s are frustrated with not being able to fully inspect items online before buying. 
          Repetitive requests for more photos or videos often waste time and discourage both sides.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-brandBlue">Our Solution</h2>
        <p>
          VYS allows sellers to turn item photos into interactive 3D models with VR viewing and AI-enhanced descriptions, making it easy for buyers to assess condition, scale, and fit with confidence.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-brandRed text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to explore items in 3D?</h3>
        <button className="bg-white text-brandRed px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
