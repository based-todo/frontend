<section class="w-full bg-gray-50 dark:bg-neutral-800">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-700 dark:border-neutral-800">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                class="text-3xl dark:text-white"
              >
                Sign up for an account
              </h1>
              <form class="space-y-4 md:space-y-6" id="register_form">
                <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-neutral-900 dark:text-emerald-400"
                      >Your username</label
                    >
                    <input
                      name="username"
                      id="username"
                      pattern={`[_a-zA-Z0-9]{3,}`}
                      class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-neutral-800 dark:border-emerald-400 dark:placeholder-gray-400 text-white outline-none"
                      placeholder="username"
                    />
                  </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-emerald-400"
                    >Your email</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-neutral-800 dark:border-emerald-400 dark:placeholder-gray-400 text-white outline-none"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-emerald-400"
                    >Password</label
                  >
                  <input
                    type="password"
                    pattern={`[_a-zA-Z0-9!@#$%^&*]{8,}`}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-neutral-800 dark:border-emerald-400 dark:placeholder-gray-400 text-white outline-none"
                  />
                </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-500 dark:hover:bg-emerald-400">Sign up</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-emerald-400">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>