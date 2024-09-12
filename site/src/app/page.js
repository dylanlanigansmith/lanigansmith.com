import Head from 'next/head'
import Image from 'next/image';
import TextFade from './components/TextFade';

import headshot_pic from '@/../public/media/me.jpg'
import LoadFade from './components/LoadFade';
import Hoverable from './components/Hoverable';
import Tooltip from './components/Tooltip';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


    {/* Header */}
    <header className="bg-[#282f25] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
      <a href="blog" className="hover:underline"></a>
        <div className='space-x-4'>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="blog" className="hover:underline">Blog</a>
          
        </div>
      </nav>
    </header>

    {/* Hero Section */}
      <main className="flex-grow bg-gray-100">
        <section id='home' className="bg-green-950 text-white text-center ">


          <div className="relative h-96 md:h-96 lg:h-[800px]">
            <Image
              src={headshot_pic}
              alt="Picture of Dylan"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
              priority={true}
              placeholder='blur'
            />
            <div className="absolute inset-0 top-0 flex items-center justify-center text-left z-auto text-gray-900">
              <LoadFade dur={0.2}>
              <div className="container absolute mx-auto inset-x-0 p-1 md:p-8 top-0 ml-2 text-center">
                <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold  text-left">Hi,</h1>
                <LoadFade dur={1}>
                <h1 className="text-2xl md:text-4xl lg:text-6xl mb-8 font-bold text-left">I'm Dylan Lanigan</h1> {/*47 47 37*/}</LoadFade>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center z-auto pb-4">
                <div className='text-center top-8 bottom-8 inset-6 mt-20 md:py-8'>
                  <a href="#contact" className="bg-green-950 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-900">Hire Me!</a>
                </div>
              </div>
              </LoadFade>
            </div>
          </div>
        </section>






        <section id="about" className="relative text-gray-800 bg-zinc-200 pb-10">
          <h2 className="text-3xl font-bold pt-2  text-center">About</h2>
        <TextFade>
          <div className="container mx-auto px-2  text-center mt-4">
            <p className=" md:text-lg mb-8 mx-2 md:mx-auto">Life-long tech enthusiast, who read <a href='https://en.wikipedia.org/wiki/Hackers:_Heroes_of_the_Computer_Revolution' className='underline text-gray-950'><i>Hackers</i></a> for their fifth grade
              book report, <a href='https://x.com/AshleyJaneLewis/status/381864418704781312' className='underline text-gray-950'>gave a talk at the first Toronto Maker Faire</a>, and placed at provincial STEM competitions before even reaching his teenage years. Spent highschool
              learning to fix everything they could get their hands on, from four hundred dollar cars to burnt out graphics cards. Nearly failed undergrad because they couldn't stop skipping <a href="https://heqco.ca/pub/ontario-learning-during-the-covid-19-pandemic-experiences-of-ontario-first-year-postsecondary-students-in-2020-21/" className='text-gray-950'>online class</a> to
              learn everything they could get their hands on about systems programming. Dislikes writing about themselves in the third person, likes writing kernel patches and reading decompiled assembly. In general any sort of interesting problem lights his brain up like a napalm-soaked christmas tree. He is currently searching for <Tooltip text='aka a job' childClass={'text-gray-950 group-hover:blur-sm'}> somewhere to chase that feeling. </Tooltip>
            </p>
          </div>
          </TextFade>
        </section>




      {/* Contact Section<Hoverable>  <p className="text-lg mb-8">yo hit me up with that job fam</p> </Hoverable>  */}
      <section id="contact" className="bg-zinc-300 py-20">
     
        <div className="container mx-auto text-center items-center text-zinc-800">
          <h2 className="text-3xl font-bold mb-4 p-1">Contact</h2>
      
        
        <TextFade dur={0.2}>
          <div className='space-x-4 items-center'>
         
          <a href="mailto:dylan@lanigansmith.com" className="bg-green-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-700">Email</a>
          <a href="https://github.com/dylanlanigansmith" className="bg-gray-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-700">Github</a>
        {/*}
          <a href="https://www.linkedin.com/in/dylanlanigansmith/" className="bg-teal-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-teal-800">Linkedin</a>*/}
          </div>
          </TextFade>
        </div>
        
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-[#282f25] text-white text-center py-4">
      <div className="container mx-auto">
        <p>&copy; 2024 DLS</p>
      </div>
    </footer>
  </div>
  );
}
