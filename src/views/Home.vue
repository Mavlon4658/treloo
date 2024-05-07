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
            <v-col cols="4" flat class="pa-0 px-3" v-for="i in 5" :key="i">
              <v-card flat class="offer_card">
                <div class="offer_card__head">
                  <img src="" alt="">
                </div>
                <v-card-text class="offer_card__body">
                  helo word
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>

      </v-tabs-window>
      <!-- Tab body end -->
    </main-container>
  </section>
  <!-- Offers end -->

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
