import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        console.log(this.props);
        //const {name,age} = this.props;
        const ninjas = this.props.ninjas;
        const deleteNinja = this.props.deleteNinja;
        const ninjaList = ninjas.map(ninja => {   // looping through nija list
            if(ninja.age>25) {
                return(
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Me</button>
                    </div>
                );
            } else {
                return null;
            }
        })
        return(
            <div className="ninja-list">
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                { ninjaList }
            </div>
        );
    }
}

export default Ninjas;