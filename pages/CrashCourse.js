import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <>
            <section id="Navbar" class="rounded-xl fixed top-0 w-full overflow-y-auto z-50">
        <nav class="rounded-[20px] bg-white fixed  w-10/12 -mt-4 top-4 lg:left-28  right-3 left-3">
          <div class="max-w-screen-xl flex flex-wrap items-center  -pb-3 justify-between mx-auto p-2">
            <Link href="/" class="flex sm:items-center items-center">
              <Image
                src="./img/milala-logo.svg"
                class="h-12 w-20 mt-3 mr-3"
                alt="Milala Logo"
                height={20}
                width={20}
              ></Image>
              <span class="self-center text-[#009A9A] -ml-7 font-inter text-2xl  font-semibold whitespace-nowrap ">
                MilaSchool
              </span>
            </Link>
            <div class="flex md:order-2">
              <div class="text-gray text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
              <div className="flex font-Inter font-normal text-[13px]">
                <Link href="#courses">
                <div className="">
                  <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                    Explore Courses
                  </button>
                </div>
                </Link>
              </div>
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border text-center border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
                <li>
                  <Link
                    href="/"
                    class="block py-2 pl-3 pr-4 text-gray-900 bg-transparent rounded-xl  hover:text-teal md:bg-transparent md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#courses"
                    class="block py-2 pl-3 pr-4 text-gray-900  hoveroundedr:bg-teal-700 hover:text-teal-700 700 md:p-0 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                   Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    class="block py-2 pl-3 pr-4 text-gray-900   hover:text-teal-700  md:p-0 md:dark:hover:text-blue-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    class="block py-2 pl-3 pr-4 text-gray-900  hover:text-teal-700 md:p-0 "
                  >
                    Contact Us
                  </Link>
                </li>
                
                
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <div class="w-screen bg-white pt-20">
        <main class="relative mx-auto px-10 md:max-w-screen-md">
          <div class="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-white px-6 py-6 shadow-md lg:absolute lg:w-56">
            <div class="pb-2 text-xl font-medium text-teal-600">
              Table of Contents
            </div>
            <hr class="h-1 w-10 bg-teal-800" />
            <div class="mt-4">
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-teal-600 hover:text-teal-600"
                  href="#section-1"
                >
                 What is Blockchain?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#section-2"
                >
                What is a Distributed Ledger?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#section-3"
                >
                 Types of Blockchain
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#section-4"
                >
                 Importance of Blockchain technology today 

                </a>
              </div>
             
             
            </div>
          </div>
          <article class="text-gray-800">
            <h2 class="mb-10 mt-4 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span class="text-[#009A9A] "> Blockchain Crash Course</span>
            </h2>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              What is Blockchain technology ?
            </h2>
            <p class="mb-10 text-gray-600">
            A blockchain is a database that is shared across a network of
computers. When a record has been added to the network it is called a
chain and is very difficult to change. The records that the network
accepted are added to a block creating a blockchain as each block is
added. It enables the connection of people on an open system with
new trust architecture.
            </p>
            <p class="mb-10 text-gray-600">
            It enables you to be your own bank through a decentralized finance
system. Facilitates trustless transactions from anywhere around the
world, without the need for any intermediary.
 Blockchain is a communication network that supports Bitcoin.
 Bitcoin is the digital asset while blockchain is the technology upon
which bitcoin is built.
 Blockchain provides a secure method of transacting in bitcoin

            </p>
            <h3 id="section-2" class="mb-4 text-3xl font-bold">
            What is Distributed Ledger

            </h3>
            <p class="mb-10 text-gray-600">
            It is a Public database that can be accessed by numerous people. The database can
be shared and synchronized across multiple platforms.

            </p>
            <h2 id="section-3" class="mb-4 text-3xl font-bold">
        History of Blockchain
            </h2>
            <p class="mb-10 text-gray-600">
            In 1991 research scientist like Stuart Haber and W.Scott Stornetta introduced a
computationally practical solution to time stamp documents digitally in a way that
it will be difficult to tamper with or backdate. This was the original idea behind the
blockchain technology. A white paper, Published in 2008 that introduced a
Peer-to-Peer decentralized electronic cash system called bitcoin in 2008 was
posted to a cryptography mailing list by Satoshi Nakamoto.

            </p>
          
           
            <h3 id="section-4" class="mb-4 text-3xl font-bold">
            Types of Blockchain


            </h3>
            <p class="mb-10 text-gray-600 font-md">
          <ol class="list-disc">
            <li>Private</li>
            <li>Public</li>
            <li>Consortium</li>
            <li>Hybrid</li>
          </ol>

            </p>
            <h3 id="section-5" class="mb-4 text-3xl font-bold">
            Importance of Blockchain technology today 

            </h3>
            <p class="mb-10 text-gray-600">
            A Paradigm shift is taking place in today's market and everything is
becoming digitalized.
Blockchain technology will soon be the Fourth Industrial Revolution.
 The entire way we transact financially is changing and will be
changed forever.eg remove fees on financial transactions.
 Blockchain technology would remove physical contracts,
replace voting systems, land registries and passports and also
end the piracy of digital music, films, games, TV and other
products.In addition to that , Blockchain is cheaper because it eliminates middlemen and
hence there's no need to pay processing fees on transactions.


            </p>

          </article>
          <div class="my-5 flex mr-10 ml-10 items-center justify-center">
    <Link href="/">
  <button class=" mt-2 rounded-lg border-2 border-[#009A9A] bg-[#009A9A] px-6 py-2 font-medium text-white justify-center items-center transition hover:translate-y-1">
    
   Back to Courses
  </button>
  </Link>
</div>

        </main>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
