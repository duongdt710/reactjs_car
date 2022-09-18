import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {CircleLoader} from "react-spinners";

const override: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

class ShowLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <>
                <div style={{
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center"
                }}>
                    <CircleLoader color="#36d7b7"/> <span>Hệ thống đang tải dữ liệu, vui lòng đợi một lát...</span>
                </div>
            </>
        )
    }
}

export default ShowLoading;