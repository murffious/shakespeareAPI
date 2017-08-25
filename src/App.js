import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Results from './Components/Results';
import TopPlays from './Components/TopPlays';
// import StarRatings from './Components/StarRatings';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Rating from 'react-rating'
class App extends Component {
    constructor(){
      super();
  
      this.state = {
        results: [],
        reviews: [],
        averageTotal: null
      }
      this.handleClick = this.handleClick.bind(this)
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
               this.setState({reviews: res.data.data})
               console.log(this.state.reviews)
             }).catch( err => console.log(err) );
 
    }
  
    componentDidMount(id){
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
              let averageTotal = Number((total/100).toFixed(1))
              // const avg = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length
              // const totalAvg = (os) => avg(os.map(({ rating }) => rating))
              // totalAvg(res.data.data.ratings)
              // console.log(totalAvg)
              
              this.setState({results: res.data.data, averageTotal: averageTotal})
            }).catch(onError);
           

          }
  
    render() {
      
      const resultsArr = this.state.results.map((e, i) => {
        
        return (
          <Results key={i}
                   style={{width:'100%'}}
                   author={e.author}
                   rating={e.rating}
                   id={e.id}
                   publish_date={e.publish_date}
                   cb={this.handleClick}
                  
                   />
        ) 
      })


      
      return (
        
        
        <div className="main-container">
          <HeaderNav/>
          <div className="search-container">
          
            {/* <input onChange={this.handleChange}
                   onKeyDown={this.handleSearch}
                   value={this.state.artist}/> */}
                   <TopPlays/>
          </div>
          <h1>{this.state.averageTotal} out of 5 stars</h1>
                {/* <StarRatings/> */}
                <Rating
                      placeholderRate={this.state.averageTotal}
                      empty={<img src="http://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon" alt="star"/>}
                      placeholder={<img src="http://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon" alt="star" />}
                      full={<img src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon" alt="star" />}
                    />
                  <p>Highest Rating</p> <p>Lowest rating</p>
                <p>{this.state.reviews.body}</p>
          <div> 

                  {resultsArr}
           </div> 
        </div>
      );
    }
  }

export default App;
