const colours = {

    primary: window.localStorage.getItem("primary") || "#0f52ba",
    secondary: window.localStorage.getItem("secondary") || "#BA770F",
    background: window.localStorage.getItem("background") || "#FBF7F5",
    good: window.localStorage.getItem("good") || "green",
    bad: window.localStorage.getItem("bad") || "red",
    
}

export default colours