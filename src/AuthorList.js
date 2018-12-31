import React, { Component } from 'react';

//AuthorCard component
import AuthorCard from './AuthorCard'
// import authors from './data';

class AuthorList extends Component {
    render() {

        const authorItem = this.props.authors.map(author => <AuthorCard key={author.first_name +" "+author.last_name} author={author}/>)

        return (
            <div className="authors">
                <h3>Authors</h3>
                <div className="row">
                
                {/* authors in the {this.props.authors[0]} is from {authos} list in the App.js */}
                {/* <AuthorCard author={this.props.authors[0]}/>
                <AuthorCard author={this.props.authors[1]}/>
                <AuthorCard author={this.props.authors[2]}/>
                <AuthorCard author={this.props.authors[3]}/> */}
                {authorItem}

                </div>
            </div>

        );
    }
}

export default AuthorList