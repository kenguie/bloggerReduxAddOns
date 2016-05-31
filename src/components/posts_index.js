import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; - no longer needed
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

	componentWillMount() {
	    console.log('time to fetch posts!')  
	    this.props.fetchPosts(); // we can use this now because we've mapped the dispatch to props
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>
				List of blog posts
			</div>
		)
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);    // taken care of by a shortcut added to code below
// }

// export default connect(null, mapDispatchToProps)(PostsIndex); // first part is null bc we don't have any state yet


// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);   // shorten even more with ES6 helper

export default connect(null, { fetchPosts })(PostsIndex);