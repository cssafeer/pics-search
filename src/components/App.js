import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component{

    state = {images:[]}

    onSearchSubmit = async (term)=>{
        
        // 6FPr8gQAUnUtwKGuKdkD9zp4sfMQXe_PnZsopOJ1I4U
        const response = await unsplash.get('search/photos',{
            params:{query:term}
        });

        this.setState({images:response.data.results});
        // console.log(response);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found:{this.state.images.length} images
            </div>
        )
    }
    
}

export default App;