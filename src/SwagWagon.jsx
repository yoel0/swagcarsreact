import React from 'react';
import logo from './wheel.png';
import './Swag.css'

const SwagWagon = props => {
 return (
    <div class="carBody">
        <div class="spoilerTop"></div>
        <div class="spoiler"></div>
        <div class="spoilerSupport"></div>
        <div class="depth"></div>
        <div class="exhaust1"></div>
        <div class="exhaust2"></div>
        <div class="carTop2">
            <div class="carTop"></div>
        </div>
        <div class="carShape"></div>
        <div class="carBottom">
            <div class="lightBeam"></div>
            <div class="headlight"></div>
            <div class="fender1"></div>
            <div class="fender2"></div>
            <img class="fire" src="http://www.clipartbest.com/cliparts/niE/yAR/niEyARbrT.png" alt="flames"></img>
            <div class="heady">
                <img src={logo} className="App-logo" alt="logo" />
                <div></div>
                <img src={logo} className="App-logo" alt="logo" />
                <div class="backlight"></div>
                <div class="underglow"></div>
            </div>
        </div>
    </div>
 )
}

export default SwagWagon