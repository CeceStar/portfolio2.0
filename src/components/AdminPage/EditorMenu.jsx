import React from "react";

const EditorMenu = () => {
    const postArray = ["First Headring", "Second Headring", "And another Headring"]
    return ( <div className="menu-div">
        <ul>
            <li>Add a new Post</li>
            <li>Edit a Post</li>
            <ul> {postArray.map((heading) => {
                return <li>{heading}</li>
            })}
                
            </ul>
        </ul>
    </div> );
}
 
export default EditorMenu;