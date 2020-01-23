import React, { Component } from 'react';

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            newUser:
            {
                ...prevState.newUser, [name]: value
            }
        }))
    }

    handleSubmit =(e)=>{
        alert('Login berhasil')
    }

    render() {
        return (
            <div>
                <div>
                    <label>Usename</label>
                    <input type="text" name="username" value={this.state.username} handleChange={this.handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={this.state.password} handleChange={this.handleChange}/>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

export default index;