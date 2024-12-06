```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation. This will run once when the component mounts.
    console.log('Component mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```