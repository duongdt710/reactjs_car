import React from "react";

class ChildComponent extends React.Component {
    // eslint-disable-next-line react/require-render-return
    state = {
        showJobs: false
    }

    // handleShowHide = () => {
    //     this.setState({
    //         showJobs: !this.state.showJobs
    //     })
    // }

    actionBtnItem = (event, index, action) => {
        if (action === 'delete') {
            this.props.addNewJob({
                id: event.id,
                index: index,
                delete: true
            })
        } else {
            this.props.editJob({
                id: event.id,
                title: event.title,
                salary: event.salary
            })
        }

    }

    render() {
        let {arrJobs} = this.props;
        // let {showJobs} = this.state;
        return (
            <>
                {/*{!showJobs ? <button onClick={() => this.handleShowHide()}>show</button> :*/}
                <div>
                    {arrJobs.map((item, index) => {
                        // if (item.salary >= 500) {
                            return (
                                <div key={item.id} >
                                   {item.title} - {item.salary}$
                                    <button style={{cursor: "pointer"}} onClick={() => this.actionBtnItem(item, index, 'delete')}>X</button>
                                    {/*<button style={{cursor: "pointer"}} onClick={() => this.actionBtnItem(item, null, 'edit')}>Edit</button>*/}
                                </div>
                            )
                        // }
                    })
                    }
                    {/*<button onClick={() => this.handleShowHide()}>Hide</button>*/}
                </div>
            </>
        )
    }
}


// arrow function
// const ChildComponent = (props) => {
//     console.log(props)
//     let {name, age, address, arrJobs} = props;
//     return (
//         <>
//             <div>hello arrow function</div>
//             <div>
//                 {name} - {age} - {address}
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.id} - {item.title}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;