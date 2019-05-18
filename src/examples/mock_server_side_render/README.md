To mock server-side rendering I am converting a react component to just html & css.
Thus, there isn't access to the browser's window object, react component state,
click events, etc at runtime in the browser like a normal react component.

To add that functionality back I'm using a script that grabs DOM nodes directly
via an id or class to manipulate them. For example, the script can use the
browser's window object and create click events even though the react component
cannot.

In other words, the react component would be turned into html & css on the server
where there's no window object.

Scripts injected via react's (really html5's) innerHTML will not execute so using
`InnerHTML` of `dangerously-set-inner-html` to mock server-side rendering here.
