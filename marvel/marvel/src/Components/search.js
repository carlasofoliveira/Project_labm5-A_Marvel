import React from "react";

class Search extends React.Component {
    state = {title: ""}

    onSearchChanged = event => {
        const _title = event.target.value;
        this.setState({ title: _title });
        console.log(_title);
    }
    onSubmit = event => {
        event.preventDefault();
        console.log(this.state.title);
        this.props.onSearch(this.state.title);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-controls"/>
                    <label> Search</label>
                    <input value={this.state.title}
                           onChange={this.onSearchChanged} id="video-search" type="text"
                           placeholder="Enter Search Keyword"/><button type="submit"> Search </button>
                </form>
            </div>
        )
    }
}

export default Search;