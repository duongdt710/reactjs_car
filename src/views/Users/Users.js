import React from "react";
import axios from "axios";
// import {withRouter} from "react-router-dom";
import './User.scss'
import ShowLoading from "../showLoading/ShowLoading";
import {toast} from "react-toastify";

class Users extends React.Component {
    state = {
        listUser: [],
        title: ['First name', 'Last name', 'Email', 'Avatar'],
        showLoading: false,
        editItem: ''
    }

    async componentDidMount() {
        let data = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUser: data && data.data && data.data.data ? data.data.data : []
        })
    }

    handleOnClick = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    handleEditUser = (item) => {
        if (this.state.editItem) {
            let list_data = [...this.state.listUser];
            let body = {
                name: this.state.editItem.first_name,
                job: this.state.editItem.last_name
            }

            axios.put(`https://reqres.in/api/users/${item.id}`, body).then(res => {
                console.log(res)
                for (let d of list_data) {
                    if (d.id === this.state.editItem.id) {
                        d.first_name = res.data.name;
                        d.last_name = res.data.job;
                        break;
                    }
                }
                toast.success('Sửa dữ liệu thành công!');
                this.setState({
                    listUser: list_data,
                    editItem: ''
                })
            }).catch(error => {
                console.log(error);
                toast.error('Lỗi thêm dữ liệu!')
            })
        } else {
            console.log(item)
            this.setState({
                editItem: item
            });
        }
    }

    handleDeleteUser = (user) => {
        axios.delete(`https://reqres.in/api/users/${user.id}`).then(res => {
            toast.success('Xoá dữ liệu thành công!')
            let data = this.state.listUser.filter(p => p.id !== user.id);
            this.setState({
                listUser: data
            })
        });
    }

    handleOnChangeData = (e, action: string) => {
        let item = {...this.state.editItem};
        item[action] = e.target.value;
        this.setState({
            editItem: item
        })
    }

    render() {
        return (
            <> { this.state.showLoading ?  <ShowLoading/> : ''}
                <div className={'list-data'} style={{"border": "1px solid white"}}>
                    <table>
                        <thead>
                        <tr>
                            {this.state.title.map((title) => {
                                return <th>{title}</th>
                            })}
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.listUser.map((element) => {
                            return <tr>
                                <td>{this.state.editItem && this.state.editItem.id === element.id ? <input type="text" value={this.state.editItem.first_name} onChange={(event) => this.handleOnChangeData(event, 'first_name')}/> : element.first_name}</td>
                                <td>{this.state.editItem && this.state.editItem.id === element.id ? <input type="text" value={this.state.editItem.last_name} onChange={(event) => this.handleOnChangeData(event, 'last_name')}/> : element.last_name}</td>
                                <td>{element.email}</td>
                                <td><img src={element.avatar} alt=""/></td>
                                <td className={'btn-action'}>
                                    <button className={'edit-btn'} onClick={() => this.handleEditUser(element)}>{this.state.editItem && this.state.editItem.id === element.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className={'delete-btn'}
                                            onClick={() => this.handleDeleteUser(element)}>Delete
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

// export default withRouter(Users);
export default Users;