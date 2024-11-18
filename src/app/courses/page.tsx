import Image from "next/image"
import OIP from '../../../public/OIP.jpg'

export default function NavBar(){
  return (
    <div>
      
   <h1 className="bg-bg-gray-100 ">Welcome to course Page</h1>
        <title>Website Templates</title>
        <meta name="description" content="Explore our website templates" />
        <link rel="icon" href="/favicon.ico" />

      <main className="bg-gray-100 min-h-screen">
        {/* Header Section */}
        <header className="bg-blue-600 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white text-center">Explore Our Website Templates</h1>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Choose the perfect design for your website</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our templates are designed to be visually appealing and easy to customize.
            </p>
          </div>
        </section>

        {/* Example Templates Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Website Template Examples</h3>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Template 1 */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <Image src={OIP} alt="solar" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900">Modern Business</h4>
                  <p className="mt-2 text-gray-600">
                    A clean and sleek template perfect for professional businesses.
                  </p>
                </div>
              </div>

              {/* Template 2 */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                                <Image src={OIP} alt="solar" height={350} width={350} className="w-full h-48 object-cover" />

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900">Creative Portfolio</h4>
                  <p className="mt-2 text-gray-600">
                    Ideal for designers, artists, and creatives to showcase their work.
                  </p>
                </div>
              </div>

              {/* Template 3 */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                                                <Image src={OIP} alt="solar" height={350} width={350} className="w-full h-48 object-cover" />

  
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900">E-commerce Store</h4>
                  <p className="mt-2 text-gray-600">
                    A template for online stores, fully optimized for selling products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 mt-12">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}