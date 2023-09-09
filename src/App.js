import React, {useEffect} from 'react';

const App = () => {
    useEffect(() => {
        const eventSource = new EventSource("http://localhost:8080/sse");

        eventSource.onmessage = (event) => {
            console.log("New message: ", event.data);
        };

        eventSource.addEventListener("message", (event) => {
            console.log("Message event: ", event.data);
        });

        eventSource.onerror = (error) => {
            console.log("EventSource failed:", error);
            console.log("Ready State:", eventSource.readyState);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div className="App">
            <h1>SSE with React and Spring Boot</h1>
        </div>
    );
};

export default App;