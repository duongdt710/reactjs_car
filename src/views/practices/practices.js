import React from "react";
import './practices.scss'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Color from "../HOC/Color";

class Practices extends React.Component {
    state = {
        title: '',
        id: '',
        listData: [],
        editData: null
    }

    isChangeBtn = false;


    handleData = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddItem = (event) => {
        let isItemEdit = this.state.listData.filter(p => p.id === this.state.id)[0];
        let item = {};
        // if (isItemEdit) {
        //     item = {
        //         id: this.state.id,
        //         name: this.state.title
        //     }
        //     for (let element of this.state.listData) {
        //         if (element.id === item.id) {
        //             element.name = item.name.toString();
        //             break;
        //         }
        //     }
        //     console.log(this.state.listData);
        //     this.setState({
        //         state: this.state.listData
        //     });
        //     this.state.id = '';
        //     this.isChangeBtn = !this.isChangeBtn;
        //     toast.success('Sửa dữ liệu thành công')
        // } else {
        item = {
            id: this.state.listData.length, name: this.state.title
        }
        console.log(this.state.listData);
        this.setState({
            state: this.state.listData.push(item)
        });
        toast.success('Thêm dữ liệu thành công!')
        // }
        this.state.title = '';
    }

    onKeyEnter = (event) => {
        if (event.key === 'Enter') {
            this.handleAddItem();
        }
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.title} onKeyDown={(event) => this.onKeyEnter(event)}
                           onChange={(event) => this.handleData(event)}/>
                    <button onClick={(event) => this.handleAddItem(event)}>{this.isChangeBtn ? 'Save' : 'Add'}</button>
                </div>
                <div className={'list-data-item'}>
                    {
                        this.state.listData.map((item, index) => {
                            return (
                                <div key={index} item={item}>
                                    {
                                        (this.state.editData && this.state.editData.id) === item.id ? <input type="text" value={this.state.editData.name}
                                                           onChange={(event) => this.handleDataEdit(event)}/> :
                                            <span className={'list-data--item__name'}>{index + 1}. {item.name}</span>
                                    }
                                    <button className={'list-data--item__btn'}
                                            onClick={() => this.handleEditItem(item)}>{(this.state.editData && this.state.editData.id) === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button onClick={() => this.handleDelete(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    handleDelete = (event) => {
        // console.log(event)
        let currentJob = this.state.listData;
        currentJob = currentJob.filter(p => p.id !== event.id);
        this.setState({
            listData: currentJob
        })
        toast.success('Xoá dữ liệu thành công!')
    }

    handleDataEdit = (event) => {
        console.log(event.target.value)
        let editDataClone = {...this.state.editData};
        editDataClone.name = event.target.value;
        this.setState({
            editData: editDataClone
        })
    }

    handleEditItem = (item) => {
        // this.isChangeBtn = !this.isChangeBtn;
        if (!this.state.editData) {
            this.setState({
                editData: item
            })
        } else {
            let dataEdit = [...this.state.listData];
            for (let d of dataEdit) {
                if (d.id === this.state.editData.id) {
                    d.name = this.state.editData.name
                }
            }
            this.setState({
                listData: dataEdit,
                editData: null
            })
        }
    }

}

export default Color(Practices);