"use client"
import "./custom-css.css";

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-cards';
import Footer from "./components/Footer";
import Header from "./components/Header";

 



export default function Home() {
  useEffect(() => {
    // const swiper = new Swiper('.proofSlides', {
    //   effect: 'cube',
    //   cubeEffect: {
    //     slideShadows: false,
    //     shadow: false,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    //   },
    //   loop: true,
    //   autoplay: {
    //     delay: 3000,
    //     // duration: 500,
    //   },
    //   grabCursor: true,
    //   modules: [Pagination],
    //   centeredSlides: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // });

    
    const tabButtons = document.querySelectorAll('.tab-button') as NodeListOf<HTMLButtonElement>;
    const tabContents = document.querySelectorAll('.tab-content') as NodeListOf<HTMLElement>;
    tabContents[1].style.display = 'block';
    tabButtons[1].classList.add('bg-gray-800');
    tabButtons[1].classList.add('text-white');
    tabButtons[1].classList.add('dark:bg-white');
    tabButtons[1].classList.add('dark:text-gray-800');
    
    tabButtons.forEach((button) => {


      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        tabContents.forEach((content) => {

          if (content.id === target) {
            content.style.display = 'block';

            tabButtons.forEach((button)=>{
                button.classList.remove('bg-gray-800');
                button.classList.remove('text-white');
                button.classList.remove('dark:bg-white');
                button.classList.remove('dark:text-gray-800');
                })

                button.classList.add('bg-gray-800');
                button.classList.add('text-white');
                button.classList.add('dark:bg-white');
                button.classList.add('dark:text-gray-800');
          } else {
            content.style.display = 'none';
            
            
          }
        });
      });
    });
    

    // Cleanup function
   
  }, []);
  return (
    <>
    <Header></Header>
    <main className="overflow-hidden ">
        <section className="relative">
            <div className="relative pt-24 lg:pt-28">
                <div className="mx-auto px-6 max-w-7xl md:px-12">
                    <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                        <a href="https://app.proapis.com"
                            className="border w-fit mx-auto flex justify-between items-center transition duration-200 rounded-full border-gray-300   hover:border-gray-200  dark:border-gray-700 dark:hover:border-gray-600 p-1 group gap-2">
                            <span
                                className="block text-sm px-2 py-0.5 rounded-full text-white bg-[#2196f3]">Join
                                Now</span>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex gap-6">
                                Get your free API key
                                <div
                                    className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                    <span
                                        className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </span>
                        </a>
                        <h1
                            className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">
                            Enterprise-Grade Data APIs</h1>
                        <p
                            className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
                            At ProAPIs, Inc., we specialize in delivering enterprise-grade API solutions that ensure
                            unparalleled reliability, scalability, and cost-efficiency for your data-centric projects.
                        </p>
                        <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">Highly
                            customizable components for building modern websites and applications, with your personnal
                            spark.</p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4">
                            <div
                                className="p-1 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                <a href="https://app.proapis.com"
                                    className="*:select-none dark:shadow-[#2196f3]/10 *:disabled:opacity-20   group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-lg border border-[#2196f3] bg-gradient-to-tr from-[#2196f3] to-[#0062b3] hover:bg-gradient-to-t hover:from-[#0062b3] hover:to-[#2196f3] px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-lg before:border before:border-[#2196f3] before:bg-gradient-to-b before:from-[#2196f3] hover:bg-[#2196f3]  dark:border-0 dark:bg-[#2196f3] dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800  [&>*:not(.sr-only)]:relative">
                                    <svg className="size-5 relative" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path className="opacity-20 dark:opacity-50"
                                            d="M7.40705 15L5.10627 16.7375C5.0234 16.8039 4.92499 16.848 4.82033 16.8658C4.71567 16.8836 4.6082 16.8744 4.50806 16.8392C4.40793 16.8039 4.31842 16.7437 4.24798 16.6643C4.17755 16.5849 4.12851 16.4888 4.10549 16.3852L3.13986 12.0391C3.11906 11.9458 3.11993 11.8489 3.14241 11.756C3.16489 11.6631 3.20839 11.5766 3.26955 11.5031L5.63752 8.66484C5.5469 10.4883 5.99221 12.6117 7.40705 15ZM16.7305 11.5031L14.3625 8.66484C14.4571 10.4883 14.0078 12.6117 12.593 15L14.8938 16.7375C14.9766 16.8039 15.075 16.848 15.1797 16.8658C15.2844 16.8836 15.3918 16.8744 15.492 16.8392C15.5921 16.8039 15.6816 16.7437 15.7521 16.6643C15.8225 16.5849 15.8715 16.4888 15.8946 16.3852L16.8602 12.0391C16.881 11.9458 16.8801 11.8489 16.8576 11.756C16.8351 11.6631 16.7917 11.5766 16.7305 11.5031Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M11.875 17.5C11.875 17.6658 11.8092 17.8247 11.6919 17.9419C11.5747 18.0591 11.4158 18.125 11.25 18.125H8.75C8.58424 18.125 8.42527 18.0591 8.30806 17.9419C8.19085 17.8247 8.125 17.6658 8.125 17.5C8.125 17.3342 8.19085 17.1753 8.30806 17.0581C8.42527 16.9408 8.58424 16.875 8.75 16.875H11.25C11.4158 16.875 11.5747 16.9408 11.6919 17.0581C11.8092 17.1753 11.875 17.3342 11.875 17.5ZM10 8.75C10.1854 8.75 10.3667 8.69501 10.5208 8.592C10.675 8.48899 10.7952 8.34257 10.8661 8.17126C10.9371 7.99996 10.9557 7.81146 10.9195 7.6296C10.8833 7.44774 10.794 7.2807 10.6629 7.14959C10.5318 7.01847 10.3648 6.92919 10.1829 6.89301C10.001 6.85684 9.81254 6.8754 9.64123 6.94636C9.46993 7.01732 9.32351 7.13748 9.2205 7.29165C9.11748 7.44582 9.0625 7.62708 9.0625 7.8125C9.0625 8.06114 9.16127 8.2996 9.33709 8.47541C9.5129 8.65123 9.75136 8.75 10 8.75ZM17.4703 12.1742L16.5047 16.5203C16.4589 16.7267 16.3615 16.9181 16.2216 17.0766C16.0817 17.2351 15.9039 17.3555 15.7048 17.4266C15.5057 17.4977 15.2918 17.5172 15.0832 17.4831C14.8745 17.4491 14.6779 17.3627 14.5117 17.232L12.3836 15.625H7.61797L5.48828 17.232C5.3221 17.3627 5.12549 17.4491 4.91684 17.4831C4.70819 17.5172 4.49431 17.4977 4.29522 17.4266C4.09613 17.3555 3.91832 17.2351 3.77842 17.0766C3.63853 16.9181 3.54112 16.7267 3.49531 16.5203L2.52969 12.1742C2.48873 11.9877 2.4908 11.7943 2.53574 11.6087C2.58068 11.4231 2.66731 11.2502 2.78906 11.1031L5.02031 8.42656C5.0952 7.44292 5.32102 6.47666 5.68984 5.56172C6.69766 3.03515 8.50234 1.45 9.23437 0.885935C9.45348 0.716157 9.72281 0.624023 10 0.624023C10.2772 0.624023 10.5465 0.716157 10.7656 0.885935C11.4953 1.45 13.3023 3.03515 14.3102 5.56172C14.679 6.47666 14.9048 7.44292 14.9797 8.42656L17.2109 11.1031C17.3327 11.2502 17.4193 11.4231 17.4643 11.6087C17.5092 11.7943 17.5113 11.9877 17.4703 12.1742ZM7.76797 14.375H12.232C13.882 11.4422 14.1906 8.63437 13.1492 6.025C12.2305 3.72187 10.507 2.26562 10 1.875C9.49141 2.26562 7.76797 3.72187 6.84922 6.025C5.80937 8.63437 6.11797 11.4422 7.76797 14.375ZM6.59609 14.832C5.75495 13.3034 5.24453 11.801 5.06484 10.325L3.75 11.9031L4.71562 16.25L4.72969 16.2398L6.59609 14.832ZM16.25 11.9031L14.9352 10.325C14.757 11.7979 14.2477 13.3003 13.407 14.832L15.2703 16.2383L15.2844 16.2484L16.25 11.9031Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span className="text-nowrap">Get Started</span></a>
                            </div>
                            <button
                                className="hidden *:select-none *:disabled:opacity-20 dark:*:disabled:!text-white dark:hover:bg-gray-500/15 group h-9 items-center justify-center gap-1.5 rounded-xl bg-gray-100 px-3 text-base text-gray-800 hover:bg-gray-200/75 active:bg-gray-100 disabled:border disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950 dark:bg-gray-500/10 dark:text-gray-300 dark:active:bg-gray-500/10 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 [&>*:not(.sr-only)]:relative">
                                <span className="text-sm">Learn more</span>
                                <svg className="-mr-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    viewBox="0 0 48 48">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="pt-16">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="relative">
                        <div className="relative z-10 grid gap-3 grid-cols-6">
                            <div
                                className="col-span-full lg:col-span-2 overflow-hidden flex relative p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
                                <div className="size-fit m-auto relative">
                                    <div className="relative h-24 w-56 flex items-center">
                                        <svg className="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                                            viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span
                                            className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-400 dark:from-gray-200 dark:to-black-200">99.99%</span>
                                    </div>
                                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                                        Uptime Guarantee</h2>
                                </div>
                            </div>
                            <div
                                className="col-span-full lg:col-span-2 overflow-hidden flex relative p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
                                <div className="size-fit m-auto relative">
                                    <div className="relative h-24 w-56 flex items-center">
                                        <svg className="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                                            viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span
                                            className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-400 dark:from-gray-200 dark:to-black-200">Sub-2s</span>
                                    </div>
                                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                                        Response Time</h2>
                                </div>
                            </div>
                            <div
                                className="col-span-full lg:col-span-2 overflow-hidden flex relative p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
                                <div className="size-fit m-auto relative">
                                    <div className="relative h-24 w-56 flex items-center">
                                        <svg className="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                                            viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span
                                            className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-400 dark:from-gray-200 dark:to-black-200">Infinite</span>
                                    </div>
                                    <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">
                                        Growth & Scaling</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="pt-36">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24">
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0">
                                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Easy Integration</h2>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">Our APIs are built around OpenAPI v3.0
                                    specs and you can integrate them with great ease in whatever programming language
                                    you are using.</p>
                                <p className="mt-6 text-gray-700 dark:text-gray-300">Need further help? Get in touch.</p>
                            </div>
                        </div>
                        <div
                            className="overflow-hidden lg:col-span-3 border bg-gray-50 dark:bg-gray-900 rounded-3xl border-gray-200 shadow-sm dark:shadow-xl  dark:border-gray-800">
                            <div className="flex gap-2 py-6 *:size-2.5 *:rounded-full px-10">
                                <div className="bg-[#f87171]"></div>
                                <div className="bg-[#fbbf24]"></div>
                                <div className="bg-[#a3e635]"></div>
                            </div>

                            {/* icons tabs start */}
                            <div
                                className="flex gap-3 px-10 text-gray-600 dark:text-gray-300 *:aspect-square *:border *:p-4 *:rounded-full *:border-gray-300  dark:*:border-gray-500">
                                <div data-target="tab1" className="tab-button">
                                    <svg className="size-7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         width="1em" height="1em"
                                        viewBox="0 0 512 512" enableBackground="new 0 0 512 512" >

                                        <g id="5151e0c8492e5103c096af88a51f17e3">

                                            <path fill="currentColor" display="inline"
                                                d="M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241
                                                    c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128
                                                    c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0
                                                    l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716
                                                    c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99
                                                    l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747
                                                    c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287
                                                    c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526
                                                    c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367
                                                    c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104
                                                    c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35
                                                    c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576
                                                    c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695
                                                    c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702
                                                    c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z">

                                            </path>

                                        </g>

                                    </svg>

                                </div>
                                <div data-target="tab2" 
                                    className=" tab-button ">
                                    <svg className="size-7" fill="currentColor" width="1.53em" height="1em"
                                        viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z" />
                                        <path
                                            d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z" />
                                    </svg>
                                </div>
                                <div data-target="tab3" className="tab-button">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="currentColor"
                                        width="1.53em" height="1em"
                                        viewBox="0 0 640 512">
                                          
                                        <path
                                            d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                                    </svg>

                                </div>
                                <div data-target="tab4" className="tab-button">
                                    {/* <svg className="size-7" width="1em" height="1em" viewBox="8 3 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            d="M18.1177 14.0442C17.7408 14.1497 17.3586 14.2566 16.9162 14.3768C16.7001 14.438 16.6509 14.4519 16.4498 14.2074C16.2086 13.9194 16.0317 13.7331 15.6939 13.5636C14.6807 13.0384 13.6996 13.1909 12.7829 13.8178C11.6893 14.5632 11.1264 15.6644 11.1425 17.0367C11.1585 18.3921 12.0431 19.5103 13.3137 19.6966C14.4073 19.8491 15.324 19.4425 16.0477 18.5785C16.1924 18.3922 16.3212 18.1887 16.482 17.9516H13.378C13.0402 17.9516 12.9598 17.7314 13.0724 17.4433C13.2815 16.9181 13.6675 16.0372 13.8926 15.5967C13.9409 15.495 14.0535 15.3256 14.2947 15.3256H19.4702C19.7027 14.5496 20.0799 13.8164 20.5831 13.1226C21.7572 11.4961 23.1725 10.649 25.0863 10.2933C26.7268 9.9883 28.2707 10.1577 29.6699 11.1573C30.9405 12.0722 31.7285 13.3089 31.9376 14.9354C32.211 17.2225 31.5838 19.0862 30.0881 20.6787C29.0266 21.8138 27.7239 22.5254 26.2282 22.8473C25.9429 22.9029 25.6576 22.9293 25.3768 22.9553C25.2303 22.9689 25.085 22.9823 24.9416 22.9998C23.478 22.9659 22.1432 22.5254 21.0173 21.5089C20.2256 20.7879 19.6803 19.9019 19.4092 18.8705C19.2211 19.2707 18.9962 19.6539 18.7336 20.0185C17.5756 21.628 16.0638 22.6276 14.15 22.8987C12.5738 23.1189 11.1103 22.797 9.82366 21.7805C8.63353 20.8317 7.95805 19.578 7.78114 18.0194C7.57206 16.1727 8.08671 14.5124 9.14818 13.0554C10.2901 11.4798 11.8019 10.4802 13.6514 10.1244C15.1632 9.8364 16.6106 10.0228 17.9134 10.9546C18.7657 11.5475 19.3769 12.3608 19.779 13.3434C19.8755 13.4959 19.8111 13.5806 19.6181 13.6314C19.0545 13.7822 18.5903 13.9121 18.1177 14.0442ZM28.7581 15.974C28.7613 16.0309 28.7646 16.0909 28.7693 16.1552C28.6889 17.6122 27.9973 18.6965 26.7268 19.3911C25.8744 19.8485 24.9898 19.8994 24.1053 19.4928C22.9473 18.9506 22.3361 17.6122 22.6256 16.2907C22.9795 14.6982 23.9444 13.6986 25.4401 13.3428C26.968 12.9701 28.4316 13.9188 28.7211 15.5961C28.7438 15.7161 28.7505 15.836 28.7581 15.974Z"
                                            fill="#00ACD7" />
                                        <path
                                            d="M2.44461 13.8517C2.41244 13.9025 2.42852 13.9364 2.49285 13.9364L7.2826 13.9534C7.33085 13.9534 7.41126 13.9025 7.44343 13.8517L7.71684 13.4112C7.749 13.3604 7.73292 13.3096 7.66859 13.3096H2.95926C2.89493 13.3096 2.81451 13.3435 2.78235 13.3943L2.44461 13.8517Z"
                                            fill="#00ACD7" />
                                        <path
                                            d="M0.0160829 15.4103C-0.0160829 15.4611 7.45058e-09 15.495 0.0643316 15.495L6.63928 15.4781C6.70361 15.4781 6.76794 15.4442 6.78402 15.3764L6.91269 14.9698C6.92877 14.919 6.8966 14.8682 6.83227 14.8682H0.530735C0.466404 14.8682 0.385989 14.902 0.353823 14.9529L0.0160829 15.4103Z"
                                            fill="#00ACD7" />
                                        <path
                                            d="M3.90813 16.9521C3.87596 17.0029 3.89204 17.0537 3.95638 17.0537L6.43019 17.0707C6.47843 17.0707 6.54277 17.0199 6.54277 16.9521L6.57493 16.5455C6.57493 16.4777 6.54277 16.4269 6.47843 16.4269H4.29412C4.22978 16.4269 4.16545 16.4777 4.13329 16.5285L3.90813 16.9521Z"
                                            fill="#00ACD7" />
                                    </svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-7" width="1em" height="1em"  viewBox="0 0 640 512" fill="currentColor"><path d="M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.1 200.4 46.7 199.8 47.4 198.8L53.9 190.4C54.5 189.5 56.1 188.9 57.3 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.2 229.1C0 229.1-.3 228.4 .3 227.5L6.9 219.1C7.5 218.2 9 217.5 10.3 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.2 229.1zM75.7 255.9C75.1 256.8 75.4 257.7 76.7 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C82 246.2 80.7 247.1 80.1 248.1L75.7 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z"/></svg>
                                </div>
                            </div>
                            {/* icon tabs end */}
                            <div>
                                <div id="tab1" className="tab-content">
                                    {/* tab content here */}
                                    <pre className="px-10">
                                        <code className="text-sm font-mono code-container dark:text-gray-300">
                                        {`

const payload = { 
    field: 'value' 
};

const headers = {
     'x-api-key': 'your-api-key' 
};

fetch('https://api.proapis.com/api/service/v1/data-point', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json', ...headers 
    },
    body: JSON.stringify(payload)
})
.then(response => response.ok ? response.json() : Promise.reject('Server Error'))
.then(jsonResp => console.log(jsonResp))
.catch(error => console.error('Error:', error));
  `}                                                                                    
</code>
                                    </pre>
                                </div>
                                {/* tab content ends */}

                                {/* tab1 */}
                                <div id="tab2" className="tab-content">

                                    <pre className="px-10">
                                      <code className="text-sm font-mono code-container dark:text-gray-300">
  
                                      {` 

import requests

# Build payload
payload = {
    'field': 'value'
}

# Set API key
headers = {'x-api-key': 'your-api-key'}

# Send HTTP request
url = 'https://api.proapis.com/api/service/v1/data-point'
result = requests.post(url, json=payload, headers=headers)
if result.ok:
    json_resp = result.json()
else:
    # Debug the error based on status code returned
    pass
    `}
</code>
                                    </pre>

                                </div>
                                {/* tab1 ends */}

                                {/* tab3 */}
                                <div id="tab3" className="tab-content">

                                    <pre className="px-10">
                                        <code className="text-sm font-mono code-container dark:text-gray-300">
                                          {`

$payload = json_encode(array('field' => 'value'));

$headers = array('x-api-key: your-api-key');

$url = 'https://api.proapis.com/api/service/v1/data-point';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', ...$headers));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
if ($result !== false) {
    $json_resp = json_decode($result, true);
} else {
    // Debug the error based on status code returned
    echo 'Error: ' . curl_error($ch);
}

curl_close($ch);   
`}                                                                             
</code>
                                    </pre>

                                </div>
                                {/* tab3 ends */}

                                {/* tab1 */}
                                <div id="tab4" className="tab-content">

                                    <pre className="px-10">
                                        <code className="text-sm font-mono code-container dark:text-gray-300">
                                          {`

payload := "{\"field\": \"value\"}"
apiKey := "your-api-key"

response := HTTPPost(
    "https://api.proapis.com/api/service/v1/data-point",
    payload,
    map[string]string{"Content-Type": "application/json", "x-api-key": apiKey},
)

if response.status == 200 {
    jsonResp := response.json()
    Print(jsonResp)
} else {
    Print("Server Error: " + response.status)
}
`}                                            
</code>
                                    </pre>

                                </div>
                                {/* tab4 ends */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="pt-36">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="text-center">
                        <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Our Products</h2>
                        <p className="mt-6 text-gray-700 dark:text-gray-300">We offer unparalleled access to high-quality
                            data sources around the web.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div
                            className="relative group overflow-hidden p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
                            <div aria-hidden="true"
                                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-[#2196f3] to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
                            </div>
                            <div className="relative">
                                <div
                                    className="border border-[#2196f3]/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                    <svg viewBox="0 0 24 24" id="meteor-icon-kit__regular-google" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g clipPath="url(#clip0_1292_3949)">
                                                <g clipPath="url(#clip1_1292_3949)">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M12.255 4.75C14.025 4.75 15.605 5.36 16.855 6.55L20.275 3.13C18.205 1.19 15.495 0 12.255 0C7.56498 0 3.51498 2.7 1.54498 6.62L1.545 6.62001C0.725001 8.24001 0.255005 10.06 0.255005 12C0.255005 13.94 0.724996 15.76 1.54498 17.38V17.38C3.51498 21.3 7.56498 24 12.255 24C15.495 24 18.205 22.92 20.185 21.09L20.185 21.09C22.445 19 23.745 15.92 23.745 12.27C23.745 11.48 23.675 10.73 23.555 10H12.255V14.51H18.725C18.435 15.99 17.585 17.24 16.325 18.09L16.325 18.09C15.245 18.81 13.875 19.25 12.255 19.25C9.12498 19.25 6.47498 17.14 5.52498 14.29L5.52501 14.29C5.27501 13.57 5.145 12.8 5.145 12C5.145 11.2 5.28501 10.43 5.52501 9.71V9.70994C6.47502 6.85997 9.12501 4.75 12.255 4.75Z"
                                                        fill="currentColor"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1292_3949">
                                                    <rect width="24" height="24" fill="currentColor"></rect>
                                                </clipPath>
                                                <clipPath id="clip1_1292_3949">
                                                    <rect width="24" height="24" fill="currentColor"></rect>
                                                </clipPath>
                                            </defs>
                                        </g>
                                    </svg>
                                </div>
                                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                    <p className="text-gray-700 dark:text-gray-300">Blazing fast, highly reliable, and
                                        sclable real time Google search API.</p>
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
                        <div
                            className="relative group overflow-hidden p-10 rounded-3xl bg-white border border-gray-300  dark:border-gray-600 dark:bg-gray-950">
                            <div aria-hidden="true"
                                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
                            </div>
                            <div className="relative">
                                <div
                                    className="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                    <svg fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z"
                                                fillRule="evenodd"></path>
                                        </g>
                                    </svg>
                                </div>

                                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                    <p className="text-gray-700 dark:text-gray-300">Highly reliable, fast, and scalable real
                                        time LinkedIn data API.</p>
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
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="py-36">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="text-center">
                        <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">Testimonials</h2>
                        <p className="mt-6 text-gray-700 dark:text-gray-300">Our customers love our services and there is a
                            reason for it.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="space-y-3">
                            <div
                                className="p-10 rounded-3xl border bg-white border-gray-300  dark:bg-[--card-dark-bg] dark:border-gray-600 group">
                                <div className="flex gap-3">
                                    <span className="relative block rounded-full text-lg size-10">
                                        <img className="h-full w-full rounded-full object-cover"
                                            alt="Mark Whitman" src="/images/testimonials/mark.png" loading="lazy"
                                            width="120" height="120"/>
                                    </span>
                                    <div className="w-[calc(100%-3.25rem)]">
                                        <h3 className="font-medium text-gray-950 dark:text-white">Mark Whitman</h3>
                                        <span
                                            className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Founder,
                                            <a href="https://keyclusters.com" rel="nofollow">
                                                KeyClusters
                                            </a></span>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                SerpsBot has been an incredible partner in helping us scale KeyClusters.
                                                Their Google SERP API is the fastest and most affordable one we tested –
                                                and we tested lots. They are also very responsive.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div
                                className="p-10 rounded-3xl border bg-white border-gray-300  dark:bg-[--card-dark-bg] dark:border-gray-600 group">
                                <div className="flex gap-3">
                                    <span className="relative block rounded-full text-lg size-10">
                                        <img className="h-full w-full rounded-full object-cover"
                                            alt="Shah Karimmohideen" src="/images/testimonials/shah.jpeg"
                                            loading="lazy" width="120" height="120"/>
                                    </span>
                                    <div className="w-[calc(100%-3.25rem)]">
                                        <h3 className="font-medium text-gray-950 dark:text-white">Shah Karimmohideen</h3>
                                        <span
                                            className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">Co-founder
                                            -
                                            <a href="https://quicklines.ai" rel="nofollow">
                                                Quicklines
                                            </a>
                                        </span>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                We are extremely satisfied with the reliable service offered by ProAPIs.
                                                Their LinkedIn data API is super fast and highly scalable. They have the
                                                best price and customer service on the market.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {/* Start of Testimonial 3 */}
                            <div
                                className="p-10 rounded-3xl border bg-white border-gray-300  dark:bg-[--card-dark-bg] dark:border-gray-600 group">
                                <div className="flex gap-3">
                                    <span className="relative block rounded-full text-lg size-10">
                                        <img className="h-full w-full rounded-full object-cover"
                                            alt="Jens Brandt" src="/images/testimonials/jens.jpeg" loading="lazy"
                                            width="120" height="120"/>
                                    </span>
                                    <div className="w-[calc(100%-3.25rem)]">
                                        <h3 className="font-medium text-gray-950 dark:text-white">Jens Brandt</h3>
                                        <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                                            <a href="https://docoloc.de">
                                                Founder, Docoloc
                                            </a>
                                        </span>
                                        <blockquote className="mt-3">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                We have used many different Google API providers and SerpsBot is the
                                                best in respect to response time, pricing, and reliability. The support
                                                is also great. It's really a pleasure to work with the SerpsBot team.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

  <Footer></Footer>
    </>
  );
}
