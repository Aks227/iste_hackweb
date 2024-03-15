import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Animations/second.json'
class AnimationPage2 extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <div>
               <Lottie
                options={defaultOptions}
                height={400}
                width={400}
               />
            </div>
        )
    };  
}
export default AnimationPage2;