import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { viewAllRatings } from './service/service';
import Results from './Components/Results/Results';
import Play from './Components/Play/Play'
import TopPlays from './Components/TopPlays';
// import StarRatings from './Components/StarRatings';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Rating from 'react-rating'
class App extends Component {
    constructor(){
      super();
  
      this.state = {
        reviews: [],
        results: [],
        results1: [],
        results2: [],
        results3: [],
        results4: [],
        results5: [],
        averageTotal: null,
        childVisible: false,
        selectedId: null
      }
      this.handleClick = this.handleClick.bind(this)
      this.onClick = this.onClick.bind(this)
      // this.viewAllRatings = this.viewAllRatings.bind(this)
    }
  
  
    handleClick(id) {
      console.log(id)
      
      const token = 'koOheljmQX'
      const config = {
        headers: {'Authorization': token}
      };
      axios.get(`http://shakespeare.podium.co/api/reviews/${id}`, config)          
      .then(res => {
               console.log(res)
               const selectedId = id
               this.setState({selectedId: id})
               console.log(this.state.selectedId)
               this.setState({reviews: res.data.data})
               console.log(this.state.reviews)
             }).catch( err => console.log(err) );
             
 
    }
    showReview () {

    }
    onClick () {
      this.setState({childVisible: !this.state.childVisible});
    }
    componentDidMount(){
      
    
      const token = 'koOheljmQX'
      const config = {
        headers: {'Authorization': token}
      };
      const onError = (error) => {
        console.error('Request Failed:', error.config);
    
        if (error.response) {
          // Request was made but server responded with something
          // other than 2xx
          console.error('Status:',  error.response.status);
          console.error('Data:',    error.response.data);
          console.error('Headers:', error.response.headers);
    
        } else {
          // Something else happened while setting up the request
          // triggered the error
          console.error('Error Message:', error.message);
        }
    
        return Promise.reject(error.response || error.message);
      }
    
      axios.get('http://shakespeare.podium.co/api/reviews', config)          
     .then(res => {
              // array of objects I need the rating off off each one to then use to make a total rating
              let averageOverallRatings = [] 
               res.data.data.map((e,i) => {
                 return  averageOverallRatings.push(e.rating)
              })
              let total = averageOverallRatings.reduce((a, b)=> {
                   return a + b 
              }, 0)
              let averageTotal = Number((total/res.data.data.length).toFixed(1))

                
              // const avg = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length
              // const totalAvg = (os) => avg(os.map(({ rating }) => rating))
              // totalAvg(res.data.data.ratings)
              // console.log(totalAvg)

    //           // List of all reviews

              // let ids = []
              // console.log(this.state.results)
              // res.data.data.map((e, i) =>{
              //   return ids.push(e.id)
              // })
              // let reviewsArr = []
              // ids.forEach((item, index, arr) => {
              // axios.get(`http://shakespeare.podium.co/api/reviews/${arr[index]}`, config)          
              // .then(res => {
              //         reviewsArr.push(res.data.data.body)
              //         // for (let i = 0; i < reviewsArr.length; i++) { 
              //         //   reviewsArr[i] = this.state.results[i].body 
                              
              //         //         } 
              //          this.setState({reviews: reviewsArr})
              //          console.log(this.state.reviews)
              //        }).catch( err => console.log(err) );
              //       }) 
                                      
              // console.log(ids)
              let results5 = []
              let results1 = []
              let results2 = []
              let results3 = []
              let results4 = []
              res.data.data.map((e, i)=> {
                 if (i >= 0 && i < 20) {
                   results1.push(e)
                 } 
                 else if (i >= 20 && i < 40) {
                  results2.push(e)
                } 
                else if (i >= 40 && i < 60) {
                  results3.push(e)
                } 
                else if (i >= 60 && i < 80) {
                  results4.push(e)
                } 
                else if (i >= 80 && i < 100) {
                  results5.push(e)
                } 
              })
              console.log(results1,results2, results3, results4, results5)
                
              this.setState({results: res.data.data, averageTotal: averageTotal})
                  console.log(this.state.results)
            }).catch(onError);

           

          }
  
    render() {
      // const reviewsArrs = this.state.reviews.map((e, i) => {
      //   return (
      //     <p>{e}</p>
      //   )
      // })
      
      const resultsArr = this.state.results.map((e, i) => {
        console.log(this.state.reviews.body)
        console.log(this.selectedId)
        return (
          <Results key={i}
                   style={{width:'100%'}}
                   author={e.author}
                   rating={e.rating}
                   id={e.id}
                   selectedId={this.state.selectedId}
                   publish_date={e.publish_date}
                   cb={this.handleClick}
                   review={this.state.reviews.body}
                   />
        ) 
      })
      return (
        <div className="main-container">
          <div className="mainWrap">
            <HeaderNav/>
          <img src= "https://www.hct.org/ArticleMedia/Images/Home%20Page%20Features/16_New%20Home_Legacy.jpg" alt="shakespeare head" className="splash" />
          <div className="now-playing-head">NOW PLAYING</div>
          <Play
              average={this.state.averageTotal}
              reviewsNumTotal={this.state.results.length}
              viewAllRatings={this.viewAllRatings} 
              onClick={this.onClick}          
          />
         
          {/* <TopPlays/> */}
          {/* <h1>{this.state.averageTotal} out of 5 stars</h1> */}
                {/* <StarRatings/> */}
                
                  
               <div className="results-overall-wrap">
          <div className="results-wrap"> 
          {
          this.state.childVisible
            ? resultsArr
            : null
        }
               
                  {/* {reviewsArrs} */}
           </div> 
           </div>
          </div>
        </div>
      );
    }
  }

export default App;
