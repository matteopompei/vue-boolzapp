let app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Lorenzo Bernardini",
        avatar: "assets/img/avatar-bernardini.png",
        visible: true,
        active: false,
        messages: [
          {
            text: "Mi piace lamentarmi della mia finta incompetenza",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Hai capito?",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Sei sempre il solito!",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,

          },
          {
            text: "Lo fanno",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          }
        ]
      },
      {
        name: "Simone Massaro",
        avatar: "assets/img/avatar-massaro.png",
        visible: true,
        active: false,
        messages: [
          {
            text: "Somaro ci facciamo una partita ad Halo?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Tocca!",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          }
        ]
      },
      {
        name: "Република Србија",
        avatar: "assets/img/avatar-milan.jpg",
        visible: true,
        active: false,
        messages: [
          {
            text: "Wewe",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Hey",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Ci guardiamo il corso delle crypto per boomer oggi?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "E quando lavoriamo a Massaro Runner?",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Appena abbiamo un momento libero",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
        ]
      },
      {
        name: "Lorenzo Osnago",
        avatar: "assets/img/avatar-osnago.png",
        visible: true,
        active: false,
        messages: [
          {
            text: "Ma come fai ad essere così forte?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "...",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          }
        ]
      },
      {
        name: "Simone Bruno",
        avatar: "assets/img/avatar-bruno.png",
        visible: true,
        active: false,
        messages: [
          {
            text: "Hey bro che fai?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "❄❄❄❄❄❄",
            date: "10/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Che?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Pronto?",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Dove sei Bruno???????",
            date: "10/01/2021 12:30",
            status: "sent",
            openMessageOption: false,
          }
        ]
      },
    ],
    focus: 0,
    inputMessage: "",
    inputSearch: "",
    hiddenClass: false,
  },
  methods: {
    changeChat: function(index) {
      this.focus = index;
    },
    sendMessage: function() {
      let checkSpace = this.inputMessage.replace(/ /g, "");
      if (checkSpace != "") {
        this.contacts[this.focus].messages.push({
          text: this.inputMessage,
          date: "10/01/2021 12:30",
          status: "sent",
          openMessageOption: false,
        });
        this.inputMessage = "";
        setTimeout(this.sendReply, 1000);
      };
    },
    sendReply: function() {
      this.contacts[this.focus].messages.push({
        text: "Bravo",
        date: "10/01/2021 12:30",
        status: "received",
        openMessageOption: false,
      });
    },
    deleteMessage: function(index) {
      this.contacts[this.focus].messages.splice(index, 1);
    }
  }
});
