import React from 'react-native';
import LottieView from 'lottie-react-native';

export default class Learn extends React.Component{
    render() {
        return(
        <LottieView
        source = {
            require('../assets/23565-ready-to-learn.json')
        }
        style ={{
            width : "50%",
        }}
        autoPlay loop
        />
        );
    }
}