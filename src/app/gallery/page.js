"use client";
import { useState } from "react";
import Image from 'next/image';
import wowlogo from '@/app/assets/images/wowlogo.png';
import col1 from '@/app/assets/images/col1.png';
import color from '@/app/assets/images/color.png';
import hstyle1 from '@/app/assets/images/hstyle1.png';
import hstyle3 from '@/app/assets/images/hstyle3.png';
import hstylebrown from '@/app/assets/images/hstylebrown.png';
import hstyle2 from '@/app/assets/images/hstyle2.png';
import bluehair from '@/app/assets/images/bluehair.png';



export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">

     




      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center pt-20">
        
        <h1 className="text-3xl font-bold text-black mb-"
              style={{ fontFamily: 'Cinzel, serif' }} >
              GALLERY – DISCOVER THE WOW TRANSFORMATION
        </h1>
        <br></br>
        <div className="flex justify-center">
            <p className="text-black mb-8 px-10 text-gray-600">
                  Step into the world of beauty, style, and grooming through our Wow Unisex Salon Gallery! Explore the transformations we create and get inspired for your next look. From bold hair makeovers to flawless skin treatments, our gallery showcases the artistry, skill, and passion we put into every service.
            </p>
        </div>
        </section>






        {/* Services in Action */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold  text-center text-black mb-4"
        style={{ fontFamily: 'Cinzel, serif' }} >Our Services in Action</h2> <br></br><br></br>
          
          
          <div className="flex items-center justify-center my-4">
                <div className="w-10 border-t border-black"></div>
                <h3 className="mx-4 text-black text-xl text-center uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                    Haircuts & Styling
                </h3>
                <div className="w-10 border-t border-black"></div>
          </div>


          <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative group">
                    <Image
                      src={hstyle3}
                      alt="Haircut 3"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"/>
                    
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>


                  <div className="relative group">
                    <Image
                      src={hstylebrown}
                      alt="Haircut 1"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>


                  <div className="relative group">
                    <Image
                      src={hstyle1}
                      alt="Haircut 2"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>
                </div>
              </div>

        </section>
<br></br>





        {/* Color Creations */}
        <section className="mb-12">
          
          <div className="flex items-center justify-center my-8">
            <div className="w-10 border-t border-black"></div>
            <h3 className="mx-4 text-black text-xl text-center uppercase " style={{ fontFamily: 'Cinzel, serif' }}>
                  Color Creations
            </h3>
            <div className="w-10 border-t border-black"></div>
          </div>

            
          <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative group">
                    <Image
                      src={bluehair}
                      alt="Haircut 3"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={hstyle2}
                      alt="Haircut 1"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={color}
                      alt="Haircut 2"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>
                </div>
              </div>   
        </section>





        {/* The WOW Experience */}
        <section>
         
          <div className="flex items-center justify-center my-8">
            <div className="w-10 border-t border-black"></div>
            <h3 className="mx-4 text-black text-xl text-center uppercase " style={{ fontFamily: 'Cinzel, serif' }}>
            The WOW Experience
            </h3>
            <div className="w-10 border-t border-black"></div>
            </div>


        <div className="flex justify-center">
           <p className="text-black mb-8 px-10 text-gray-600">
                Want to see the process in action? Watch our exclusive videos that take you behind the scenes of our most popular services. From the initial consultation to the final reveal, experience the Wow journey with us.
          </p>
       </div>
       

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">


          <div className="w-full h-64 rounded-lg overflow-hidden transition-all duration-300">
                  <video
                    className={`w-full h-64 rounded-lg transition-all duration-300 ${
                      isHovered ? "shadow-xl scale-105" : "shadow-none scale-100"
                    }`}
                    controls
                    onMouseEnter={(e) => {
                      e.target.play();
                      setIsHovered(true);
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      setIsHovered(false);
                    }}
                  >
                    <source src="/video/video3.mp4" type="video/mp4" />
                  </video>
            </div>




            <div className="w-full h-64 rounded-lg overflow-hidden transition-all duration-300">
                  <video
                    className={`w-full h-64 rounded-lg transition-all duration-300 ${
                      isHovered ? "shadow-xl scale-105" : "shadow-none scale-100"
                    }`}
                    controls
                    onMouseEnter={(e) => {
                      e.target.play();
                      setIsHovered(true);
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      setIsHovered(false);
                    }}
                  >
                    <source src="/video/video1.mp4" type="video/mp4" />
                  </video>
            </div>




            <div className="w-full h-64 rounded-lg overflow-hidden transition-all duration-300">
                  <video
                    className={`w-full h-64 rounded-lg transition-all duration-300 ${
                      isHovered ? "shadow-xl scale-105" : "shadow-none scale-100"
                    }`}
                    controls
                    onMouseEnter={(e) => {
                      e.target.play();
                      setIsHovered(true);
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      setIsHovered(false);
                    }}
                  >
                    <source src="/video/video2.mp4" type="video/mp4" />
                  </video>
            </div>
            
          </div>
        </section>
      </main>




    </div>
  );
}