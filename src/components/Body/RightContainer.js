import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Card from '../common/Card';
import Projects from './Projects';
import ProgressiveCard from './ProgressiveCard';

library.add(fab);

const RightContainer = () => {
  
    const image = 'https://ez-snippet.vercel.app/images/cover.jpeg';

    const projects = [
        {title: "Discord Clone", desc:"Next.js 13, React Hook Form, Zustand, Shadcn, Typescript", img:"https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75",href:'/'},
        {title: "Spotify Clone", desc:"Next.js 13, React Hook Form, Zustand, Radix UI, Typescript, Tailwind CSS", img:"https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Fspotify-clone.gif&w=1920&q=75", href:"https://spotify-gamma-kohl.vercel.app/"},
        {title: "Amazon Clone", desc:"NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS", img:"https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Famazon-clone.jpeg&w=1920&q=75",href:'/'},
        {title: "NetflixGPT", desc:"ReactJS, Firebase, Tailwind CSS", img:"https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940", href:'https://netflix-six-ebon.vercel.app/browse'},
    ];

    const web3Projects = [
        {title: "Solidity", progress:'80', days:"1 day ago",codeLines:"1,128", img:"https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&w=2048&q=75"},
        {title: "Hardhat", progress:'70', days:"1 day ago",codeLines:"1,128", img:"https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fweb3%2Fhardhat.jpeg&w=2048&q=75"},
        {title: "Metamask", progress:'60', days:"1 day ago",codeLines:"1,128", img:"https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fweb3%2Fmetamask.webp&w=2048&q=75"},
        {title: "Chainlink", progress:'85', days:"1 day ago",codeLines:"1,128", img:"https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fweb3%2Fchainlink.png&w=2048&q=75"},
        {title: "OpenZeppelin", progress:'50', days:"1 day ago",codeLines:"1,128", img:"https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fweb3%2Fopenzeppelin.png&w=2048&q=75"},
    ];

    return (
      <div>
        <div className={`w-full  bg-cover bg-no-repeat bg-[url('https://ez-snippet.vercel.app/images/cover.jpeg')]`}>
            <div className='flex justify-center gap-2 md:gap-10 md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md'>
                <div className=''>
                    <img className='rounded-full border-4 object-cover' width={120} src='https://avatars.githubusercontent.com/u/109432749?v=4'/>
                </div>
                <div className='flex md:flex-1 justify-between items-center gap-4'>
                    <div className='text-3xl text-white'>
                        Programming Hub
                    </div>
                    <div>
                    <a className='bg-primary cursor-pointer text-textPrimary px-2 py-2 rounded-md'>
                        <FontAwesomeIcon icon={["fab", "instagram"]} size='lg'/>
                        <span className='px-2'>Follow me on Instagram</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <section className='mb-10'>
            <Projects projects={projects} heading="Projects"/>
        </section>

        <section className='mb-24'>
            <div className='px-10'>
                <div className='my-6 text-lg'>
                    <h4 className='text-white'>Web3 Projects</h4>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                    {
                        web3Projects.map((item) => {
                            return(
                                <ProgressiveCard project={item}/>
                            )
                        })
                    }

                </div>
            </div>
        </section>
      </div>
    );
}

export default RightContainer;
