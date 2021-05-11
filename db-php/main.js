var app= new Vue({
  el: '#root',
  data:{
    rooms: [],
    selected_room: [],
    guests: [],
  },
  methods: {
    IDroom: function(id) {
      axios.get('http://localhost/db-hotel/db-php/api/stanze.php?id='+id)
          .then((response) => {
            this.selected_room = response.data.response[0];
          });
    },
    showInfos: function(id) {
      // axios.get('http://localhost/db-hotel/db-php/api/stanze.php?id='+id)
      //     .then((response) => {
      //       // this.selected_room = response.data.response[0];
      //     });
      //     this.roomSel = true;
    },
  },
  mounted() {
    axios.get('http://localhost/db-hotel/db-php/api/stanze.php')
        .then((response) => {
          this.rooms = response.data.response;
        });
  },
});
