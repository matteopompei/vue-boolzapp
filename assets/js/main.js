let app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Lorenzo Bernardini",
        avatar: "assets/img/avatar-bernardini.png",
        visible: true,
        active: false,
        status: "Ultimo accesso il 19/01/2021 alle 12:38",
        options: false,
        messages: [
          {
            text: "Mi piace lamentarmi della mia finta incompetenza",
            date: "19/01/2021 12:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Hai capito?",
            date: "19/01/2021 12:31",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Sei sempre il solito!",
            date: "19/01/2021 12:35",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Lo fanno",
            date: "19/01/2021 12:38",
            status: "received",
            openMessageOption: false,
          },
        ],
      },
      {
        name: "Simone Massaro",
        avatar: "assets/img/avatar-massaro.png",
        visible: true,
        active: false,
        options: false,
        status: "Ultimo accesso il 16/01/2021 alle 05:40",
        messages: [
          {
            text: "Somaro ci facciamo una partita ad Halo?",
            date: "16/01/2021 04:05",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Tocca!",
            date: "16/01/2021 04:10",
            status: "received",
            openMessageOption: false,
          },
        ],
      },
      {
        name: "Република Србија",
        avatar: "assets/img/avatar-milan.jpg",
        visible: true,
        active: false,
        options: false,
        status: "Ultimo accesso il 15/01/2021 alle 10:14",
        messages: [
          {
            text: "Wewe",
            date: "15/01/2021 08:30",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Hey",
            date: "15/01/2021 08:34",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Ci guardiamo il corso delle crypto per boomer oggi?",
            date: "15/01/2021 08:37",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "E quando lavoriamo a Massaro Runner?",
            date: "15/01/2021 08:38",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Appena abbiamo un momento libero",
            date: "15/01/2021 08:38",
            status: "sent",
            openMessageOption: false,
          },
        ],
      },
      {
        name: "Lorenzo Osnago",
        avatar: "assets/img/avatar-osnago.png",
        visible: true,
        active: false,
        options: false,
        status: "Ultimo accesso il 14/01/2021 alle 13:41",
        messages: [
          {
            text: "Ma come fai ad essere così forte?",
            date: "10/01/2021 10:00",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "...",
            date: "10/01/2021 13:27",
            status: "received",
            openMessageOption: false,
          },
        ],
      },
      {
        name: "Simone Bruno",
        avatar: "assets/img/avatar-bruno.png",
        visible: true,
        active: false,
        options: false,
        status: "Ultimo accesso il 15/03/2012 alle 15:45",
        messages: [
          {
            text: "Hey bro che fai?",
            date: "15/03/2012 15:10",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "❄❄❄❄❄❄",
            date: "15/03/2012 15:45",
            status: "received",
            openMessageOption: false,
          },
          {
            text: "Che?",
            date: "15/03/2012 15:55",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Pronto?",
            date: "15/03/2012 23:40",
            status: "sent",
            openMessageOption: false,
          },
          {
            text: "Dove sei Bruno???????",
            date: "27/10/2012 17:15",
            status: "sent",
            openMessageOption: false,
          },
        ],
      },
    ],
    appLoading: true,
    focus: -1,
    inputMessage: "",
    inputSearch: "",
    hiddenClass: false,
    darkMode: false,
    introImg: "assets/img/intro-light.jpg",
    newChatPopup: false,
    newContactName: "",
    newContactAvatar: "",
    answersArr: [
      "Ma dici a me?",
      "Il cammino dell'uomo timorato è minacciato da ogni parte dalle iniquità degli esseri egoisti e dalla tirannia degli uomini malvagi. Benedetto sia colui che nel nome della carità e della buona volontà conduce i deboli attraverso la valle delle tenebre, perché egli è in verità il pastore di suo fratello e il ricercatore dei figli smarriti. E la mia giustizia calerà sopra di loro con grandissima vendetta e furiosissimo sdegno su coloro che si proveranno ad ammorbare e infine a distruggere i miei fratelli. E tu saprai che il mio nome è quello del Signore quando farò calare la mia vendetta sopra di te!",
      "Uno stregone non è mai in ritardo né in anticipo. Arriva precisamente quando intende farlo.",
      "Qual è la cosa più grossa che hai perso a testa o croce?",
      "Avvampando gli angeli caddero; profondo il tuono riempì le loro rive, bruciando con i roghi dell'orco.",
      "Non cedete loro niente! Ma prendete da loro tutto!",
      "Come diceva John Wayne: \"Un giorno senza sangue è come un giorno senza sole\".",
      "I morti sanno soltanto una cosa: che è meglio essere vivi.",
      "Presto, tutti quanti ci troviamo faccia a faccia con la scelta tra fare quello che è più giusto o quello che è più facile fare",
      "Allora è vero: gli animali sentono il male!",
      "Non so cosa facciano quattro nove, ma l'asso mi pare una carta abbastanza alta!",
      "Nessuno più chiamarmi fifone!",
      "Non c'è nulla di più fuorviante dell'ovvio.",
      "Cosa sarebbe peggio? Vivere da mostro o morire da uomo per bene?",
      "Io non voglio morire sobrio.",
      "Che vuol dire \"reale\"? Dammi una definizione di \"reale\".",
      "Au Revoir, Shosanna!",
      "Mi piace come muori, giovane...",
      "Io non leggo il copione, il copione legge me!",
      "Corri Forrest, corri!",
      "Io ho scelto di non scegliere la vita: ho scelto qualcos'altro.",
      "Salute, Butterfly. Il bosco è magnifico, profondo all'imbrunire. E io ho promesse da mantenere e miglia da percorrere prima di dormire. Mi hai sentito Butterfly? Miglia da percorrere prima di dormire!",
    ],
  },
  methods: {
    changeChat: function (index) {
      this.focus = index;
    },
    sendMessage: function (focus) {
      let checkSpace = this.inputMessage.replace(/ /g, "");
      if (checkSpace != "") {
        this.contacts[focus].messages.push({
          text: this.inputMessage,
          date: dayjs().format("DD/MM/YYYY HH:mm"),
          status: "sent",
          openMessageOption: false,
        });
        this.updateScroll();
        this.inputMessage = "";
        if (this.contacts[focus].status != "Sta scrivendo...") {
          setTimeout(() => {
            this.contacts[focus].status = "Online";
          }, 500);
          setTimeout(() => {
            this.contacts[focus].status = "Sta scrivendo...";
          }, 1500);
        }
        setTimeout(() => {
          this.sendReply(focus);
        }, 2000);
      }
    },
    sendReply: function (focus) {
      this.contacts[focus].messages.push({
        text: this.answersArr[Math.floor(Math.random() * this.answersArr.length)],
        date: dayjs().format("DD/MM/YYYY HH:mm"),
        status: "received",
        openMessageOption: false,
      });
      this.updateScroll();
      this.contacts[focus].status = "Online";
      setTimeout(() => {
        this.contacts[focus].status =
          "Ultimo accesso oggi alle " + dayjs().format("HH:mm");
      }, 2000);
    },
    deleteMessage: function (index) {
      this.contacts[this.focus].messages.splice(index, 1);
    },
    updateScroll: function () {
      let chat = document.getElementById("chat");
      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight;
      }, 0);
    },
    deleteAll: function () {
      this.contacts[this.focus].messages.splice(
        0,
        this.contacts[this.focus].messages.length
      );
    },
    deleteChat: function (index) {
      this.focus = -1;
      this.contacts.splice(index, 1);
    },
    newChat: function () {
      this.newChatPopup = false;
      this.focus = this.contacts.length;
      let checkSpace = this.newContactName.replace(/ /g, "");
      if (checkSpace != "") {
        if (
          this.newContactAvatar.endsWith(".jpg") ||
          this.newContactAvatar.endsWith(".jpeg") ||
          this.newContactAvatar.endsWith(".jpg") ||
          this.newContactAvatar.endsWith(".gif") ||
          this.newContactAvatar.endsWith(".png") ||
          this.newContactAvatar.endsWith(".svg") ||
          this.newContactAvatar.endsWith(".bmp")
        ) {
          this.contacts.push({
            name: this.newContactName,
            avatar: this.newContactAvatar,
            visible: true,
            active: false,
            options: false,
            status: "Ultimo accesso oggi alle " + dayjs().format("HH:mm"),
            messages: [],
          });
        } else {
          this.contacts.push({
            name: this.newContactName,
            avatar: "assets/img/default-avatar.png",
            visible: true,
            active: false,
            options: false,
            status: "Ultimo accesso oggi alle " + dayjs().format("HH:mm"),
            messages: [],
          });
        }
      }
      this.newContactName = "";
      this.newContactAvatar = "";
    },
  },
  mounted: function () {
    setTimeout(() => {
      this.appLoading = false;
    }, 2000);
  },
});

// Cambio tema
let tema = document.getElementById("tema");

document.querySelector(".change-theme").addEventListener("click", function () {
  if (tema.getAttribute("href") == "assets/css/light.css") {
    tema.setAttribute("href", "assets/css/dark.css");
  } else {
    tema.setAttribute("href", "assets/css/light.css");
  }
});
