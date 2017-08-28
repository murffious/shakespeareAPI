import axios from 'axios';

export function viewAllRatings () {
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


                    console.log({results: res.data.data, averageTotal: averageTotal})
               return {results: res.data.data, averageTotal: averageTotal}
              // return    this.setState({results: res.data.data, averageTotal: averageTotal})
                //  console.log(this.state.results)
           }).catch(onError);
          }