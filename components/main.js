import React,{Component} from 'react';
import App from '../App';

import './main.css';
class Search extends Component{
    render(){
        return( 
          
       
            <div id="search">
                <h1>Search your question !!</h1>
            
           <div class="search-box">
                <button class="btn-search"><i class="fas fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Type to Search..."></input>
            </div>


       
        </div>

           
            
         )
    }
}
export default Search;