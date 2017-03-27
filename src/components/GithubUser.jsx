import React from  'react';

class GithubUser extends React.Component{
    constructor(props) {
        super(props);
    }

    return() {
        return(
                <Link to="/${this.props.params.username}/${this.props.params.username.login}">
                <img src="${this.props.params.username.avatar_url}" alt="${this.props.params.login}"/>
                  {html_url}
                </Link>
               )
        }
    );
}

export default GithubUser;