import React from 'react'

const Contact = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')   // this is a programatic redirect
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nobis quod possimus consequatur tempore inventore recusandae iusto, harum sapiente maxime ipsam beatae libero adipisci magni vel aspernatur a quam in.</p>
        </div>

    )
}

export default Contact