import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Animations/first.json'
class AnimationPage extends Component {
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
                height={350}
                width={350}
               />
            </div>
        )
    };  
}
export default AnimationPage;