<template>

  <!-- Home -->
  <section class="position-relative home">
    <img :src="home_img" class="position-absolute w-100 h-100 home__bg" alt="">
    <main-container class="text-center text-white d-flex flex-column ga-10 c home__container">
      <h1>Discover Your Life, Travel <br> Where You Want</h1>
      <p>Would you explore natur paradise in the world, let’s find the best <br> destination in world with us.</p>
    </main-container>
  </section>
  <!-- Home end -->
  
  <!-- Home card -->
  <section class="flights">
    <main-container>
      <!-- Tab head -->
      <v-tabs
        v-model="tab"
        bg-color="white"
        class="tab__head w-auto d-inline-flex ga-4"
        rounded="25px"
      >
        <v-tab value="one">
          <img :src="require('@/assets/pilot.svg')" alt="">
          Fight
        </v-tab>
        <v-tab class="" value="two">
          <img class="me-1" :src="require('@/assets/hotel.svg')" alt="">
          Hotel
        </v-tab>
      </v-tabs>
      <!-- Tab head end -->

      <!-- Tab body -->
      <v-tabs-window v-model="tab">

        <!-- Tab item -->
        <v-tabs-window-item value="one">
          <v-form class="d-flex align-stretch justify-space-between ga-10">
            <div class="form_group w-100 d-flex align-stretch ga-8">
              <div class="form_control d-flex align-center w-75">
                <div class="w-100">
                  <span class="title">Living From</span>
                  <v-select
                    class="border-0"
                    v-model="leaveFrom"
                    :items="['Dubai', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </div>
  
                <img :src="require('@/assets/pilot-2.svg')" class="form_control__icon" alt="">
  
                <div class="w-100">
                  <span class="title">Living From</span>
                  <v-select
                    v-model="goingTo"
                    :items="['New York', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </div>
              </div>

              <div class="form_control d-flex align-center w-100">
                <div class="w-100">
                  <span class="title d-flex align-center ga-2">
                    Leave
                    <img :src="require('@/assets/pilot-right.svg')" alt="">
                  </span>
                  <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field :value="formattedLeave" v-bind="props" class="text-black date_picker_inp"></v-text-field>
                    </template>
                    <v-date-picker v-model="leave"></v-date-picker>
                  </v-menu>

                </div>
  
                <img :src="require('@/assets/calendar.svg')" class="form_control__icon" alt="">
  
                <div class="w-100">
                  <span class="title d-flex align-center ga-2">
                    Return
                    <img :src="require('@/assets/pilot-left.svg')" alt="">
                  </span>
                  <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field :value="formattedRetrn" v-bind="props" class="text-black date_picker_inp"></v-text-field>
                    </template>
                    <v-date-picker v-model="retrn"></v-date-picker>
                  </v-menu>
                </div>
              </div>
            </div>

            <v-btn flat class="submit">
              <img :src="require('@/assets/search.svg')" alt="">
            </v-btn>
          </v-form>
        </v-tabs-window-item>
        <!-- Tab item end -->
        

        <!-- Tab item -->
        <v-tabs-window-item value="two">
          <v-form class="d-flex align-stretch justify-space-between ga-10">
            <div class="form_group w-100 d-flex align-stretch ga-8">
              <div class="form_control d-flex align-center w-75">
                <div class="w-100">
                  <span class="title">Living From</span>
                  <v-select
                    class="border-0"
                    v-model="leaveFrom"
                    :items="['Dubai', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </div>
  
                <img :src="require('@/assets/pilot-2.svg')" class="form_control__icon" alt="">
  
                <div class="w-100">
                  <span class="title">Living From</span>
                  <v-select
                    v-model="goingTo"
                    :items="['New York', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </div>
              </div>

              <div class="form_control d-flex align-center w-100">
                <div class="w-100">
                  <span class="title d-flex align-center ga-2">
                    Leave
                    <img :src="require('@/assets/pilot-right.svg')" alt="">
                  </span>
                  <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field :value="formattedLeave" v-bind="props" class="text-black date_picker_inp"></v-text-field>
                    </template>
                    <v-date-picker v-model="leave"></v-date-picker>
                  </v-menu>

                </div>
  
                <img :src="require('@/assets/calendar.svg')" class="form_control__icon" alt="">
  
                <div class="w-100">
                  <span class="title d-flex align-center ga-2">
                    Return
                    <img :src="require('@/assets/pilot-left.svg')" alt="">
                  </span>
                  <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field :value="formattedRetrn" v-bind="props" class="text-black date_picker_inp"></v-text-field>
                    </template>
                    <v-date-picker v-model="retrn"></v-date-picker>
                  </v-menu>
                </div>
              </div>
            </div>

            <v-btn flat class="submit">
              <img :src="require('@/assets/search.svg')" alt="">
            </v-btn>
          </v-form>
        </v-tabs-window-item>
        <!-- Tab item end -->

      </v-tabs-window>
      <!-- Tab body end -->
    </main-container>
  </section>
  <!-- Home card end -->

  <!-- Offers -->
  <section class="offer">
    <main-container>
      <h2 class="text-center text-h2 offer__title">Special Upcoming Offers</h2>

      <!-- Tab head -->
      <v-tabs
        v-model="offerTab"
        bg-color="transparent"
        class="tab_head justify-center flex-none mb-10"
      >
        <v-tab value="one">Team</v-tab>
        <v-tab value="two">Couple</v-tab>
        <v-tab value="three">Family</v-tab>
      </v-tabs>
      <!-- Tab head end -->

      <!-- Tab body -->
      <v-tabs-window v-model="offerTab">

        <v-tabs-window-item value="one">
          <v-row class="w-100">

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_1.jpg')" alt="">
                  <span>14 FEB 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 3 Days, 3 Nights</p>
                  <h3>Loga Sea</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">700$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_2.jpg')" alt="">
                  <span>18 JUN 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4 indigo">Adventure</span> 4 Days, 3 Nights</p>
                  <h3>Ansgar Scheffold</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">400$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_3.jpg')" alt="">
                  <span>22 DEC 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 7 Days, 6 Nights</p>
                  <h3>Lona X</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">340$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <v-row class="w-100">

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_1.jpg')" alt="">
                  <span>14 FEB 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 3 Days, 3 Nights</p>
                  <h3>Loga Sea</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">700$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_2.jpg')" alt="">
                  <span>18 JUN 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4 indigo">Adventure</span> 4 Days, 3 Nights</p>
                  <h3>Ansgar Scheffold</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">400$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_3.jpg')" alt="">
                  <span>22 DEC 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 7 Days, 6 Nights</p>
                  <h3>Lona X</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">340$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <v-row class="w-100">

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_1.jpg')" alt="">
                  <span>14 FEB 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 3 Days, 3 Nights</p>
                  <h3>Loga Sea</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">700$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_2.jpg')" alt="">
                  <span>18 JUN 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4 indigo">Adventure</span> 4 Days, 3 Nights</p>
                  <h3>Ansgar Scheffold</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">400$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="4" flat class="pa-0 pa-3">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img :src="require('@/assets/offer_card_3.jpg')" alt="">
                  <span>22 DEC 2022</span>
                </div>
                <v-card-text class="offer_card__body">
                  <p class="d-flex align-center ga-3"><span class="px-4">Relax</span> 7 Days, 6 Nights</p>
                  <h3>Lona X</h3>
                  <div class="d-flex align-center justify-space-between price">
                    <div class="price_value"><span class="d-inline">340$</span>/Person</div>
                    <router-link to="#" class="link">Book Now</router-link>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

          </v-row>
        </v-tabs-window-item>

      </v-tabs-window>
      <!-- Tab body end -->
    </main-container>
  </section>
  <!-- Offers end -->

  <!-- Travel -->
  <section class="travel">
    <main-container>
      <v-row class="justify-space-between align-center">
        <v-col cols="5" class="position-relative travel_card pa-0">
          <img :src="require('@/assets/travel_bg.jpg')" alt="">
          <ul>
            <li class="text-center">
              <span>300+</span>
              <p>DESTINATIONS</p>
            </li>
            <li class="text-center">
              <span>5000+</span>
              <p>TOURISTS</p>
            </li>
            <li class="text-center">
              <span>150+</span>
              <p>HOTELS</p>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" class="pa-0">
          <div class="d-flex flex-column align-start ga-5 travel_content">
            <h2 class="text-h2">Travel Any Corner of The World With Us</h2>
            <div class="d-flex flex-column ga-10">
              <p>Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us. Would you explore nature paradise in the world, let’s find the best destination in world with us.</p>
              <p>Would you explore nature paradise in the world, let’s find the best destination in world with us.</p>
            </div>
            <v-btn>Contact Us</v-btn>
          </div>
        </v-col>
      </v-row>
    </main-container>
  </section>
  <!-- Travel end -->

  <!-- Destination -->
  <section class="destination">
    <main-container>
      <h2 class="text-h2 text-center mb-10">Recommended Destination</h2>

      <!-- Tab head -->
      <v-tabs
        v-model="destinationTab"
        bg-color="transparent"
        class="tab_head"
      >
        <v-tab value="one">Populor</v-tab>
        <v-tab value="two">Adventure</v-tab>
        <v-tab value="three">Beath</v-tab>
      </v-tabs>
      <!-- Tab head end -->

      <!-- Tab body -->
      <v-tabs-window v-model="destinationTab">
        <v-tabs-window-item value="one">
          <v-row>
            <v-col cols="3" class="pa-0">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_1.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>3.4</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="3" class="pa-0">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_2.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>4.5</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="3" class="pa-0">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_3.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>4.2</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="3" class="pa-0">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_4.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>3.5</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <v-row>
            <v-col cols="3" class="pa-0" v-for="i in 4" :key="i">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_1.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>3.4</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <v-row>
            <v-col cols="3" class="pa-0" v-for="i in 4" :key="i">
              <v-card flat class="ma-3">
                <div class="card_head">
                  <img :src="require('@/assets/destination_card_1.jpg')" alt="" class="main_img">
                  <p class="d-flex align-center">
                    <img :src="require('@/assets/star.svg')" alt="">
                    <span>3.4</span>
                  </p>
                </div>
                <div class="card_body">
                  <h3>Kina Mountain</h3>
                  <p class="d-flex align-start">
                    <img :src="require('@/assets/location.svg')" alt="">
                    <span>Cambodia</span>
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
      <!-- Tab body end -->
    </main-container>
  </section>
  <!-- Destination end -->

  <!-- Slider -->
  <section class="slider">
    <main-container>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in 5" :key="i">
            <v-card flat class="text-center">
              <img :src="require('@/assets/slider_card_icon.svg')" class="icon" alt="">
              <p>Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.</p>
              <h3>-Vand D</h3>
              <h4>Happy Treloo</h4>
              <div class="avatar">
                <img :src="require('@/assets/avatar_bg.svg')" alt="" class="bg">
                <img :src="require('@/assets/user_1.png')" alt="" class="rounded-circle user" width="100" height="100">
                <span class="d-flex align-center px-1 rounded-pill">
                  <img :src="require('@/assets/star.svg')" alt="">
                  4.5
                </span>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center ga-5">
        <v-btn flat @click="swp.slidePrev()">
          <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1429 1.28564L2.85715 11.5714L13.1429 21.8571" stroke="#3E86F5" stroke-width="3"/>
          </svg>
        </v-btn>
        <v-btn flat @click="swp.slideNext()">
          <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85714 1.28564L12.1429 11.5714L1.85714 21.8571" stroke="#3E86F5" stroke-width="3"/>
          </svg>
        </v-btn>
      </div>
    </main-container>
  </section>
  <!-- Slider end -->

  <!-- Discount -->
  <section class="discount">
    <main-container class="text-center d-flex flex-column align-center ga-10 discount_content">
      <img :src="require('@/assets/earth.jpg')" width="100%" height="100%" alt="">
      <h2 class="text-h2 text-white">Don’t Miss The 50% Discount if <br/> You register Today</h2>
      <router-link to="#">Register Today</router-link>
    </main-container>
  </section>
  <!-- Discount end -->

</template>

<script>
import moment from 'moment'
import homeImg from '@/assets/home_bg.jpg'

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Home',
  components: {
    Swiper,
  },
  data () {
    return {
      home_img: homeImg,
      tab: null,
      leaveFrom: 'Dubai',
      goingTo: 'New York',
      leave: new Date(),
      retrn: new Date(),
      offerTab: null,
      destinationTab: null,
      swp: null,
    }
  },
  computed: {
    formattedLeave () {
        return this.leave ? moment(this.leave).format('DD MMM, ddd') : ''
    },
    formattedRetrn () {
        return this.retrn ? moment(this.retrn).format('DD MMM, ddd') : ''
    },
  },
  mounted () {
    this.swp = new Swiper('.slider .swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    });
  },
};
</script>
