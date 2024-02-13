import React from "react";
import "./Input.scss"

const Input =() => {
    return(
        <div className="input">
            <input type="text" placeholder="type message here" />
            <div className="send">
                <button>Send</button>
                {/* need to google talk to text feature */}
            </div>
        </div>
    )
}

export default Input