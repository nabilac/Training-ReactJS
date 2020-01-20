import React from 'react';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                user_name: '',
                name: '',
                email: ''
            }
        };
    }

    // addUser(user) {
    //     fetch('http://192.168.180.72:83/mjt-assessment/rest-server/api/user/',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         .catch(err => console.error(err))
    // }

    // handleChange = (event) => {
    //     this.setState(
    //         { [event.target.name]: event.target.value }
    //     );
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let newUser = {
    //         name: this.state.name
    //     };
    //     this.props.addUser(newUser);
    //     this.refs.addDialog.hide();
    // }

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

    handleSubmit = (e) => {
        e.preventDefault();
        let userData = this.state.newUser;
        fetch('http://192.168.180.72:83/mjt-assessment/rest-server/api/user/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })
            .catch(err => console.error(err))
        console.log(userData)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Username : </label>
                        <input type="text" name="user_name" value={this.state.newUser.user_name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Name : </label>
                        <input type="text" name="name" value={this.state.newUser.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="text" name="email" value={this.state.newUser.email} onChange={this.handleChange} />
                    </div>
                    <br />
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        );
    }
}
export default AddUser;