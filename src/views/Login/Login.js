import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import './Login.scss';

class Login extends React.Component {

    handleOnLogin = () => {
        let token = '';
        axios.post('https://reqres.in/api/login', this.state).then(res => {
            token = res.data.token;
        }).finally(complete => {
            if (token) {
                localStorage.setItem('accessToken', token);
                toast.success('Đăng nhập thành công!');
                this.props.history.push('/user')
            } else toast.error('Đăng nhập thất bại!')
        })
    }

    state = {
        email: '',
        password: '',
    }

    handleDataLogin = (event, action: string) => {
        if (action === 'acc') {
            this.setState({
                email: event.target.value
            })
        } else {
            this.setState({
                password: event.target.value
            })
        }
    }

    render() {
        return (
            <>
                <div className={'topic'}>
                    Phần mềm quản lý nhân sự Công ty TNHH công nghệ Thành Dương
                </div>
                <div>
                    <span className={'title-text'}>Email đăng nhập:</span>
                    <input type="text" value={this.state.email}
                           onChange={(event) => this.handleDataLogin(event, 'acc')}/>
                </div>
                <div>
                    <span className={'title-text'}>Mật khẩu:</span>
                    <input type="password" value={this.state.password}
                           onChange={(event) => this.handleDataLogin(event, 'pwd')}/>
                </div>
                <button className={'btn'}
                        onClick={() => this.handleOnLogin()}>Đăng nhập
                </button>
            </>

        )
    }
}

export default withRouter(Login);