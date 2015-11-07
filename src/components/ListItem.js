import React, {Component} from 'react';
export class ListItem extends Component {
   constructor() {
      super();
   }
   onComponentDidMount(){
      console.log('ListItem, mounted!');
   }
   render(){
      this.divStyle = {
         'position': 'absolute',
         'backgroundColor': 'gray',
         'boxShadow': '0 0 1px 2px',
         'borderRadius': '4px',
         'width': '13%',
         'left': this.props.model.x + 'px'
      };
      return (
         <div className="ListItem" style={this.divStyle}>
            <h2>{this.props.model.title}</h2>
            <p>Like it! + </p>
            <p>Expand It! = </p>
            <p>Remove it! - </p>
         </div>
      );
   }
}

export default ListItem;
