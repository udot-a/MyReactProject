import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.PureComponent {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode =()=>{
        this.setState({editMode:true})
    }
    deactivateEditMode =()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => this.setState({status: e.target.value})
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status||'---no status---'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                    />
                </div>
                }

            </div>
        );

    }
};
export default ProfileStatus;