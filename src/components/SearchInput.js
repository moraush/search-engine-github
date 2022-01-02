import React from 'react';
//
//  <h1>image search engine</h1>
//  event handlers onclick onsubmit on change
class SearchInput extends React.Component {

  constructor(props){
    super(props)
    this.state={entry:''}
  }
  onFormSubmit=(event) =>{
event.preventDefault();
this.props.onSearchSubmit(this.state.entry)

  }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  render() {
    return (<div className='ui segment'>
      <form action="" onSubmit={this.onFormSubmit} className='ui form'>

        <div className='field'>
          <div className='ui massive icon input'>

            <input type='text' placeholder='image search engine .search here'
            onChange={(event)=>this.setState({entry:event.target.value})}
            value={this.state.entry}/>
            <i className='search icon'></i>
          </div>
        </div>
      </form>
    </div>)
  }
}
export default SearchInput;
//   // onInputChange(event) {
//   //   console.log(event.target.value)
//   // }
//
//   // store data , state
//   constructor(props){
//     super(props)
//     this.state={entry:'cars'}
//
//   }
//
//   render() {
//     return (<div className='ui segment'>
//       <form action="" className='ui form'>
//
//         <div className='field'>
//           <div className='ui massive icon input'>
//             <input type="text" placeholder='search here'
//             onSubmit={(event)=>this.setState({entry:event.target.value})}
// value={this.state.entry}
//             />
//
//             <i className='search icon'></i>
//           </div>
//         </div>
//       </form>
//     </div>)
//   }
// }
//
