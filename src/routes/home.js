import React, { Component } from 'react';
import axios from "axios";

class Home extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            isData: false
        }

    }


    postRequest = () => {
        this.setState({ isData: false });
        let url = "https://mytimeline-e9693.firebaseio.com/employees/-M4-41R99yIpZ-BE3g4M.json";
        axios({
            url

        }).then(res => {
            console.log("you res is", res);
            this.setState({ isData: true });
        }).catch(err => {
            console.log("your or offline with get req");

            this.setState({ isData: false });

            navigator.serviceWorker.ready.then(registration => {
                return registration.sync.register('get-pending-sync')
                    .catch(function (err) {
                        return err;
                    })
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
<div> api test </div>

                {this.state.isData && "Data Loaded.. done"}
                <button onClick={() => this.postRequest()}> Post</button>
            </div>
        )
    }
}

export default Home
