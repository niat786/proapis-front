"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from 'react';



const pricing = () => {


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
                <div className="mx-auto px-5 max-w-7xl md:px-5">
                    <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">

                        <h1
                            className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">
                            Enterprise-Grade Data APIs pricing</h1>
                        <p
                            className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
                            At ProAPIs, Inc., we specialize in delivering enterprise-grade API solutions that ensure
                            unparalleled reliability, scalability, and cost-efficiency for your data-centric projects.
                        </p>
                        <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">Highly
                            customizable components for building modern websites and applications, with your personnal
                            spark.</p>

                            <div className="my-10">
                                <label className="inline-flex items-center cursor-pointer p-5 rounded-xl border border-dashed bg-gray-50 dark:bg-gray-700 dark:text-white">
                                    <input type="checkbox" id="priceToggleButton" value="" className="sr-only peer"  checked={isChecked}
          onChange={handleToggle}/>
                                    <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-primary-500 peer-checked:bg-primary-500"></div>
                                    
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Annually</span>&nbsp;&nbsp;
                                    <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width="48">
                                        <path fill="none" stroke="#bdc5d1" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42"></path>
                                        <path fill="none" stroke="#bdc5d1" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" d="M11,54.3c0,0,10.3-65.2,86.3-50"></path>
                                      </svg>
                                      <span className="bg-primary-100 text-primary-800 text-xs font-medium me-2 px-3 py-1 rounded-full mx-2 dark:bg-seconday-900 dark:text-primary-900">Save 20%</span>
                                  </label>
                            </div>

                        <div className="my-20 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {/* price card starts - 1 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="starter-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$40' : '$50'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Starter</div>
                                <div className="description my-4">Basic LinkedIn data for research/lead generation.</div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>5K API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>5 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.010 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 1 */}

                            {/* price card starts - 2 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="basic-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$108' : '$135'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Basic</div>
                                <div className="description my-4">Moderate LinkedIn data for lead gen./analysis.</div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>15K API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>10 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.009 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 2 */}

                            {/* price card starts - 3 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="plus-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$320' : '$400'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Plus</div>
                                <div className="description my-4">Advanced LinkedIn data extraction/analysis.</div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>50K API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>15 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.008 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 3 */}

                            {/* price card starts - 4 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="professional-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$2,000' : '$2,500'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Professional</div>
                                <div className="description my-4">Significant LinkedIn data needs with high concurrency.
                                </div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>500K API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>25 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.005 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 4 */}

                            {/* price card starts - 5 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="business-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$3,200' : '$4,000'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Business</div>
                                <div className="description my-4">Extensive LinkedIn data needs with robust performance.
                                </div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1M API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>50 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.004 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 5 */}

                            {/* price card starts - 6 */}
                            <div
                                className="border rounded-xl shadow-lg p-5 flex flex-col space-y-2 dark:text-white dark:border-gray-500 dark:bg-gray-700">
                                <div className="price my-4"><span id="enterprise-price" className="text-3xl md:text-4xl font-bold animate-counter">{isChecked ? '$12,000' : '$15,000'}</span><span
                                        className="text-primary-500 dark:text-primary-500 font-semibold text-lg">/mo</span>
                                </div>
                                <div className="plan text-2xl md:text-3xl font-semibold">Enterprise</div>
                                <div className="description my-4">Highest LinkedIn data needs with highest concurrency.
                                </div>
                                <div className="list-features my-4">
                                    <ul className="mt-5 list-none text-left space-y-3">
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>5M API Credits / mo</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>100 Concurrent Threads</span>
                                        </li>
                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>$0.003 per additional credit</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>1 credit per successful call</span>
                                        </li>

                                        <li className="space-x-2 flex"><span
                                                className="text-primary-500 dark:text-primary-500"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                        clipRule="evenodd" />
                                                </svg></span>
                                            <span>Real-Time Data Extraction</span>
                                        </li>


                                    </ul>
                                </div>
                                <div className="button my-4">
                                    <div
                                        className="p-1 mt-10 rounded-xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                                        <a href="https://app.proapis.com"
                                            className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-500 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-500 hover:bg-primary-500 active:bg-primary-700 disabled:border-gray-300   disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-500 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
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
                                </div>
                            </div>

                            {/* price card ends - 6 */}


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

export default pricing;