import React,{Component} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Tick extends Component{
    render() {
        return(   
        <LottieView
        source = {
            require('../assets/tick.json')
        }
        style ={{
            width : "50%",
        }}
        autoPlay loop
        />
        
         
        )
    }
}
