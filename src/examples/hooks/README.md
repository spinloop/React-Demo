https://reactjs.org/docs/hooks-state.html

### State Hook

const [fruit, setFruit] = useState('banana');

This JavaScript syntax is called “array destructuring”.
It means that we’re making two new variables fruit and setFruit,
where fruit is set to the first value returned by useState, and
setFruit is the second.

# Effect Hook

The Effect Hook lets you perform side effects in function components.

What does useEffect do?
By using this Hook, you tell React that your component needs to do something after render.

Does useEffect run after every render?
Yes! By default, it runs both after the first render and after every update.

Why did we return a function from our effect?
This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it.

When exactly does React clean up an effect?
React performs the cleanup when the component unmounts.
