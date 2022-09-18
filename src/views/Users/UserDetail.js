import {useState, CSSProperties} from "react";
import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {ClipLoader} from "react-spinners/ClipLoader";
import ShowLoading from "../showLoading/ShowLoading";

class UserDetail extends React.Component {
    state = {
        user: {},
        showLoading: true
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let token = localStorage.getItem('accessToken');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const bodyParameters = {
                id: this.props.match.params.id
            };
            setTimeout(() => {
                // let res = await axios.get(`https://reqres.in/api/users/${id}`);
                axios.get(`https://reqres.in/api/users/${id}`, config).then(res => {
                    console.log(res);
                    this.setState({
                            user: res && res.data && res.data.data ? res.data.data : '',
                            showLoading: false
                        }
                    )
                });
            }, 2000)

        }
    }

    backHandle = () => {
        this.props.history.push(`/user`);
    }

    render() {
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === false;
        return (
            <>
                {this.state.showLoading === false ?
                <>
                    <div>
                        <div>My name is {user.first_name} - {user.last_name}</div>
                        <div>This is my email {user.email}</div>
                        <hr/>
                    </div>
                    <div>
                        <img src={user.avatar} alt="img.vn"/>
                    </div>
                    <button type={"button"} onClick={() => this.backHandle()} style={{"cursor": "pointer"}}>Back</button>
                </> : <ShowLoading />
                }
            </>
        )
    }
}

export default withRouter(UserDetail);