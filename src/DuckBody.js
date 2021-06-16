import React, { Component } from 'react'
import request from 'superagent'

export default class Body extends Component {

    state = {
        data: [],
    }

    handleClick = async() => {
        const data = await request.get('https://duckapi.herokuapp.com/ducks')
        this.setState({ data: data.body.results })
}

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Fetch a duck!</button>
                    <div className="duck-body">

                        {this.state.data.map(duck =>
                            <div>
                                <p>{duck.name}</p>
                                <img src={duck.url_image} alt={duck.name}/>
                            </div>)}
                    </div>
            </>
        )
    }
}
