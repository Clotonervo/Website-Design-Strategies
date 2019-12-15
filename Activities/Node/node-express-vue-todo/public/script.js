var app = new Vue({
  el: '#app',
  data: {
    items: [{
      text: "make an app",
      completed: false,
    }, {
      text: "declare victory",
      completed: false,
    }, {
      text: "profit",
      completed: false
    }],
    text: '',
    show: 'all',
  },
  computed: {
    activeItems() {
      return this.items.filter(item => {
        return !item.completed;
      });
    },
    filteredItems() {
      if (this.show === 'active')
        return this.items.filter(item => {
          return !item.completed;
        });
      if (this.show === 'completed')
        return this.items.filter(item => {
          return item.completed;
        });
      return this.items;
    },
  },
  methods: {
    addItem() {
      this.items.push({
        text: this.text,
        completed: false
      });
      this.text = '';
    },
    async deleteItem(item) {
      try {
        const response = await axios.delete("/api/items/" + item.id);
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    showAll() {
      this.show = 'all';
    },
    showActive() {
      this.show = 'active';
    },
    showCompleted() {
      this.show = 'completed';
    },
    deleteCompleted() {
      this.items.forEach(item => {
        if (item.completed)
          this.deleteItem(item);
      });
    },
    async completeItem(item) {
      try {
        const response = axios.put("/api/items/" + item.id, {
          text: item.text,
          completed: !item.completed,
        });
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
  }
});