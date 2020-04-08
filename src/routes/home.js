import React, { Component } from 'react';
import axios from "axios";
import { Button } from 'reactstrap';

import { Link, Redirect } from 'react-router-dom';
import SpinnerLoading from "../components/loaders";

const _ = require('lodash');

const url = "https://pwa-serv-notify.herokuapp.com/api/pwa/timesheets";

class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loading: false,
            timesheets: []
        }

    }

    componentDidMount = () => {
        this.getTimesheets();
    }

    getTimesheets = () => {
        this.setState({ loading: true });
        axios({
            url
        }).then(res => {

            let data = _.reverse(res.data);
            this.setState({ timesheets: res.data, loading: false });
        }).catch(err => {
            console.log("your network is not working!!");
            this.setState({ loading: false });
            // navigator.serviceWorker.ready.then(registration => {
            //     return registration.sync.register('get-pending-sync')
            //         .catch(function (err) {
            //             return err;
            //         })
            // })
        })
    }


    editTimesheet = (id) => {

        console.log("you click on ", id);
        this.props.history.push(`/timesheets?id=${id}`)


    }

    displayTimesheetCards = () => {
        const { timesheets } = this.state;
        if (timesheets.length > 0) {
            let dispList = timesheets.map((ts, i) => {
                return (<div className="card"
                    key={i}
                    onClick={() => this.editTimesheet(ts._id)}>
                    <div className="container">
                        <div>
                            <h4>{ts.project}  <span className="card-date">{ts.date}</span></h4>
                            <div>Task : {ts.task}</div>
                            <br />
                            <div> <span>Hours : {ts.hours}</span>
                                <span className="card-status">{ts.status}</span>
                            </div>
                        </div>
                    </div>
                </div>)
            });

            return dispList;
        } else {
            return <div>No Timesheets</div>
        }

    }


    render() {
        const { timesheets } = this.state;
        return (
            <div>
                <h1 className="text-center">All Timesheets</h1>

                <div className="text-center">
                    <Button
                        className="mr-2"
                        color="primary" size="sm"

                        className="mr-2"
                        onClick={() => this.getTimesheets()}>Get Timesheets</Button>
                    <Link to="/timesheets">
                        <Button
                            className="mr-2"
                            color="primary" size="sm"
                            onClick={() => this.getTimesheets()}>Add Timesheets</Button>
                    </Link>
                </div>


                <br /> <br />
                {this.state.loading ? <SpinnerLoading />
                    :
                    <div>
                        {this.displayTimesheetCards()} </div>
                }

            </div>
        )
    }
}

export default Home;
