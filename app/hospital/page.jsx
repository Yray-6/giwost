import React from 'react'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/Floating'

export default function page() {
  return (
    <div>
        <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-[60vh] relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="font-bold relative z-10 text-[2.5rem] lg:text-[4rem] font-mono">
          Hospital Partners
        </p>
        <div className="flex justify-center gap-2 items-center">
          <hr className="w-12 border border-red-500"></hr>
          <p className="relative z-10 text-sm">Services</p>
          <hr className="w-12 border border-red-500"></hr>
        </div>
      </div>
      <header class="bg-blue-600 text-white py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl md:text-4xl font-bold text-center">List of Nigerian Hospitals by State</h1>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8">
    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">1. Lagos State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Victory Medical Centre; 16/18, Oyekan Street, Surulere, Lagos</li>
        <li class="text-base md:text-lg">Lagoon Hospital; 5, Parkview Estate, Ikoyi, Lagos</li>
        <li class="text-base md:text-lg">Reddington Hospital; 12, Idowu Martins Street, Victoria Island, Lagos</li>
        <li class="text-base md:text-lg">St. Nicholas Hospital; 57, Campbell Street, Lagos Island, Lagos</li>
        <li class="text-base md:text-lg">Eko Hospital; 31, Mobolaji Bank Anthony Way, Ikeja, Lagos</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">2. Kano State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Aminu Kano Teaching Hospital; Zaria Road, Kano</li>
        <li class="text-base md:text-lg">Murtala Muhammad Specialist Hospital; Muhammadu Rumfa Road, Kano</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">3. Rivers State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University of Port Harcourt Teaching Hospital; East-West Road, Port Harcourt</li>
        <li class="text-base md:text-lg">Braitwaite Memorial Specialist Hospital; 9 Harley Street, Port Harcourt</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">4. Kaduna State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Garkuwa Specialist Hospital; 30 Madugu Link, Off Court Road, Kaduna</li>
        <li class="text-base md:text-lg">Barau Dikko Teaching Hospital; Tafawa Balewa Way, Kaduna</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">5. Enugu State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">National Orthopedic Hospital; Enugu</li>
        <li class="text-base md:text-lg">University of Nigeria Teaching Hospital; Ituku-Ozalla, Enugu</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">6. Kwara State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Sobi Specialist Hospital; Sobi Road, Ilorin</li>
        <li class="text-base md:text-lg">General Hospital, Ilorin; Taiwo Road, Ilorin</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">7. Ondo State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Mother and Child Hospital; Oke-Aro, Akure</li>
        <li class="text-base md:text-lg">University of Medical Sciences Teaching Hospital; Ondo</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">8. Abia State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Umuahia</li>
        <li class="text-base md:text-lg">Abia State University Teaching Hospital; Aba</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">9. Anambra State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Nnamdi Azikiwe University Teaching Hospital; Nnewi</li>
        <li class="text-base md:text-lg">Chukwuemeka Odumegwu Ojukwu University Teaching Hospital; Awka</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">10. Edo State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University of Benin Teaching Hospital; Benin City</li>
        <li class="text-base md:text-lg">Stella Obasanjo Hospital; Sapele Road, Benin City</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">11. Ogun State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Idi-Aba, Abeokuta</li>
        <li class="text-base md:text-lg">Babcock University Teaching Hospital; Ilishan-Remo</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">12. Oyo State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University College Hospital; Ibadan</li>
        <li class="text-base md:text-lg">Adeoyo Maternity Hospital; Yemetu, Ibadan</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">13. Cross Rivers Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University of Calabar Teaching Hospital; Calabar</li>
        <li class="text-base md:text-lg">General Hospital; Ikom</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">14. Uyo, Akwa Ibom Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University of Uyo Teaching Hospital; Uyo</li>
        <li class="text-base md:text-lg">Ibom Specialist Hospital; Uyo</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">15. Yenegoa, Bayelsa State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Yenagoa</li>
        <li class="text-base md:text-lg">Niger Delta University Teaching Hospital; Okolobiri</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">16. Nasarawa State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Dalhatu Araf Specialist Hospital; Lafia</li>
        <li class="text-base md:text-lg">Federal Medical Centre; Keffi</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">17. Benue State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Makurdi</li>
        <li class="text-base md:text-lg">Benue State University Teaching Hospital; Makurdi</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">18. Kogi State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Lokoja</li>
        <li class="text-base md:text-lg">Kogi State Specialist Hospital; Lokoja</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">19. Taraba State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Federal Medical Centre; Jalingo</li>
        <li class="text-base md:text-lg">Specialist Hospital; Jalingo</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">20. Bauchi State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Abubakar Tafawa Balewa University Teaching Hospital; Bauchi</li>
        <li class="text-base md:text-lg">Federal Medical Centre; Azare</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">21. Borno State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">University of Maiduguri Teaching Hospital; Maiduguri</li>
        <li class="text-base md:text-lg">Borno State Specialist Hospital; Maiduguri</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">22. Jos, Plateau State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Jos University Teaching Hospital; Jos</li>
        <li class="text-base md:text-lg">Plateau State Specialist Hospital; Jos</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">23. Kwara State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Fatima Hospital; Along specialist hospital road, Alagbado, Kwara, Ilorin</li>
        <li class="text-base md:text-lg">Olalomi Hospital; Olalomi street, Dr. Tunji Olagunji, Offa, Kwara state KW, Yilata street, opp Gidado mosque</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">24. Ekiti State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Precious Life Specialist Clinics; 1 Kate Afolalu Close, Adjacent Tinuola Maximum School, Federal Housing Estate, Ado-Ekiti</li>
      </ul>
    </section>

    <section class="mb-8">
      <h3 class="text-xl md:text-2xl font-semibold mb-2">25. Ebonyi State Hospitals:</h3>
      <ul class="space-y-2">
        <li class="text-base md:text-lg">Chitom Rapha Hospital and Maternity; No. 19 Urochukwu Street Abakiliki</li>
      </ul>
    </section>

    <section class="mt-12">
      <p class="text-base md:text-lg font-semibold">For all inquiries, please call our office line to speak with Mr. Isaac, the program coordinator:</p>
      <p class="text-base md:text-lg">08135100764, 08138270424</p>
    </section>
  </main>
      <Partners/>
      <Footer/>
      <FloatingWhatsApp/>
    </div>
  )
}
