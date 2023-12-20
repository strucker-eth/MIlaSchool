import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Wallets = () => {
  return (
    <>
      <section
        id="Navbar"
        class="rounded-xl fixed top-0 w-full overflow-y-auto z-50"
      >
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
                  Introduction
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#section-2"
                >
                  Connect Wallet
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#section-3"
                >
                  Step-by-Step Guide on Creating a Blockchain Wallet with
                  MetaMask
                </a>
              </div>
            </div>
          </div>
          <article class="text-gray-800">
            <h2 class="mb-10 mt-4 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span class="text-[#009A9A] ">
                {" "}
                How to create and use a wallet
              </span>
            </h2>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              Introduction
            </h2>
            <p class="mb-3 text-gray-600">
              If you're new to the world of digital currencies and online
              transactions, creating a digital wallet is your first step towards
              navigating this exciting landscape. A digital wallet serves as
              your virtual pocket, allowing you to securely store, send, and
              receive various cryptocurrencies and digital assets.
              <br></br>
              Here's a simple guide to help you get started:
            </p>
            <p class="mb-8 p-4 text-gray-600">
          <strong> Step 1: Choose Your Wallet Type</strong>  <br /> 
There are different types of digital wallets, each catering to specific needs. The two main
categories are: <br />
<strong>a. Software Wallets: </strong><br /> These are applications or software programs that you can install on your
computer or mobile device. Examples include Exodus, My EtherWallet, and Trust Wallet.  <br /> 
 <strong>b. Hardware Wallets: </strong> <br />  Physical devices that store your cryptocurrency offline, offering enhanced
security. Popular options are Ledger Nano S and Trezor.
<br/>
<strong> Step 2: Research and Select a Wallet</strong>  <br /> 
Before making a choice, research various wallets to find one that aligns with your preferences
and needs. Consider factors like security features, ease of use, and the cryptocurrencies
supported.
<br />
<strong> Step 3: Download and Install</strong>  <br /> 
If you opt for a software wallet, visit the official website of the chosen wallet provider and
download the application. Follow the installation instructions, ensuring you download from a
trusted source to avoid potential security risks.
<br />
<strong> Step 4: Set Up Your Wallet</strong>  <br /> 
Once installed, launch the wallet application and follow the on-screen prompts to set up your
account. This usually involves creating a strong password and receiving a recovery seed—a
crucial backup in case you forget your password.
<br />
<strong> Step 5: Secure Your Wallet</strong>  <br /> 
Security is paramount in the world of digital wallets. Enable two-factor authentication (2FA) if
your chosen wallet supports it. This adds an extra layer of protection by requiring a secondary
verification method, such as a code sent to your mobile device.
<br />
<strong> Step 6: Fund Your Wallet</strong>  <br /> 
Now that your wallet is set up and secured, it's time to add funds. Depending on the wallet, you
can transfer funds from your bank account, receive cryptocurrency from someone else, or
purchase digital assets through the wallet's interface.
<br />
<strong> Step 7: Explore Features</strong>  <br /> 
Take some time to explore the features of your digital wallet. Familiarize yourself with sending
and receiving transactions, checking your balance, and any additional functionalities your
chosen wallet offers.
<br class="mt-4" />
<p class="mt-4">
Congratulations! You've successfully created and set up your digital wallet. As you become
more comfortable with digital transactions, you can explore additional features and even expand
your portfolio by investing in different cryptocurrencies. Always stay informed about security best
practices to protect your digital assets.
</p>
            </p>
            <h3 id="section-2" class="mb-4 text-3xl font-bold">
            Connect Wallet
            </h3>
            <p class="mb-3 text-gray-600">
            A Connect Wallet is a digital tool that allows users to securely store, manage, and interact with
their cryptocurrencies and digital assets. It serves as a bridge between users and
blockchain-based networks, enabling them to access decentralized applications (DApps), trade
digital assets, and participate in blockchain ecosystems.
            </p>
            <p class="mb-3 text-gray-600">
            Once you've set up a Connect Wallet, you can link it to various decentralized applications, such
as decentralized exchanges or blockchain-based games. This connection allows you to
seamlessly engage with these platforms while maintaining control over your assets without
relying on a centralized authority.

            </p>
            <p class="mb-3 text-gray-600">
            Remember, security is paramount in the crypto space. Always use strong, unique passwords
and enable additional security features like two-factor authentication. Understanding the basics
of your Connect Wallet is a crucial step for anyone entering the world of blockchain and
cryptocurrencies.

            </p>
            <h2 id="section-3" class="mb-4 text-3xl font-bold">
            Step-by-Step Guide on Creating a Blockchain Wallet with MetaMask
            </h2>
            <p class="mb-10 text-gray-600">
                          In the realm of blockchain and cryptocurrencies, having a secure and user-friendly wallet is
paramount. MetaMask, a popular browser extension, offers a seamless way to manage your
digital assets and interact with decentralized applications (dApps). This section will walk you
through the process of creating a blockchain wallet using MetaMask.
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
              A Paradigm shift is taking place in today's market and everything
              is becoming digitalized. Blockchain technology will soon be the
              Fourth Industrial Revolution. The entire way we transact
              financially is changing and will be changed forever.eg remove fees
              on financial transactions. Blockchain technology would remove
              physical contracts, replace voting systems, land registries and
              passports and also end the piracy of digital music, films, games,
              TV and other products.In addition to that , Blockchain is cheaper
              because it eliminates middlemen and hence there's no need to pay
              processing fees on transactions.
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

export default dynamic(() => Promise.resolve(Wallets), { ssr: false });
