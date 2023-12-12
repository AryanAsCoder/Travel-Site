import React from 'react'
import { Link } from 'react-scroll'
import travel1 from '../../assets/travel1.jpg';
import Button from '../../layout/Button';

const Home = () => {

  const backgroundColor = `bg-gray-200`;

  return (
    <div className='min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5 '>
        <div className='flex flex-col text-center lg:text-start gap-5'>
            <h1 className='font-semibold text-5xl leading-tight'>Discover the best Destinations</h1>
            <p>
              Wish TravelWorld you can experience new travel and best tourist destinations that we have to offer
            </p>

            <div>
                <Link to='destination' >
                 <Button title="Destinations" backgroundColor={backgroundColor} />
                </Link>
            </div>
        </div>
        <div className='mt-14 lg:mt-0 w-full lg:w-4/5'>
          <img src={travel1} alt="img" />
        </div>
    </div>
  )
}

export default Home