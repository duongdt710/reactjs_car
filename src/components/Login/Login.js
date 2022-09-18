import React from "react";
// import {withRouter} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import './Login.scss';
import bgLogin from "../../assets/img/background_login.png";

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

    handleSubmit = (event, action) => {
        console.log(event)
    }

    render() {
        return (
            <>
                <img style={{"position": "relative", "width":"100%", "height": "calc(100vh)", "opacity": "0.5"}} src={bgLogin} alt=""/>
                <div  className={'form-input'} style={{"position": "absolute"}}>
                    <h3>Đẳng cấp xe sang</h3>
                    <span style={{'font-size': '12pt', 'padding-bottom': '5px'}}><i>Đăng nhập</i></span>
                    <form onSubmit={() => this.handleSubmit()}>
                        <div className={'login-form'}>
                            <tr>
                                <td>
                                    <label htmlFor="">
                                        <div className={'title'}>Tài khoản/email:</div>
                                    </label>
                                </td>
                                <td>
                                    <input name={'emailOrUsername'} type="text" value={this.state.email} onChange={(event) => this.handleDataLogin(event, 'acc')} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="">
                                        <div className={'title'}>Mật khẩu:</div>
                                    </label>
                                </td>
                                <td>
                                    <input name={'password'} type="text" value={this.state.password} onChange={(event) => this.handleDataLogin(event, 'pwd')} />
                                </td>
                            </tr>
                        </div>
                        <button className={'btn'} type={"submit"}>
                            Đăng nhập
                        </button>
                    </form>
                </div>

            </>

        )
    }
}

// export default withRouter(Login);
export default Login;