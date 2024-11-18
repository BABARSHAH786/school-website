export default async function NavBar(){
  await new Promise((resolve)=>{
    setTimeout(resolve,5000);

  })
  








  return (
    <div>
      {/* <section className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
    <p className="text-lg text-center mb-6">
      Welcome to MyApp! We are a team of passionate individuals who are dedicated to building amazing digital experiences for our users.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide top-quality products and services that help our customers achieve their goals. We believe in innovation, integrity, and customer satisfaction.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          We envision a future where technology empowers people to reach new heights. We strive to be a leader in the industry and a trusted partner to our customers.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- Team Section --> */}
  <section className="container mx-auto py-16 px-4">
    <h2 className="border-red-400 bg-blue-500 " >Tailwind Css</h2>
    <h2 className=" border-yellow-500 text-3xl font-bold text-center mb-8">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        {/* <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"> */}
        <h3 className="text-xl font-semibold">Huraira & Ali</h3>
        <p className="text-gray-500">CEO</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        {/* <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"> */}
        <h3 className="text-xl font-semibold">Abdul Hanan</h3>
        <p className="text-gray-500">CTO</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        {/* <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4"> */}
        <h3 className="text-xl font-semibold">Syed Babar Ali</h3>
        <p className="text-gray-500">Lead Developer</p>
      </div>
    </div>
  </section>

  <footer className="bg-gray-800 py-6">
    <div className="container mx-auto text-center text-white">
      <p>&copy; 2024 MyApp. All Rights Reserved.</p>
    </div>
  </footer> 
   
    </div>
  )
}