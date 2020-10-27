export function Greeting(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.ner
        ),
        React.createElement(
            "h1",
            null,
            props.nas
        )
    );
}