import Image from 'next/image';
import kindergarden from '../../../public/kindergarden.jpg';
import primary from '../../../public/middle.jpg';
import middle from '../../../public/primary.jpg';
import college from '../../../public/college.jpg';
import swim from '../../../public/swim.jpg';
import indepent from '../../../public/inedepent.jpg';
import cricket from '../../../public/cricket.jpg';
import schoool from '../../../public/schoool.jpg';
import schoool1 from '../../../public/schoool.jpg';





export default function SchoolPic() {
    return (
      <div>
        <div className="">
          <p className="text-center">Welcome to</p>
          <h3 className="text-5xl font-bold text-blue-500 text-center mb-[30px]">ABC HIGH SCHOOL</h3>
          <div className="flex ">
            <div className="w-1/2 ml-5 ">
              <h2 className="text-blue-500 font-bold text-[30px]">
                A community of lifelon 'g learners, responsible global citizens, and
                champions of our own success.
              </h2>
              <p className="text-blue-500 font-bold text-[25px]">
                The School is entirely independent, receiving no grant from the
                government or any other source, and is controlled by a Board of
                Governors registered as a Society under the Societies Registration
                Act of 1860.
              </p>
              
            </div>
            <div>
            <Image className='w-[590px]  h-[280px] ' src={schoool} alt='image' width={320} height={200} />
            </div>
  
            <div className="right flex"></div>
          </div>
        </div>
  
        <div className="image-text1">
          <h3 className="center">
            Working collaboratively to ensure eve'ry student achieves academically,
            socially, and emotionally.
          </h3>
        </div>
  
        {/*  cirlcle image*/}
        <h2 className='text-3xl font-bold text-blue-500 text-center mt-[30px] '>Class Section </h2>
        <div className="flex grid850 max-w-5xl mx-auto text-center " >
          
          <div className="gap-[20px] mr-5">
            <Image className='w-[200px] h-[165px] gap-[20px]  ' src={kindergarden} alt='' width={240} height={10} />
          <p>Nursery – Year II</p>
            <button>Kindergarden</button>
          </div>
          <div className='gap-[20px] mr-5'>
          <Image className='w-[200px] h-[165px] gap-[20px]  ' src={primary} alt='' width={240} height={240}/>

          <p>Year III – Year VI</p>
            <button>Junior</button>
          </div>
          <div className='mr-5'>
          <Image className='w-[200px] h-[165px]  ' src={middle} alt='' width={240} height={200} />

            <p>Year VII- Year IX</p>
          <button>Middle</button></div>
          <div>
          <Image className='w-[200px] h-[165px]  ' src={college} alt='' width={240} height={240}/>

            <p>O Level & A Level</p>
          <button>College</button></div>
        </div>
  
        {/*Events  */}
        <section className='max-w-5xl mx-auto text-center'>
          <h2 className="text-center mt-5 text-red-600 font-bold text-4xl mb-4" >Upcomming Events</h2>
  
          <div className="flex ml-4 max-w-5xl mx-auto text-center">
            <div className="mr-6">
            <h2>2nd Annual junior Section Swimming Gala</h2>
              <p className='w-[320px]  '>Event will start from 1 december 2024 to 3 december 2024</p>
              <Image className='h-[206.5px] ' src={swim} alt='image' width={320} height={200} />

              
            </div>
            <div><h2>2nd Annual junior Stage show Gala</h2>
            <p className='w-[320px]  '>Event will start from 1 december 2024 to 3 december 2024</p>
            <Image src={indepent} alt='image' width={320} height={320} />

            
            </div>
            <div className='ml-4'><h2>2nd Annual Middle Section Cricket Gala</h2>
            <p className='w-[320px]  '>Event will start from 1 december 2024 to 3 december 2024</p>
            <Image className='h-[206.5px] ' src={cricket} alt='image' width={320} height={320} />

            </div>
          </div>
        </section>
      </div>
    );
  }
  