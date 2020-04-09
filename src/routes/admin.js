import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner, } from 'reactstrap';
import SpinnerLoading from "../components/loaders";

class Admin extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            title: "Admin notification!",
            body: "notification body",
            username: ""
        }
    }


    sendNotificationToAll = () => {
        this.setState({ loading: true });
        const { title, body } = this.state;
        let urlDb = "https://pwa-serv-notify.herokuapp.com/api/pwa/notifyAllUsers";
        fetch(urlDb, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title, body
            })
        }).then(res => {
            alert("notification sent to all");
            this.setState({ loading: false });
        }).catch(er => {
            console.log(er);
            this.setState({ loading: false });
        })

    }

    onChangeHandler = (name, value) => {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>

                <h1>Admin</h1>
                <div className="card">
                    <div className="container">
                        <div>  UserName :   <Input type="text"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.onChangeHandler(e.target.name,
                                e.target.value
                            )}

                        />
                        </div>
                    </div>
                </div>




                {this.state.username === "the_admin" ?
                    <div className="card">
                        <div className="container">
                            <h3>Send Notification To All Users</h3>

                             Title :   <Input type="text"
                                name="title"
                                value={this.state.title}
                                onChange={e => this.onChangeHandler(e.target.name,
                                    e.target.value
                                )}

                            />

                            <br /> <br />

                           Body :   <Input
                                type="textarea"
                                name="body"
                                value={this.state.body}
                                onChange={e => this.onChangeHandler(e.target.name,
                                    e.target.value
                                )}

                            />


                            <br /><br />
                            <div>
                                {this.state.loading && <SpinnerLoading />}
                                <Button
                                    color="primary" size="sm"
                                    onClick={() => this.sendNotificationToAll()}>Send Notification</Button>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <h5>Only For Admin Users</h5>
                    </div>
                }

            </div>
        )
    }
}

export default Admin
