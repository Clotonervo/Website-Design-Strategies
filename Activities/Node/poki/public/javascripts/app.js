/*global axios */
/*global Vue */
var app = new Vue({
  el: '#app',
  data: {
    pokis: [],
    pokiName: '',
    pokiURL: '',
    politics:[],
  },
  created: function() {
    this.getpokis();
    this.getpolitics();
  },
  methods: {
    async getpokis() {
      // `this` points to the vm instance
      console.log("get pokis");
      var url = "http://260.samhopkins.info:4200/pokemon";
      try {
        let response = await axios.get(url);
        this.pokis = response.data;
        console.log(this.pokis);
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
        async getpolitics() {
      // `this` points to the vm instance
      console.log("politics");
      var url = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod"
      try {
        let response = await axios.get(url);
        this.politics = response.data;
        console.log(this.politics);
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
        addItem() {
      var url = "http://260.samhopkins.info:4200/pokemon";
      axios.post(url, {
          name: this.pokiName,
          avatarUrl: this.pokiURL
        })
        .then(response => {})
        .catch(e => {
          console.log(e);
        });
      this.pokiName = '';
      this.pokiURL = '';
      this.getpokis();
    },
  }
  
});
