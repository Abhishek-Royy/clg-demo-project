import React from "react";

const PackegePage = () => {
  return (
    <>
      <div class="bg-gradient-to-l from-zinc-800 to-blue-950 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Simple no-tricks pricing
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-400">
              If debugging is the process of removing bugs, then programming
              must be the process of putting them in.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div class="p-8 sm:p-10 lg:flex-auto">
              <h3 class="text-2xl font-bold tracking-tight text-white">
                Lifetime membership
              </h3>
              <p class="mt-6 text-base leading-7 text-gray-400">
                Most good programmers do programming not because they expect to
                get paid or get adulation by the public, but because it is fun
                to program.
              </p>
              <div class="mt-10 flex items-center gap-x-4">
                <h4 class="flex-none text-sm font-semibold leading-6 text-amber-300">
                  What’s included
                </h4>
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li class="flex gap-x-3 text-gray-500">
                  <svg
                    class="h-6 w-5 flex-none text-amber-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Private access
                </li>
                <li class="flex gap-x-3 text-gray-500">
                  <svg
                    class="h-6 w-5 flex-none text-amber-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Get lifetime access
                </li>
                <li class="flex gap-x-3 text-gray-500">
                  <svg
                    class="h-6 w-5 flex-none text-amber-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Live & video both available
                </li>
                <li class="flex gap-x-3 text-gray-500">
                  <svg
                    class="h-6 w-5 flex-none text-amber-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Completion certificate
                </li>
              </ul>
            </div>
            <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-gray-900">
                      ₹349
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      INR
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    After payment you will not get the money recipt,Because i
                    will spent it for eating Biriyani☻
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackegePage;
