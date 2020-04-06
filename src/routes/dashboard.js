import React, { Component } from 'react';
const publicVapidKey = "BCj54G9kp6-MuxVje45_rEdNd24WnFaDLOquVDqrdeqGy_NwwaeTovYJoKdP429zTri6hqypw4TXKMFF6a57aMQ";

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


class Dashboard extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            notificationMessage: "welcome to Notification pUsh",

        }
    }



    // configure the push subscription 

    configurePushSubscription = () => {

        console.log("you are inside the web notification subscription code !!");
        if (!'Notification' in navigator) {
            return;
        }

        let swRef;

        navigator.serviceWorker.ready.then(sw => {
            swRef = sw;
            return swRef.pushManager.getSubscription(); // this allow to get the subscripition 

        }).then(sub => {
            if (sub === null) {
                // create a new subscription 

                console.log("we dont have the subcription")

                return swRef.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
                }).then(subscription => {
                    console.log("user is subscribed", subscription)
                });
            } else {
                // we have a subscription ;
                console.log("we have the subcription", sub);
                return sub;
            }
        }).then(function (newSub) {

            // here you have to store this newsbu i.e. your subscription user to database
            // with the help of newSub Request payload // you get the endpoing and keys {p256dh , auth}
            // which is used to send the notification to the user 
            console.log("this is subsciriton body", newSub);

            let firebaseRealtimeDbUrl = "https://push-pwanotification.firebaseio.com/subscriber.json";
            return fetch(firebaseRealtimeDbUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newSub)
            })
        }).then(function (res) {
            if (res.ok) {
                console.log("new subscriber is added to DB ")
            }
        }).catch(function (err) {
            console.log("server : App subscriber error ", err);
        });


    }


    pushNotification = () => {
        const { notificationMessage } = this.state;
        let option = {
            body: "",
            icon: "/images/icons/icon-96x96.png",
            vibrate: [100, 50, 200]
        }

        //  new Notification(notificationMessage, option);
        navigator.serviceWorker.ready.then(sw => {
            sw.showNotification(notificationMessage, option)
        });
    }



    helpNotification = () => {
        let notificationMessage = "visite the Help page of site";
        let option = {
            body: "you can visit the help page /in application/site",
            vibrate: [100, 50, 200],
            actions: [
                { action: "explore", title: "okay" },
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
                <h1>Notification_Dash</h1>

                <h3>Push Notification</h3>

                <input type="text" value={this.state.notificationMessage}
                    onChange={e => this.setState({ notificationMessage: e.target.value })}

                />

                <br />
                <br />

                <button onClick={() => this.pushNotification()}>Push Notification</button>

                <br />
                <br />

                <button onClick={() => this.helpNotification()}>Help page notification </button>


                <br />
                <br />

                <button onClick={() => this.configurePushSubscription()}>Confirm Push Subcription</button>

                <br />
                <br />

            </div>
        )
    }
}

export default Dashboard
