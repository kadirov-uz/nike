import React, {  useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import './Product.css';
import classes from './Product.module.css';

function Product() {
    const [activeSelect, setActiveSelect] = useState(false);
    // const exampleDiv = useRef();//hoook
    // useEffect(() => {//hook
    //     exampleDiv.current.style.backgroundColor = "yellow"
    // }, [])
    // const [active, setActive] = useState(false);
    return (
        <div className="product">
            {/* <div ref={exampleDiv} className={classes.example}></div> */}
            {/* <div className={active ? "box activeBox" : "box"}></div>
            <button onClick={() => setActive(!active)}>Set active</button> */}
            <div className={classes.select} onClick={ () => setActiveSelect(!activeSelect)}>
                Categories { activeSelect ? <FiChevronDown/> : <FiChevronUp/>} 
            </div>
            <ul className={activeSelect  ? classes.activeUl : classes.notActiveUl}>
                <li><input type="checkbox" name="" id="" /> Option1</li>
                <li><input type="checkbox" name="" id="" /> Option2</li>
                <li><input type="checkbox" name="" id="" /> Option3</li>
                <li><input type="checkbox" name="" id="" /> Option4</li>
            </ul>
        </div>
    )
}

export default Product
