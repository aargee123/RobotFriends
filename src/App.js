import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import robots from './robots';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json).then(users=>this.state.robots=users);
    }
    
    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                      <CardList robots={filteredRobots}/>
                      </ErrorBoundary>                    
                </Scroll>
            </div>
        );
    }
    
}

export default App;