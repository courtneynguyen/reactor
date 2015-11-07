import React, {Component} from 'react'
import ListItem from './components/ListItem'

class App extends Component {
	initializeSnippets(num){
		let snippetList = [];
		for(var x = 0; x < num; x++){
			let snippet = {
				title:"Courtney"
			};
			snippet.x = x * 150;
			snippetList.push(<ListItem model={snippet} />);
		}
		return snippetList;
	}
	render() {

		return (
			<div>
				{this.initializeSnippets(3)}
			</div>
		);
	}
}

export default App;
