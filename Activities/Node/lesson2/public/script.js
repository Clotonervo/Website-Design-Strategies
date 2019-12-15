var app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedProblem: '',
    tickets: {},
  },
  created() {
    this.getTickets();
  },
  methods: {
    async getTickets() {
      try {
        let response = await axios.get("http://260.samhopkins.info:4200/api/tickets");
        this.tickets = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addTicket() {
      try {
        let response = await axios.post("http://260.samhopkins.info:4200/api/tickets", {
          name: this.addedName,
          problem: this.addedProblem
        });
        this.addedName = "";
        this.addedProblem = "";
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTicket(ticket) {
      try {
        let response = axios.delete("http://260.samhopkins.info:4200/api/tickets/" + ticket.id);
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
});