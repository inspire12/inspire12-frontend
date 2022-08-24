
const SimpleTopBar = () => {
    const style = {
        /* Add a black background color to the top navigation */
        topnav: {
            backgroundColor: "#333",
            overflow: "hidden"
        }
    }
    return (
        <nav style={style.topnav}>
            <ol>
                <li>안녕</li>
                <li>안녕</li>
                <li>안녕</li>
                <li>안녕</li>
            </ol>
        </nav>
    )
}

export default SimpleTopBar;