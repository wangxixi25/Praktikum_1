class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2><strong>{this.state.count}</strong></h2>
        <div>
          <button onClick={this.decreaseCount}>-1</button>
          <button onClick={this.increaseCount}>+1</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ClassCounter />, document.getElementById('TugasCounter'));


// ~ FunctionalCounter~
// import React, { useState } from 'react';

// function FunctionalCounter() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2><strong>{count}</strong></h2>
//       <div>
//         <button onClick={decreaseCount}>-1</button>
//         <button onClick={increaseCount}>+1</button>
//       </div>
//     </div>
//   );
// }

// export default FunctionalCounter;
// ReactDOM.render(<FunctionalCounter />, document.getElementById('TugasCounter'));