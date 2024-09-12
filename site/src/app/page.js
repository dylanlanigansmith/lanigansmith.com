import Head from 'next/head'
import Image from 'next/image';
import headshot_pic from '@/../public/media/me.jpg'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


    {/* Header */}
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
      
        <div className='space-x-4'>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="blog" className="hover:underline">Blog</a>
        </div>
      </nav>
    </header>

    {/* Hero Section */}
      <main className="flex-grow bg-gray-100">
        <section id='home' className="bg-blue-950 text-white text-center ">


          <div className="relative h-96 md:h-96 lg:h-[800px]">
            <Image
              src={headshot_pic}
              alt="Picture of Dylan"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
            />
            <div className="absolute inset-0 top-0 flex items-center justify-center text-left z-auto text-gray-900">
              <div className="container absolute mx-auto inset-x-0 p-1 md:p-8 top-0 ml-2 text-center">
                <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold  text-left">Hi,</h1>
                <h1 className="text-2xl md:text-4xl lg:text-6xl mb-8 font-bold text-left">I'm Dylan Lanigan</h1> {/*47 47 37*/}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center z-auto pb-4">
                <div className='text-center top-8 bottom-8 inset-6 mt-20 md:py-8'>
                  <a href="#contact" className="bg-green-900 text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-200">Hire Me!</a>
                </div>
              </div>
            </div>
          </div>
        </section>






        <section id="about" className="relative text-gray-800">
          <h2 className="text-3xl font-bold pt-2  text-center">About</h2>
          <div className="container mx-auto px-2  text-center mt-4">
            <p className=" md:text-lg mb-8">Life-long tech enthusiast, who read <a href='https://en.wikipedia.org/wiki/Hackers:_Heroes_of_the_Computer_Revolution' className='underline text-gray-950'><i>Hackers</i></a> for their fifth grade
              book report, <a href='https://x.com/AshleyJaneLewis/status/381864418704781312' className='underline text-gray-950'>gave a talk at the first Toronto Maker Faire</a>, and placed at provincial robotics and STEM competitions before even reaching his teenage years. Spent highschool
              learning to fix everything they could get their hands on, from four hundred dollar cars to burnt out graphics cards. Nearly failed undergrad because they couldn't stop skipping <a href="https://heqco.ca/pub/ontario-learning-during-the-covid-19-pandemic-experiences-of-ontario-first-year-postsecondary-students-in-2020-21/" className='text-gray-950'>online class</a> to
              learn everything they could get their hands on about systems programming. Dislikes writing about themselves in the third person, likes writing kernel patches and reading decompiled assembly. In general any sort of interesting problem lights his brain up like a napalm-soaked christmas tree. He is currently searching for somewhere to chase that feeling.
            </p>
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
