import React, { useState } from 'react'

function Dropdown(props) {
    const [menu, setMenu] = useState(false);
    const [name, setName] = useState([]);

    const naming = () => {
        return setName(props.name)
    }
    console.log(naming)

    const dropDown = () => {
        setMenu(!menu)
    }
    // const list = name.map((name) => <li><a className="dropdown-item" href="#">{name}</a></li>)

    // console.log(list)

    return (
        <div>
            <div className="dropdown ">
                <button className="btn btn-secondary dropdown-toggle" onClick={dropDown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.label}
                </button>
                <ul className={menu ? "dropdown-menu show" : "dropdown-menu"}>
                    {/* {names} */}
                    {/* <li></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown