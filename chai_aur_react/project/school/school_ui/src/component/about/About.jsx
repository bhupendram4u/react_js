
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function About() {
    let { id } = useParams();
    useEffect(() => {
        console.log('MyComponent rendered ABOUT', id);
    }, []);
    return (
        <div className="container">
            About
        </div>
    )
}

export default About
