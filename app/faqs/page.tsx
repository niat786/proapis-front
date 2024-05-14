"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../app.css";
import { useState } from 'react';



const faqs = () => {


    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prevChecked => !prevChecked);
    };


    return (
        <>
            <Header></Header>

            <main className="overflow-hidden">
                <section className="relative">
                    <div className="relative pt-24 lg:pt-28">
                        <div className="mx-auto px-6 max-w-7xl md:px-12">
                            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">

                                <h1
                                    className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">
                                    FAQs</h1>

                                <p
                                    className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
                                    At ProAPIs, Inc., we specialize in delivering enterprise-grade API solutions that ensure
                                    unparalleled reliability, scalability, and cost-efficiency for your data-centric projects.
                                </p>
                                <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">Highly
                                    customizable components for building modern websites and applications, with your personnal
                                    spark.</p>

                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="pt-10">
                        <div className="mx-auto px-6 max-w-6xl text-gray-500 privacy-content">
                            <div className="my-10">
                                <div className="container px-6 py-12 mx-auto">
                                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently
                                        asked questions</h1>

                                    <div className="mt-8 space-y-8 lg:mt-12">
                                        {/* faq1 */}
                                        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"  >
                                            <button className="flex items-center justify-between w-full" >
                                                <h1 className="font-semibold text-gray-700 dark:text-white">What is ProAPIs?
                                                </h1>

                                                <span className="text-white bg-primary-500 rounded-full">
                                                    {/* opened icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" x-show="!open"
                                                        fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M18 12H6" />
                                                    </svg>

                                                    {/* closed icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " x-show="open"
                                                        fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300"
                                                x-show="!open">
                                                ProAPIs is a real-time LinkedIn data API service that enables users to send
                                                HTTP requests to obtain LinkedIn individual and company data. With ProAPIs,
                                                users can perform searches, access lists of company employees, view job
                                                listings, and much more, all in a seamless and efficient manner.
                                            </p>
                                        </div>
                                        {/* faq1 end */}

                                        {/* faq2  */}

                                        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"  >
                                            <button className="flex items-center justify-between w-full" >
                                                <h1 className="font-semibold text-gray-700 dark:text-white">What subscription
                                                    plans does ProAPIs offer?</h1>

                                                <span className="text-white bg-primary-500 rounded-full">
                                                    {/* opened icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" x-show="open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M18 12H6" />
                                                    </svg>

                                                    {/* closed icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " x-show="!open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300" x-show="open">
                                                ProAPIs offers several subscription plans for users, each with different
                                                features and pricing options to choose from. For high volume customers,
                                                ProAPIs also offers custom subscription plans or a pay-as-you-go service
                                                with custom discounted pricing options.
                                            </p>
                                        </div>
                                        {/* faq2 */}


                                        {/* faq3  */}

                                        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"  >
                                            <button className="flex items-center justify-between w-full" >
                                                <h1 className="font-semibold text-gray-700 dark:text-white">Can I use ProAPIs on
                                                    a pay-as-you-go basis?</h1>

                                                <span className="text-white bg-primary-500 rounded-full">
                                                    {/* opened icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" x-show="open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M18 12H6" />
                                                    </svg>

                                                    {/* closed icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " x-show="!open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300" x-show="open">
                                                Yes, you can use ProAPIs API without subscribing to a specific plan.
                                                However, please note that you will be charged a higher fee per request in
                                                this case. If you anticipate high volume usage, we recommend either
                                                subscribing to one of our plans or contacting our support team to inquire
                                                about discounted custom pricing for pay-as-you-go usage.
                                            </p>
                                        </div>
                                        {/* faq3 ends*/}

                                        {/* faq4  */}

                                        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"  >
                                            <button className="flex items-center justify-between w-full">
                                                <h1 className="font-semibold text-gray-700 dark:text-white">How far can I scale
                                                    with your service?</h1>

                                                <span className="text-white bg-primary-500 rounded-full">
                                                    {/* opened icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" x-show="open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M18 12H6" />
                                                    </svg>

                                                    {/* closed icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " x-show="!open"
                                                        fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300" x-show="open">
                                                We provide unlimited scalability for our service. Customers can process
                                                hundreds of millions of API calls each month, and for those with very high
                                                volume usage, we offer attractive discounts. We encourage customers to get
                                                in touch with our support team to discuss their specific needs and find the
                                                most suitable pricing solution.</p> {/* faq4 ends*/}

                                        </div>

                                    </div>
                                </div>


                            </div>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid neque fuga mollitia non odit
                                cupiditate harum, voluptatibus molestiae labore vitae.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer></Footer>

        </>
    )
}

export default faqs;