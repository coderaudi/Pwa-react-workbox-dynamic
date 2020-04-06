import React, { Component } from 'react';

class Admin extends Component {

    constructor(params) {

        super(params);
        this.state = {
            loading: false,
            title : "Admin notification!",
            body: "notification body",
            username : ""
        }
    }


    sendNotificationToAll = () => {
           this.setState({ loading : true});
        const {title , body } = this.state;
        let urlDb = "https://pwa-serv-notify.herokuapp.com/api/pwa/notifyAllUsers";
        fetch(urlDb, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title,body
            })
        }).then( res => {
            alert("notification sent to all");
            this.setState({ loading : false});
        }).catch ( er =>{
            console.log(er);
            this.setState({ loading : false});
        })
   
    }

    onChangeHandler =(name , value) =>{
        this.setState({ [name] : value});
    }

    render() {
        return (
            <div>  
                
                 <h1>Admin</h1>
         
                 UserName :   <input type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.onChangeHandler(e.target.name ,
                e.target.value
                )}

                />
           

           {this.state.username === "the_admin" ? 
           <div>
             <h3>Send Notification To All Users</h3>

             Notification Title :   <input type="text"
                 name="title"
                 value={this.state.title}
                 onChange={e => this.onChangeHandler(e.target.name ,
                     e.target.value
                     )}
     
                     />

                     <br />
                     
             Notification Body :   <input type="text"
                 name="body"
                 value={this.state.body}
                 onChange={e => this.onChangeHandler(e.target.name ,
                     e.target.value
                     )}
     
                     />
     
                     <div>
                         {this.state.loading && <p>Loading.....</p>}
                         <button
                          onClick={ () => this.sendNotificationToAll()}>Send Notification</button>
                     </div>
                     </div>
            : <div>
                <h5>Only For Admin Users</h5>
             </div>}

            </div>
        )
    }
}

export default Admin
