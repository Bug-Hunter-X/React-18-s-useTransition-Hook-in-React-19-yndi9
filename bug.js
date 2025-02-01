```javascript
// This component uses the new useTransition hook in React 18 which is not supported in React 19
import { useTransition } from 'react';

function MyComponent() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      // Update state here
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isPending && <p>Loading...</p>}
    </div>
  );
}
```