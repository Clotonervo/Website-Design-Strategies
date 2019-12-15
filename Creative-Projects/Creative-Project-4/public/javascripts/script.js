var app = new Vue({
  el: '#app',
  data: {
    restaurants: [],
    prefix: '',
    type: '',
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "/getrestaurants?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((restaurantsList) => {
          console.log("restaurantsList");
          console.log(restaurantsList);
          this.restaurants = [];
          for (let i = 0; i < restaurantsList.length; i++) {
            console.log(restaurantsList[i].restaurant);
            if (i === 0){
              this.type = restaurantsList[i].restaurant;
            }
            else {
              this.restaurants.push({ name: restaurantsList[i].restaurant });
            }
          }
          console.log("Got Citylist");
        });
    },
  },
});
