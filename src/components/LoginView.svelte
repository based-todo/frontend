<script>
    import { baseUrl } from "../model/auth";
    let email = '';
    let password = '';

    let remember = false;

    /**
   * @param {{ preventDefault: () => void; }} event
   */
    async function handleSignIn(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'mail': email,
                'passhash': password
            })
        });

        if (response.ok) {
            const { token } = await response.json();
            sessionStorage.setItem('authToken', token);
            if(remember) {
                localStorage.setItem('authToken', token);
            }
            window.location.href = '/';
        } else {
            const { message } = await response.json();
            alert("Login failed");
        }
    }

    /**
   * @param {{ preventDefault: () => void; }} event
   */
    async function handleGuestSignIn(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/v1/login/guest`, {
            method: 'POST',
        });

        if (response.ok) {
            const { token } = await response.json();
            sessionStorage.setItem('authToken', token);
            if(remember) {
                localStorage.setItem('authToken', token);
            }
            window.location.href = '/';
        } else {
            const { message } = await response.json();
            alert("Login failed");
        }
    }
</script>


<section class="w-full bg-neutral-800 overflow-hidden">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-neutral-700 border-neutral-800">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-3xl text-emerald-400">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-emerald-400">Your email</label>
                        <input type="email" name="email" id="email" bind:value={email} class="border sm:text-sm rounded-lg block w-full p-2.5 bg-neutral-800 border-emerald-400 placeholder-gray-400 text-white outline-none" placeholder="name@company.com">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-emerald-400">Password</label>
                        <input type="password" name="password" id="password" bind:value={password}  placeholder="••••••••" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-neutral-800 border-emerald-400 placeholder-gray-400 text-white outline-none">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" bind:value={remember} class="w-4 h-4 border accent-emerald-400 border-gray-300 rounded bg-emerald-400 ring-emerald-400 focus:ring-emerald-400">
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button on:click={handleSignIn} type="submit" class="w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-emerald-500 hover:bg-emerald-400">Sign in</button>
                    <p class="text-sm font-light text-gray-400">
                        Don’t have an account yet? <a href="/register" class="font-medium hover:underline text-emerald-400 hover:underline:text-emerald-400">Sign up</a> or

                    </p>
                    <p>
                        <button on:click={handleGuestSignIn} type="submit" class="-my-5 w-full text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-emerald-500 hover:bg-emerald-400">Sign in as guest</button>
                        <p class="text-sm font-light text-gray-400">
                </form>
            </div>
        </div>
    </div>
  </section>