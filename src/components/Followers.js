import React from 'react';
import GithubUser from  './GithubUser';

class Followers extends React.Component {
    constructor() {
        super();
        this.state.followers = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
            .then(response => response.json())
            .then(
                (followers) => {
                    this.setState({
                        followers,
                    });
                },
            );
    }

    render(){
                if(!this.state.followers) {
                    return <div>LOADING FOLLOWERS...</div>
                }

                return (
                    <div className="container followers-page">
                        <h2>Followers of {this.props.params.username}</h2>
                        <ul>
                            {this.state.followers.map( <GithubUser username="elizad"> </GithubUser> )}
                        </ul>
                    </div>
                );

    }

}

export default Followers;