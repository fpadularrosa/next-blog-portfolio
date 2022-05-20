
const Expertise = () => {
    return(
        <>
            <section className="mx-6 sm:mr-[1.5rem] sm:ml-0" id='expertise'>
                <div className=" sm:ml-9 md:ml-6 lg:ml-0 sm:mr-16 md:mr-0 md:pr-6 md:pl-0" id='container-expertise'>
                    <div className="flex mb-10" id="title">
                        <div>
                        <h2 className='xl:text-[45px] text-4xl md:ml-[5px] lg:ml-6 md:font-medium md:text-4xl sm:text-4xl xl:ml-[205px] '>Mi experiencia</h2>
                        </div>
                    </div>

                    <div className='sm:py-12 sm:pb-24 md:inline-flex xl:flex xl:mx-28 xl:justify-between sm:justify-items-center' id="content">
                        <div className="sm:relative lg:ml-7 md:mr-36 xl:ml-28 xl:mr-0 sm:mr-8" id='content-design'>
                            <hr className='xl:pb-7 sm:pb-7 w-[522px] lg:w-[440px] xl:w-[530px] md:w-[400px] sm:w-[552px]' width='530'/>
                                <h3 className='mt-8 mb-3 text-2xl font-medium xl:pb-2 xl:text-3xl sm:text-2xl sm:pb-2'>Diseño estratégico</h3>
                                <p className='xl:max-w-lg mb-7 max-w-lg sm:max-w-xl sm:text-lg lg:max-w-lg text-neutral-500 xl:leading-relaxed xl:text-[22px] sm:leading-relaxed md:text-md md:max-w-sm'>Ayudo a los equipos a alinearse en los principales desafíos comerciales y a enfocar los esfuerzos de diseño para resolverlos. Diseño para impulsar las empresas hacia adelante.
                                </p>
                            <hr className='xl:mt-[60px] hidden sm:block w-[532px] md:mt-[37px] lg:w-[440px] sm:mb-7 sm:mt-7 xl:w-[530px] md:w-[400px] sm:w-[552px]' width='530' />
                        </div>
                        <div className="sm:relative md:mr-10 xl:mr-52 sm:mr-20" id='content-develop'>
                            <hr className='xl:pb-8 sm:pb-7 w-[522px] xl:w-[530px] lg:block md:block xl:block sm:hidden lg:w-[440px] md:w-[400px]' width='530' />
                                <h3 className='mt-8 mb-3 text-2xl font-medium xl:pb-4 xl:text-3xl sm:text-2xl sm:pb-2'>Desarrollo Web</h3>
                                <p className='xl:max-w-lg mb-7 max-w-lg sm:max-w-xl sm:text-lg lg:max-w-lg text-neutral-500 xl:leading-relaxed xl:text-[22px] sm:leading-relaxed md:max-w-sm md:text-md'>Utilizando las últimas tecnologías, llevo los sitios web al siguiente nivel con la creación de experiencias digitales que convencen a los clientes.</p>
                            <hr className='xl:mt-[83px] w-[522px] sm:mt-7 md:mt-[36px] sm:w-[552px] lg:mt-[67px] lg:w-[440px] xl:w-[530px] md:w-[400px]' width='530'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertise;