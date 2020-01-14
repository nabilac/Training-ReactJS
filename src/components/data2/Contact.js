import React, { Component } from 'react'

import ListApi from './ListApi';
import SearchApi from './SearchApi';

export class Contact extends Component {
    state = {
        itemSearch: "",
        itemUser: []
    }

    handleApi = (itemUser) => {
        this.setState({
            itemUser
        })
    }

    render() {
        return (
            <div>
                <SearchApi handleApi={this.handleApi}/>
                <ListApi itemUser={this.state.itemUser}/>
            </div>
        )
    }
}

export default Contact