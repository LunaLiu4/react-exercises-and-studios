export default function HobbyLinks() {
    let hobbyLinks = ["https://www.youtube.com/watch?v=LijdyVaaDnY","https://www.nhl.com/"];
    return (
        <div>
            <h3>My HobbyLinks</h3>
            <ol>
                <li><a href={hobbyLinks[0]}>Swimming</a></li>
                <li><a href={hobbyLinks[0]}>Hockey</a></li>
            </ol>
        </div>
    )
}