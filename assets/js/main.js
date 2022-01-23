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
        setTimeout(() => {
          this.contacts[focus].status = "Online";
        }, 500);
        setTimeout(() => {
          this.contacts[focus].status = "Sta scrivendo...";
        }, 1500);
        setTimeout(() => {this.sendReply(focus)}, 3000);
      }
    },
    sendReply: function (focus) {
      this.contacts[focus].messages.push({
        text: "Bravo",
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
