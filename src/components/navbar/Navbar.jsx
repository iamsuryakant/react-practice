import React from 'react'

const Navbar = () => {

    function myFunction() {
        let x = document.getElementById("navbar-sticky");
        x.classList.toggle("hidden");
    }

    return (
        <>
            <nav id = "nav" className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
                <div className='max-w screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className='flex items-center h-8 mr-3 dark:text-white self-center text-2xl font-semibold font-sans whitespace-nowrap'>
                        <a target='_blank' rel="noreferrer" href='http://iamsuryakant.github.io'>Suryakant</a><span className='dark:text-red-600 text-3xl font-bold rounded-full'>.</span>
                    </div>

                    <div>

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"
                        onClick={myFunction}
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>


                        <div id="navbar-sticky" className=
                            'items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                        >

                            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                                <li><a className=' block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500' aria-current='page' href="#home">Home</a></li>
                                <li><a className='block py-2 pl-3 pr-4 text-red-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700' href="#about">About</a></li>
                                <li><a className='block py-2 pl-3 pr-4 text-red-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700' href="#skills">Skills</a></li>
                                <li><a className='block py-2 pl-3 pr-4 text-red-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700' href="#projects">Projects</a></li>
                                <li><a className='block py-2 pl-3 pr-4 text-red-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700' href="#certification">Certification</a></li>
                                <li><a className='block py-2 pl-3 pr-4 text-red-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-red-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-red-700' href="#contact">Contact</a></li>

                                {/* Have to implement cancel button for smaller screen */}

                            </ul>

                        </div>
                        
                    </div>



                </div>
            </nav>
        </>
    )
}

export default Navbar