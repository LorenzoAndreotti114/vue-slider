const { createApp } = Vue;

createApp ({

  data() {

    return {

      curImg: 0,
      caroselChecker: false,

      arrayImages: [
        {
          image: "./img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
          number: 0
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
          number: 1
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          number: 2
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
          number: 3
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
          number: 4
        },
      ],
    }
  },

  created () {


  },

  methods: {

    showNext: function () {
      if (this.curImg >= this.arrayImages.length - 1) {
        this.curImg = 0;
      }
      else {
        this.curImg++
      }

    },

    showPrev: function () {
      if (this.curImg === 0) {
        this.curImg = this.arrayImages.length -1;
      }
      else {
        this.curImg--
      }

    },

    showCurImg: function (index) {
      this.curImg = index;
    },

    toggleCarosel: function () {

      if (this.caroselChecker === false) {

        this.caroselChecker = true;

        this.normalIntervall = setInterval (this.showNext, 2000);
      }
      else {
        this.caroselChecker = false;

        clearInterval(this.normalIntervall);

      }

      console.log("normal carosel");
      console.log(this.caroselChecker);
    },

  }

}).mount("#app")
