import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


    {/* Header */}
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Dylan Lanigan-Smith</div>
        <div>
          <a href="#about" className="mr-4 hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>

    {/* Hero Section */}
    <main className="flex-grow bg-gray-100">
      <section className="bg-blue-900 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Hi!</h1>
          <p className="text-lg mb-8">Still working on this!</p>
          <a href="#contact" className="bg-white text-blue-900 py-2 px-6 rounded-full font-semibold hover:bg-gray-200">Hire Me!</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center text-gray-800">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-lg mb-8">English major who nearly failed undergrad because they couldn't stop skipping class to learn everything to know about systems programming</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-20">
        <div className="container mx-auto text-center text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-8">yo hit me up with that job fam</p>
          <div className='space-x-2'>
          <a href="mailto:dylan@lanigansmith.com" className="bg-blue-900 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700">Email</a>
          <a href="https://github.com/dylanlanigansmith" className="bg-gray-900 text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-700">Github</a>
          </div>
         
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p>&copy; 2024 DLS</p>
      </div>
    </footer>
  </div>
  );
}
