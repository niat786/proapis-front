import React, { useState, useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
  icon_url: string;
}

interface ServicesPageProps {
  initialServices?: Service[]; // Make initialServices prop optional
}

const ServicesPage: React.FC<ServicesPageProps> = ({ initialServices = [] }) => { // Provide default value for initialServices
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://api.proapis.com/internal-api/v1/products/services';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setServices(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (initialServices.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  
      {loading ? (
        <>
        {[1, 2, 3].map((index) => (
            <div key={index}   className="relative group overflow-hidden p-10 rounded-3xl bg-white border border-gray-300 dark:border-gray-600 dark:bg-gray-950 animate-pulse">
                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                <div className="relative">
                    <div className="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                       
                        {/* Placeholder for icon */}
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="mt-6 pb-6 rounded-b-xl">
                        {/* Placeholder for name */}
                        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        {/* Placeholder for description */}
                        <div className="mt-2 h-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
                        <div className="mt-2 h-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
                        <div className="mt-2 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                    <div className="flex gap-3 -mb-10 py-4 border-t border-gray-300  dark:border-gray-600">
                        {/* Placeholder for action buttons */}
                        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                </div>
            </div>
        ))}
  
    </>
      ) : (
        <>
          {services.map(service => (
            // <li key={service.id}>
            //   <h2>{service.name}</h2>
            //   <p>{service.description}</p>
            //   <img src={service.icon_url} alt={service.name} />
            // </li>
            <div key={service.id} 
            className="relative group overflow-hidden p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
            <div aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
            </div>
            <div className="relative">
                <div
                    className="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    {/* <svg fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
                                fillRule="evenodd"></path>
                        </g>
                    </svg> */}
                    <img src={service.icon_url} alt={service.name} width={20} />
                </div>

                <div className="mt-6 pb-6 rounded-b-xl">
                <h2 className='text-lg my-3 font-bold'>{service.name}</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                        </p>
                </div>
                <div
                    className="flex gap-3 -mb-10 py-4 border-t border-gray-300  dark:border-gray-600">
                    <a href="#" download="/"
                        className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-300   disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                        <span>Sample Data</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2"
                                d="m17 13l-5 5m0 0l-5-5m5 5V6" />
                        </svg>
                    </a>
                    <a href="#" download="/"
                        className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-300   disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                        <span>View Details</span>
                    </a>
                </div>
            </div>
        </div>
          ))}
        </>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const apiUrl = 'https://api.proapis.com/internal-api/v1/products/services';
  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      initialServices: data.data || [] // Provide empty array as default if data is not available
    }
  };
}

export default ServicesPage;
