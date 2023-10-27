import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4 text-white'>
      
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>


        <div className='pb-8 mt-10'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Contact me with below form</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/dba60f87-0b38-4d43-aa43-c1ceff203884' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 focus:outline-none border-2 rounded-md text-white bg-transparent'></input>

            <input type='email' name='email' placeholder='Enter your email' className='p-2 my-4 focus:outline-none border-2 rounded-md text-white bg-transparent'></input>

            <textarea name='message' rows={10} placeholder='Enter your message' className='p-2 focus:outline-none border-2 rounded-md text-white bg-transparent'></textarea>

            <button className='flex items-center justify-center p-2 my-2 mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-4 hover:scale-105 duration-300'>Send</button>
          </form>
        </div>


      </div>

    </div>
  )
}

export default Contact;