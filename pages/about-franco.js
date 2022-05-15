import Link from "next/link"
import Aboutme from "../components/aboutme";
import Reasons from "../components/reasons";
import code from './img/code.jpg'
import MyImage from "../components/MyImage";
import Project from "../components/projectinmind";
import Head from 'next/head';

const About = () => {
    return(
        <>
        <Head>
            <title>Franco Portfolio</title>
        </Head>
            <div data-aos='fade-down' data-aos-duration='500' data-aos-once="true" className="pt-32 xl:flex md:grid md:justify-items-start lg:grid lg:justify-items-start xl:justify-evenly md:px-20 sm:pr-[24px] sm:pl-[24px] lg:px-8 xl:px-52">
                <div className='grid content-center mr-40 leading-relaxed md:mr-0 xl:mr-10 sm:mr-0 lg:mr-0 xl:mb-52 mb-36'>
                    <div>
                        <h1 className='max-w-md sm:max-w-[44rem] md:max-w-[44rem] md:text-6xl lg:text-6xl sm:text-6xl'> Full Stack Web Developer </h1>
                        <p className='max-w-md mt-4 text-xl sm:max-w-4xl sm:text-xl md:max-w-xl text-neutral-500'>
                            ¡Hola de vuelta!<br/>
                            Soy Franco Padularrosa,<br/>
                            me gusta mucho diseñar y desarrollar proyectos increibles que impulsen a las empresas hacia adelante.
                        </p>
                    </div>
                    <div className="pt-10 hover:cursor-pointer" id="linkToReasons">
                        <Link href="#reasons">
                            <div className="inline-block mt-4 text-xl font-medium transition ease-in border-b-2 rounded-md duration-400 hover:border-b-2 hover:border-gray-500 text-neutral-900 hover:text-neutral-500" id="LinkReasons">
                                <div>Conóceme mejor</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="md:w-[67%] md:ml-[8rem] sm:w-[55%] sm:ml-36 mb-52 ml-24 lg:mr-14 xl:mr-0 xl:ml-0 xl:w-full" id="image-about">
                        <MyImage src={code} width='670' heigth='800'/>
                    </div>
                </div>
            </div>
            <Reasons/>
            <Aboutme/>
            <Project/>
        </>
    )
}

export default About;