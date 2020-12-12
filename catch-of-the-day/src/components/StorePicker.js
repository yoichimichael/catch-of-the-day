import React from 'react';
// from separate function file with named exports
import { getFunName } from '../helpers';

// capitalize first letter of class name
class StorePicker extends React.Component {
  constructor() {
    // necessary for a constructor method
    // extends functionality from Component
    super();

    // reassigns the function value by adding a binding
    // "When creating this class, bind 'this' to the goToStore method"
    this.goToStore = this.goToStore.bind(this);
  }

  // creates a reference to the form input
  myInput = React.createRef();

  // note: has to have 'this' bound to it in constructor
  // can avoid having to bind 'this' by using arrow syntax
  // arrow functions are bound by default
  goToStore(event) {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get the text from the input
    console.log(this.myInput.current.defaultValue)
    // 3. change the page to /store/whatever-they-entered
    // console.log("Going to Store");
  }
  
  render() {
    
    return (
      // this is a store picker
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>

        {/* when component mounts to DOM, will render a rand */}
        <input 
          type="text" 
          ref={this.myInput}
          required placeholder="Store Name" 
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
    // Example of JSX
    // return <p>I am the Store Picker!</p>

    // Example of no-JSX element creation:
    // React.createElement(‘p’, { className: ‘hey }, “Heyoooo’);
    
  }
}

export default StorePicker;