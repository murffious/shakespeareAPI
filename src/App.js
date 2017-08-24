import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Results from './Components/Results';
import TopPlays from './Components/TopPlays';
import StarRatings from './Components/StarRatings';

class App extends Component {
    constructor(){
      super();
  
      this.state = {
        results: [],
        reviews: []
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
  
    componentDidMount(){
      var cts = this.state.results.publish_date
      console.log(new Date(cts).toString())
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
              console.log(res.data)
              this.setState({results: res.data.data})
              console.log(this.state.results)
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
          <div className="search-container">
          
            {/* <input onChange={this.handleChange}
                   onKeyDown={this.handleSearch}
                   value={this.state.artist}/> */}
                   <TopPlays/>
          </div>
                <StarRatings/>

                <p>{this.state.reviews.body}</p>
          <div> 
                  <table>
                      <tbody>
                      <tr>
                        <th>Rating</th>
                        <th>Publish Date</th>
                        <th>User Id</th>
                        <th >Author</th>
                      </tr>
                        {resultsArr}
                      </tbody>
                  </table>
                   
           </div> 
        </div>
      );
    }
  }

export default App;
