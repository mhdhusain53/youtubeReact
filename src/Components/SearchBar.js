import React from "react";


class SearchBar extends React.Component{

    state = {searchValue: ""};

    valueChange =(props) => {
        const name = props.target.value;
        this.setState({searchValue: name})
    }

    formSubmitted (event){
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchValue);
    }

    render(){
        return (
        <div className="ui segment">
            <form className="ui form"
                onSubmit={e=>this.formSubmitted(e)}    
            >
                <div className="field">
                    <label>
                        Search Videos
                    </label>
                    <input 
                        
                        type="text" 
                        value={this.state.searchValue}
                        onChange={(e)=>this.valueChange(e)}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;
// AIzaSyCTFsCN0S3vadOyDph3CvkVjFjGge7-rms