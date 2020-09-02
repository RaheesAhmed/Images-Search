import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'
// import Comments from './Comments'
// import Nav from './Navigation'
//import DisplaySeason from "./DisplaySeason";

class App extends React.Component {

 state={images: [] }




  onSearchSubmit= async (term) => {
    const respone = await unsplash.get("/search/photos", {
      params: { query: term },
     
    });

     

    this.setState({images : respone.data.results})
  }
  /*
     response method put after the authozzation
    .then(response =>{

      console.log(response.data.results)
    })

  */

  render() {
    return (
      //api key : Mq5_IFzwjsdIFocQX-ZvNsi_4_0rkSCh4QWhJKpMvPQ
      //secret key : DozP1An0XL0uF34F3I-wXMzn3SSjn6cMX7To0jX1Fz0
      //    <Nav /> SHOW THE COMMENTS UI OR CREATE COMMENTS
      //  <Comments name='Rahees' time='12:00 AM' comment='I love React'/>
      //  <Comments name='Ahmed' time='10:00 AM' comment='Nice Post' />
      //  <Comments name='Hamza' time='15:00 AM' comment='Awesome Approch'/> */}

      //  USE OF CLASSAND USESTATE
      // <DisplaySeason />
<div className="container">
      <SearchBar onSubmit={this.onSearchSubmit} />
    <ImageList  images={this.state.images}/>
</div>
    );
  }
}
export default App;
