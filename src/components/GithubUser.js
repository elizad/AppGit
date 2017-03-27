import React from  'react';

class GithubUser extends React.Component{


    constructor() {
        super();
        this.state.followers = {};
    }



    render(){
        return(
            <Link to="/user/elizad">
                <img src="AVATAR URL"/>
                elizad
            </Link>
        );
    }
}

export default GithubUser;