import photo from '../../assets/Ellipse22.png'
import cup from '../../assets/cup1.png'
import img_1 from '../../assets/umber4 1.png'
import img_2 from '../../assets/UMBER1 1.png'
import img_3 from '../../assets/UMBER31.png'
import img_4 from '../../assets/umber5 1.png'
import img_5 from '../../assets/reff6 1.png'
import img_6 from '../../assets/reff5 1.png'
import img_7 from '../../assets/reff4 1.png'
import img_8 from '../../assets/reff7 1.png'
import img_9 from '../../assets/Ellipse5.png'
import img_10 from '../../assets/reff221.png'
import img_11 from '../../assets/reff21.png'

const Portfolio = () => {
  return (
    <>
      <div className='mt-[2.81rem] flex flex-col justify-center items-center'>
        <h3 style={{ lineHeight: 'normal' }} className='text-my-black font-my-font text-3xl not-italic font-bold'>Portfolio</h3>
        <p style={{ lineHeight: 'normal' }} className="text-my-black font-my-font text-2xl not-italic font-normal">99 reason to choose us</p>
      </div>
      <div className="md:flex">
        <div className="md:w-[49.63%] mt-[5.31rem]">
          <div className='relative max-w-[438px]'>
            <img src={photo} alt="this is brand photo" />
            <img className='absolute md:top-[-3.57rem] top-0 md:left-[3.5rem] hover:rotate-[-1.055deg] z-[1]' src={cup} alt="" />
            <div className=' text-my-gold text-[5.4375rem] font-my-font  not-italic font-bold leading-normal rotate-[-90deg]
                            absolute top-[9rem] left-[-1.3rem]
            '>
              <span>BRAND</span>
              <p>ING</p>
            </div>
            <div className='w-[11.5rem] xl:block hidden  absolute top-[8.75rem] left-[27.56rem]'>
              <h2 className='text-my-black font-my-font text-2xl not-italic font-bold leading-normal'>
                Umber Project
              </h2>
              <p className='text-my-black font-my-font font-normal text-2xl not-italic leading-normal'>Full Branding Identity Design Packaging
                <span className='underline flex items-center'>Click to View
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="6" viewBox="0 0 23 6" fill="none">
                    <path d="M23 3L18 0.113249V5.88675L23 3ZM0 3.5H18.5V2.5H0V3.5Z" fill="#282828" />
                  </svg>
                </span>
              </p>
            </div>
            <svg className='absolute xl:block hidden top-[9.4rem] left-[16.2rem] rotate-180' xmlns="http://www.w3.org/2000/svg" width="174" height="12" viewBox="0 0 174 12" fill="none">
              <path d="M11.3333 5.99999C11.3333 3.05447 8.94553 0.666652 6 0.666652C3.05447 0.666652 0.666672 3.05447 0.666672 5.99998C0.666671 8.9455 3.05447 11.3333 6 11.3333C8.94553 11.3333 11.3333 8.9455 11.3333 5.99999ZM174 5L6 4.99999L6 6.99999L174 7L174 5Z" fill="black" />
            </svg>
          </div>
        </div>
        <div className="md:w-[50.36%] sm:py-0 pt-5  mt-[2.12rem] ">
          <div className='flex '>
            <img className='w-[36.33%] rounded-tl-lg' src={img_1} alt="this is image" />
            <img className='w-[63.66%]' src={img_2} alt="this is image" />
          </div>
          <div className='flex'>
            <img className='w-[61.77%] rounded-bl-lg' src={img_3} alt="this is image" />
            <img className='w-[38.22%]' src={img_4} alt="this is image" />
          </div>
        </div>
      </div>

      <div className='md:flex'>
        <div className='md:w-[49.56%]  md:mt-[3.12rem]'>
          <div className='flex'>
            <img className='w-[37.08%]' src={img_5} alt="this is image" />
            <img className='w-[62.92%] rounded-tr-lg' src={img_6} alt="this is image" />
          </div>
          <div className='flex'>
            <img className='w-[65.38%]' src={img_7} alt="this is image" />
            <img className='w-[34.61%]' src={img_8} alt="this is image" />
          </div>
        </div>
        <div className='md:w-[50.43%] mt-[5.94rem] flex justify-end'>

          <div className='relative max-w-[430px] '>
            <img src={img_9} alt="this is image" />
            <img className='absolute top-[-5.94rem] md:left-[-2.98rem]' src={img_10} alt="this is image" />
            <img className='absolute top-[5.33rem] md:left-[4.5rem] left-[1rem] hover:rotate-[106.239deg] hover:left-0' src={img_11} alt="this is image" />
            <div className='absolute top-[90px] left-[-240px] xl:block hidden z-[-1]'>
              <h2 className='text-my-black font-my-font text-2xl not-italic font-bold leading-normal flex items-center'>
                Reffeca Project
                <svg xmlns="http://www.w3.org/2000/svg" width="174" height="12" viewBox="0 0 174 12" fill="none">
                  <path d="M11.3333 5.99999C11.3333 3.05447 8.94553 0.666652 6 0.666652C3.05447 0.666652 0.666672 3.05447 0.666672 5.99998C0.666671 8.9455 3.05447 11.3333 6 11.3333C8.94553 11.3333 11.3333 8.9455 11.3333 5.99999ZM174 5L6 4.99999L6 6.99999L174 7L174 5Z" fill="black" />
                </svg>
              </h2>
              <p className='text-my-black font-my-font text-2xl not-italic font-normal leading-normal'>Logo Design <br /> Packaging</p>
            </div>
            <h2 className=' xl:block hidden text-my-gold font-my-font text-[7.25rem] not-italic font-bold leading-normal 
                           absolute left-[-258px] bottom-[-47px]'>
              BRAND
            </h2>
          </div>

        </div>
      </div>
    </>
  )
}

export default Portfolio

