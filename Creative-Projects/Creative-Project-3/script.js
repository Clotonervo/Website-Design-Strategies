/* Simple Vue movie searcher app! */
let app = new Vue({
    el: '#app',
    data: {
        index: -1,
        current: {
          Title: '',
          Poster: '',
          Plot: ''
        },
        loading: true,
        movieFound: false,
        multipleSearched: false,
        beginning: false,
        end: false,
        title: '',
        numberOfMovies: 0,
        number: '',
        addedName: '',
        addedComment: '',
        comments: {}, 
        searchedMovies:{},
    },
    methods: {
      async findMovie() {
        try {
            this.loading = true;
            const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9028d37a&t=' + this.title);
            this.current = response.data;
            console.log(response.data);
            if(response.data.Error === "Movie not found!" || this.title === ''){
              this.movieFound = false;
              this.loading = false;
            }
            else {
                      document.getElementById("footer").style.position = "relative";
              this.loading = false;
            this.movieFound = true;
            this.img = response.Poster;
            
            if (!(this.numberOfMovies in this.comments))
              Vue.set(app.searchedMovies, this.numberOfMovies, new Array);
            
            this.searchedMovies[this.numberOfMovies].push({
              Title: this.current.Title,
              Poster: this.current.Poster,
              Plot: this.current.Plot,
              Released: this.current.Released,
              Rated: this.current.Rated
            });
            
            this.numberOfMovies += 1;
            this.index = this.numberOfMovies - 1;

            }
            
            // this.number = response.data.num;
          } catch (error) {
            this.number = this.max;
        }
        }, 
        previousMovie() {
            this.index = this.index - 1;
            if (this.index < 0)
              this.index = 0;
          },
          nextMovie() {
            this.index = this.index + 1;
            if (this.index > this.searchedMovies.length)
              this.index = this.searchedMovies.length;
          },
          addComment() {
            if (!(this.index in this.comments))
              Vue.set(app.comments, this.index, new Array);
            this.comments[this.index].push({
              author: this.addedName,
              text: this.addedComment,
              date: moment().format('LLL')
            });
            this.addedName = '';
            this.addedComment = '';
          },
    },
      watch: {
        index(){
          console.log(this.index);
          console.log(this.numberOfMovies);

          if (this.numberOfMovies >= 2){
            this.multipleSearched = true;
          }
          else {
            this.multipleSearched = false;
          }
          
          if (this.multipleSearched && this.index === 0){
            this.beginning = true;
            this.end = false;
          }
          else if (this.multipleSearched && (this.index === this.numberOfMovies - 1)){
            this.end = true;
            this.beginning = false;
          }
          else {
            this.beginning = false;
            this.end = false;
          }
          
          if (this.multipleSearched){
            this.current = this.searchedMovies[this.index][0];
          }
        },
      },
});
