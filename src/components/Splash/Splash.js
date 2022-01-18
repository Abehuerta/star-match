import { useEffect, useState } from "react";
import { SplashIcon } from "../Svg";


const Splash = (props) => {
    console.log(props.splashStatus)
    return (
        <div className={props.splashStatus}>
            <SplashIcon/>
        </div>
    );
}

export default Splash;