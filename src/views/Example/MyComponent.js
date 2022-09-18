import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    //state react là 1 object
    state  = {
        arrJobs: [
            {id: 1, title: 'developers', salary: 500, unit: '$'},
            {id: 2, title: 'tester', salary: 300, unit: '$'},
            {id: 3, title: 'PM', salary: 1000, unit: '$'}
        ]
    }

    state_change = {
        id: '',
        title: '',
        salary: '',
        edit: true
    }

    componentDidMount() {
        // call API in function
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    addNewJob = (job) => {
        // console.log(job);
        if (job.delete) {
            // eslint-disable-next-line react/no-direct-mutation-state
            let currentUser = this.state.arrJobs;
            currentUser = currentUser.filter(p => p.id !== job.id);
            this.setState({
                // state: this.state.arrJobs.splice(job.index, 1)
                arrJobs: currentUser
            })
        } else if (job) {
            this.setState({
                state: this.state.arrJobs.push(job)
                // state: [...this.state.arrJobs, job]
            })
        }
    }

    editJob = (job) => {
        let state_title = {
            id: job.id,
            title: job.title,
            salary: job.salary,
            edit: true
        }
        this.state_change = state_title
        // setState se bat event thay doi data sang cac component
        this.setState({
            state_change: state_title
        })
    }

    // eslint-disable-next-line react/require-render-return
    /*
    * JSX => return block
    * fragment
    * */
    render() {
        return (
            // <React.Fragment>
            //     <div className="first">
            //         <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
            //     </div>
            //     <div className={'index'}>hello {this.state.name}</div>
            //     <div>{name}</div>
            //     <div className='third'>
            //         <button style={{cursor: 'pointer'}} onClick={(event) => this.onClickBtn(event)}>click me</button>
            //     </div>
            // </React.Fragment>
            <>
                <AddComponent addNewJob={this.addNewJob} editJob={this.state_change}/>
                {/*name={this.state.firstName} age={'26'} address={'Hưng yên'} arrJobs={this.state.arrJobs}*/}
                {/*editJob={this.editJob}*/}
                <ChildComponent arrJobs={this.state.arrJobs} addNewJob={this.addNewJob} />
            </>
        )
    }
}

export default MyComponent;