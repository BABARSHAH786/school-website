export default function NavBar(){
  return (
    <div>
    

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="bg-red-200 border-8 p-4 text-2xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-600">We d love to hear from you! Please fill out the form below to get in touch.</p>
            </div>

            <div className="mt-10">
                <div className="max-w-xl mx-auto">
                    <form action="#" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            {/* <input type="email" id="email" name="email" placeholder="Enter your email"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> */}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                           
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number (optional)</label>
                            
                        </div>

                        <div className="flex items-center justify-between">
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-gray-600 py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
        </div>
    </footer>
     
   
    </div>
  )
}
