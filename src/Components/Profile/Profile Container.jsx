import Profile from './Profile';
import axios from "axios"
import React from "react"
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../Redux/profileReduser";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { compose } from 'redux';


 class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router?.params.userId
        if (!userId) {
            userId = 27125
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render () {
        return <Profile {...this.props} 
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}/>
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth 

})
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
) (ProfileContainer)

