import { useRef, useState, useEffect } from "react";

var UseRef = () => {
    const [text, setText] = useState("");  // Corrected variable name
    var prevText = useRef("");

    useEffect(() => {
        prevText.current = text;
    }, [text]);

    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>My current Render is {text}</h2>
            <h3>My previous render is {prevText.current}</h3>
        </section>
    );
};

export default UseRef;
