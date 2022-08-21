1) Index.js is the first file that gets ran when bootstrapping a React application.

2) A React component is an exported javascript function but it must return something that can be render in the browser (HTML).

3) React wants custom components to have names starting with uppercase.

4) Props allow you to accept in-parameters on a component function that come in from the component function html tag attributes.

5) HTML Tags used in component functions are still react components even though they look like plain html tags.

6) When pointing to custom functions in something like an onClick attribute for a button, you do not want to call the method directly such as deleteHandler() because it will execute immediately when the Todo is rendered later in App, and we only want it to render when clicked.

7) When using useState, setting the value with the second array index function will cause React to re-execute the component function that it's bound to.

8)