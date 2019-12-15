var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    definitions: [],
    prefix: '',
    owlfix: '',
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "/getcity?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          }
          console.log("Got Citylist");
        });
    },
    fetchOWL() {
      console.log("In Fetch " + this.owlfix);
      var url = "/getOWL?q=" + this.owlfix; 
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((data) => {
          // console.log("data");
          // console.log(data);
          
          this.definitions = [];
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].defenition);
            this.definitions.push({ name: data[i].defenition });
          }

          console.log(this.definitions);
          if(this.definitions.length === 1 && this.definitions[0].name === undefined){
            this.definitions = [];
          }
          
          this.definition = data[0].defenition;
          // console.log("Got OwlList");
        });
    },
  },
});
