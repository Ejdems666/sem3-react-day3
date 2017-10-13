# exec 2

* What is the purpose of the key value, which must be given to individual rows in a react-list
    * So the we can manipulate with the rows independently in the virtual DOM.
    * For example if we change one row only that particular row has to change, not the whole table
* It's recommended to use a unique value from you data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
    * index of the array, which is the second parameter of the map callback function.
* What is the difference(s) between state and props?
    * Props are read-only data passed to the component from the outside.
    * State are data that trigger re-rendering if they are changed.
* For which scenarios would you use props, and for which would you use state?
    * Props for constant or initial data, like list of numbers.
    * State for dynamic data, like value form a input.
* Where is the only place you can set state directly as in: this.state = {name: "Peter"};
    * constructor
* How must you set state all other places?
    * this.setState()

#exec 4

* In a Controlled Component React state is made the "Single source of truth", so how:
    * The same component that renders the inputs also manages their state.
* Do we ensure that input controls like text, textarea or select always presents the value found in the components state?
    * Yes by passing them value from state when they are created.
* Do we ensure that a controls state, always matches the value found in an input control?
    * Yes, using onChange event
* What is the purpose of doing event.preventDefault() in an event handler?
    * So the form won't submit to the server
* What would be the effect of NOT doing event.preventDefault in a submit handler
    * The form would submit to the server
* Why don't we want to submit the traditional way, in a single page application?
    * Because then the page would be reloaded and all components would start with their initial state
* What are the two different ways we can use to make this works as expected for our event handlers?
    * using preventDefault
* Explain in words what it takes to implement the "Controlled Component" pattern for a form
    * When we create an input for instance with initial value from Components state.
    
#exec 6

* What is meant by the react term “Lifting State Up”?
    * That there is a root component managing state of child components
* Where do you lift it up to?
    * To the root component using callbacks passed in props
* Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
    * top to bottom
* Lifting state up, involves a great deal of boilerplate code, what is the benefit we get from this strategy
    * That we have less coupled components, rather then having everything in the root component.