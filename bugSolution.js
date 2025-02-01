```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        // Handle errors
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {data && <p>Data: {data}</p>}
    </div>
  );
}
```