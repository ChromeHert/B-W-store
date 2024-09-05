import React from 'react'

const Gridpixel = () => {
  return (
      <>
          <section>
              <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                  <h2 className="text-2xl text-left font-bold md:text-3xl">Portfolio</h2>
                  <p className="sm:text-base text-left mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16">
                      Lorem ipsum dolor sit amet elit ut aliquam
                  </p>
                  <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
                      <a
                          href="#"
                          className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
                      >
                          <img
                              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                              alt=""
                              className="inline-block h-full w-full rounded-lg object-cover"
                          />
                          <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                              <p className="text-sm font-medium sm:text-xl">Project Name</p>
                              <p className="text-sm sm:text-base">Microsoft</p>
                          </div>
                      </a>
                      <a href="#" className="relative flex h-[300px] items-end">
                          <img
                              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                              alt=""
                              className="inline-block h-full w-full rounded-lg object-cover"
                          />
                          <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                              <p className="text-sm font-medium sm:text-xl">Project Name</p>
                              <p className="text-sm sm:text-base">Paypal</p>
                          </div>
                      </a>
                      <a href="#" className="relative flex h-[300px] items-end">
                          <img
                              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                              alt=""
                              className="inline-block h-full w-full rounded-lg object-cover"
                          />
                          <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                              <p className="text-sm font-medium sm:text-xl">Project Name</p>
                              <p className="text-sm sm:text-base">Airbnb</p>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                      <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections</h2>

                      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                          <div>
                              <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                  <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                      <span class="text-gray-500">Men</span>
                                      <span class="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                  </div>
                              </a>
                          </div>
                          <div>
                              <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                  <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by engin akyurt" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                      <span class="text-gray-500">Women</span>
                                      <span class="text-lg font-bold text-gray-800 lg:text-xl">Summer Season</span>
                                  </div>
                              </a>
                          </div>
                          <div>
                              <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                  <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                      <span class="text-gray-500">Men</span>
                                      <span class="text-lg font-bold text-gray-800 lg:text-xl">Streetwear</span>
                                  </div>
                              </a>
                          </div>
                          <div>
                              <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                  <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                  <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                      <span class="text-gray-500">Women</span>
                                      <span class="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Gridpixel