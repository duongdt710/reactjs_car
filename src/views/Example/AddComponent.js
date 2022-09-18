import React from "react";
import './Demo.scss'

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    checkSuccess = '';
    handleOnChangeState = (event, action) => {
        if (action === 'title')
            this.setState({
                title: event.target.value
            })
        else this.setState({
            salary: event.target.value
        })
    }

    onClickBtn = () => {
        //@ts-ignore
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault(); //  dùng để tránh load lại page khi submit
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params (Job title and salary not empty)');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random()),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
        // console.log('>>>> check data input: ', this.state)
    }


    render() {
        // this.state.title = this.props.editJob.title;
        // this.state.salary = this.props.editJob.salary;
        return (

            <form action="">
                <div>
                    <label htmlFor="name">Job's title: </label>
                    <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeState(event, 'title')}/>
                </div>
                <div>
                    <label htmlFor="last_name">Salary: </label>
                    {/* eslint-disable-next-line no-restricted-globals */}
                    <input type="number" value={ this.state.salary} onChange={(event) => this.handleOnChangeState(event, 'password')} />
                </div>
                {/*<div>First name: {this.state.title}</div>*/}
                {/*<div>Last name: {this.state.password}</div>*/}
                <br style={{color: "white"}} />
                <input className={'btn-show primary'} type="submit" onClick={() => this.onClickBtn()}/>
                <div style={{color: "white"}}>{this.checkSuccess}</div>
            </form>
        )
    }
}

export default AddComponent