<template>
  <footer class="bg-[#0D1114] text-white pt-12">
  <div class="container px-12 mx-auto"> <!-- More padding on left & right -->
    <div class="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-2 lg:grid-cols-4"> <!-- Smaller horizontal gap -->



        <!-- Column 1: Company Info -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-7 font-raleway text-bold">Dewi</h2>
          <p class="mb-1 text-sm">no 25, 1st cross</p>
          <p class="mb-3 text-sm">jayanagar, Bangalore 560026</p>
          <p class="text-sm font-semibold">Phone: <span class="font-normal">+91 123 456 789</span></p>
          <p class="text-sm font-semibold">Email: <span class="font-normal">info@example.com</span></p>

          <!-- Social Icons -->
          <div class="flex gap-4 mt-6">
            <a href="#" class="flex items-center justify-center w-10 h-10 text-xl transition border border-gray-600 rounded-full hover:border-orange-500 hover:text-orange-500">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 text-xl transition border border-gray-600 rounded-full hover:border-orange-500 hover:text-orange-500">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 text-xl transition border border-gray-600 rounded-full hover:border-orange-500 hover:text-orange-500">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 text-xl transition border border-gray-600 rounded-full hover:border-orange-500 hover:text-orange-500">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Useful Links -->
        <div>
          <h4 class="mb-4 text-lg font-bold">Useful Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Home</a></li>
            <li><a href="#about" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>About us</a></li>
            <li><a href="#services" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Services</a></li>
            <li><a href="#services" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Terms of service</a></li>
            <li><a href="#footer" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Privacy policy</a></li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h4 class="mb-4 text-lg font-bold">Our Services</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Web Design</a></li>
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Web Development</a></li>
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Product Management</a></li>
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Marketing</a></li>
            <li><a href="#" class="flex items-center hover:text-orange-500"><i class="mr-2 text-orange-500 bi bi-chevron-right"></i>Graphic Design</a></li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div>
          <h4 class="mb-4 text-lg font-bold">Our Newsletter</h4>
          <p class="mb-4 text-sm">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form class="flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Your Email"
              class="flex-1 p-2 text-sm text-white bg-transparent border border-gray-600 rounded-md outline-none focus:border-orange-500 sm:rounded-l-md sm:rounded-r-none"
            />
            <button 
              type="submit"
              class="px-4 py-2 mt-2 text-white transition bg-orange-500 rounded-md hover:bg-orange-600 sm:mt-0 sm:ml-0 sm:rounded-r-md sm:rounded-l-none"
            >
            Subscribe
            </button>
          </form>
        </div>


      </div>

      <!-- Bottom section -->
      <div class="pt-6 mt-10 text-sm text-center border-t border-gray-800">
        <p>&copy; 2025 <strong class="text-white font-raleway">Dewi</strong>. All Rights Reserved.</p>
        <p class="mt-2 text-xs">Designed by <a href="#" class="text-orange-500 hover:underline">YourCompany</a></p>
      </div>
    </div>
  </footer>
</template>
