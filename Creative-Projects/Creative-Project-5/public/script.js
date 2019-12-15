var app = new Vue({
  el: '#app',
  data: {
    income: [],
    outgoing: [],
    all: [],
    total: 0,
    calculated: [],
    isCalculated: false,
  },
  created() {
    this.getAllMoney();
  },
  computed: {},
  methods: {
    async getAllMoney() {
      try {
        let response = await axios.get("/api/all");
        this.all = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    calcSelected() {
      this.isCalculated = true;
      this.total = 0;
      for(var item of this.all) {
        if (item.selected) {
            this.total += item.amount;
        }
      }
    },
    calcTotal() {
      this.isCalculated = true;
      this.total = 0;
      for(var item of this.all) {
        this.total += item.amount;
      }
    },
    organize() {
      this.outgoing = [];
      this.income = [];
      for(var item of this.all) {
        if(item.amount < 0){
          this.outgoing.push(item);
        }
        else {
          this.income.push(item);
        }
      }
      this.getAllMoney();
    },
  }
});