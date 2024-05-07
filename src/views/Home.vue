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

</template>

<script>
import moment from 'moment'
import homeImg from '@/assets/home_bg.jpg'

export default {
  name: 'Home',
  data () {
    return {
      home_img: homeImg,
      tab: null,
      leaveFrom: 'Dubai',
      goingTo: 'New York',
      leave: new Date(),
      retrn: new Date(),
      offerTab: null
    }
  },
  computed: {
    formattedLeave () {
        return this.leave ? moment(this.leave).format('DD MMM, ddd') : ''
    },
    formattedRetrn () {
        return this.retrn ? moment(this.retrn).format('DD MMM, ddd') : ''
    },
  }
};
</script>
