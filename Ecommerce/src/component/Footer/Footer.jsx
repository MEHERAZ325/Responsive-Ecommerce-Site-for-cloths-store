import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner from '../../assets/website/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
};

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  

const Footer = () => {
  return (
    <div
    style={BannerImg}
     className='text-white mb-20'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-44 pt-5'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1
                className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'
                >
                    <img src={footerLogo} 
                    
                    className='max-w-[50px]'/>
                    Shopsy</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis. Nihil expedita illo nostrum! Nisi cupiditate aliquid enim 
                 tempora eaque cumque, facere cum illum quos veniam officia, veritatis porro molestias.</p>
            </div>
            {/* Footer Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify md-3'>Links</h1>
                    </div>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link) => (
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

              {/* social links */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className='text-3xl'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl'/>
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-3xl'/>
                    </a>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaLocationArrow/>
                        London, Uk
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt/>
                        +91 123456789
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer