import React, { Component } from 'react'

class Dashboard extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            notificationMessage: "welcome to Notification pUsh",

        }
    }

    pushNotification = () => {
        const { notificationMessage } = this.state;
        let option = {
            body: "",
            icon: "/images/icons/icon-96x96.png",
            vibrate: [100, 50, 200]
        }

        new Notification(notificationMessage, option);
    }



    helpNotification = () => {
        let notificationMessage = "visite the Help page of site";
        let option = {
            body: "you can visit the help page /in application/site",
            vibrate: [100, 50, 200],
            actions: [
                { action: "confirm", title: "okay" },
                { action: "cancel", title: "nope" }
            ]
        }

        navigator.serviceWorker.ready.then(sw => {
            sw.showNotification(notificationMessage, option)
        })

    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <h3>Push Notification</h3>

                <input type="text" value={this.state.notificationMessage}
                    onChange={e => this.setState({ notificationMessage: e.target.value })}

                />

                <br />
                <br />

                <button onClick={() => this.pushNotification()}>Push Notification</button>

                <button onClick={() => this.helpNotification()}>Help page notification </button>
            </div>
        )
    }
}

export default Dashboard
