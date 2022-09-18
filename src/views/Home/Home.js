import React from "react";
import './Home.scss'
import {connect} from "react-redux";
import color from "../HOC/Color";

class Home extends React.Component {
    handelDelete = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleAddUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log((Math.random() + 1).toString(36).substring(7))
        let listUser = this.props.dataRedux;
        return (
            <div>
                {
                    listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <button onClick={() => this.handelDelete(item)}>X</button>
                                </div>
                            </>
                        )
                    })
                }
                <hr/>
                <button onClick={() => this.handleAddUser()}>Add User New</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_OBJECT',
            payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: 'ADD_USER'
        })
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(color(Home));
