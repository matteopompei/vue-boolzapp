let app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Lorenzo Bernardini",
        avatar: "assets/img/avatar-bernardini.png",
        visible: true,
        messages: [
          {
            text: "Hey king come stai?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Hai capito?",
            date: "10/01/2021 12:30",
            status: "received"
          },
          {
            text: "Che??",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Bravo",
            date: "10/01/2021 12:30",
            status: "received"
          },
          {
            text: "Fra ma che stai dicendo?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Bravo",
            date: "10/01/2021 12:30",
            status: "received"
          }
        ]
      },
      {
        name: "Simone Massaro",
        avatar: "assets/img/avatar-massaro.png",
        visible: true,
        messages: [
          {
            text: "Somaro ci facciamo una partita ad Halo?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Tocca!",
            date: "10/01/2021 12:30",
            status: "received"
          },
          {
            text: "Dai lesto, logga",
            date: "10/01/2021 12:30",
            status: "sent"
          }
        ]
      },
      {
        name: "Milan",
        avatar: "assets/img/avatar-milan.jpg",
        visible: true,
        messages: [
          {
            text: "Wewe",
            date: "10/01/2021 12:30",
            status: "received"
          },
          {
            text: "Hey",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Ci guardiamo il corso delle crypto per boomer oggi?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Peffò! Arrivo!",
            date: "10/01/2021 12:30",
            status: "received"
          }
        ]
      },
      {
        name: "Lorenzo Osnago",
        avatar: "assets/img/avatar-osnago.png",
        visible: true,
        messages: [
          {
            text: "Ma come fai ad essere così forte?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "...",
            date: "10/01/2021 12:30",
            status: "received"
          }
        ]
      },
      {
        name: "Simone Bruno",
        avatar: "assets/img/avatar-bruno.png",
        visible: true,
        messages: [
          {
            text: "Hey bro che fai?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "❄❄❄❄❄❄",
            date: "10/01/2021 12:30",
            status: "received"
          },
          {
            text: "Che?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Pronto?",
            date: "10/01/2021 12:30",
            status: "sent"
          },
          {
            text: "Dove sei Bruno???????",
            date: "10/01/2021 12:30",
            status: "sent"
          },
        ]
      },
    ],
  },
  methods: {

  }
});
