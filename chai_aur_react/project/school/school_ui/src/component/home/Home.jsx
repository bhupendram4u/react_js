import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        console.log('MyComponent rendered Home');
    }, []);
  return (
    <div className="container">
        Home
    </div>
  )
}
