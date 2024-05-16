import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from 'next/image';

const contact = () => {
    return (
        <>
            <Header></Header>
            <main className="overflow-hidden">
                <section className="relative">
                    <div className="relative pt-24 lg:pt-28">
                        <div className="mx-auto px-6 max-w-7xl md:px-12">
                            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">

                                <h1
                                    className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-gray-300 xl:text-5xl xl:[line-height:1.125]">
                                    Get in touch!</h1>
                                <p
                                    className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
                                    Questions? Our FAQs may help or contact us for API, datasets, pricing, or other inquiries.
                                </p>
                                <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">Highly
                                    customizable components for building modern websites and applications, with your personnal
                                    spark.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="pt-10 pb-10">
                        <div className="mx-auto px-4 max-w-6xl">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div className="border rounded-xl border-dashed p-10 pt-11 dark:bg-gray-900 dark:border-gray-700">


                                    <form className="max-w-lg mx-auto">
                                        <div className="mb-5">
                                            <label htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                                Name</label>
                                            <input type="text" id="username"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                                Email</label>
                                            <input type="email" id="email"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="subject"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                            <input type="text" id="subject"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="message"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                                            <textarea rows={6} id="message"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required></textarea>
                                        </div>

                                        <div className="flex items-start mb-5">
                                            <div className="flex items-center h-5">
                                                <input id="terms" type="checkbox" value=""
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                    required />
                                            </div>
                                            <label htmlFor="terms"
                                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with
                                                the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms
                                                    and conditions</a></label>
                                        </div>
                                        <button
                                            className="px-10 py-3 bg-[#2196f3] shadow shadow-primary-500/20 text-white rounded-xl"
                                            type="submit"> send message</button>
                                    </form>

                                </div>
                                <div className="pt-2 px-10 pb-10  dark:text-gray-300">

                                    <div className="flex flex-col space-y-2">
                                        <p className="flex items-center"><Image src="/images/contact/us.svg" className="w-5 h-5 rounded-full" alt="us-flag" height={20} width={20}/>&nbsp; ProAPIs, Inc. Delaware, US</p>
                                        <p className="flex "><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                            </svg>

                                        </span>&nbsp; 651 N Broad St, Suite 206, Middletown, 19709</p>
                                    </div>

                                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className="">
                                        <h3 className="text-xl font-semibold">Reach Out via Email</h3>
                                        <p> Get a rapid response! Reach out to us via email at</p>
                                        <p className="text-blue-500 dark:text-blue-400">sales@iscraper.io</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default contact;