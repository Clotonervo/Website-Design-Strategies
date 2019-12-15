var app = new Vue({
  el: '#admin',
    data: {
    title: "",
    amount: "",
    income: true,
    addItem: null,
    items: [],
    findTitle: "",
    findItem: null,
  },
  created() {
    this.getItems();
  },
  computed: {},
   methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      console.log(this.amount);
      d = new Date();
      if(!this.income && this.amount > 0){
        this.amount = 0 - this.amount
      }
      else if (this.income && this.amount < 0){
        this.amount = 0 - this.amount
      }
      try {
        let r2 = await axios.post('/api/all', {
          title: this.title,
          amount: this.amount,
          income: this.income,
          date: d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
        });
        console.log("item added")
        this.addItem = r2.data;
        this.getItems();
      } catch (error) {
        console.log("something went wrong")
        console.log(error);
      }
    },
    async getItems() {
      console.log("in getItems()");
      console.log(this.items);
      try {
        let response = await axios.get("/api/all");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
  },
  selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
  async deleteItem(item) {
      try {
        console.log("in delete item");
        console.log(item);
        console.log(item._id);
        let response = axios.delete("/api/all/" + item._id);
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
      async editItems(item) {
      try {
        let response = await axios.put("/api/all/" + item._id);
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
});
