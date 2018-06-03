import React from "react";

import {
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View,
    Animated,
    Easing, Image, ImageBackground,
} from 'react-native';
import {getExit, getObstaclesDisposition, getStartingPoint} from "./GetLevelConfiguration";


var obstacles = []


const Dimensions = require('Dimensions');

const window = Dimensions.get('window');
const SCREEN_GAME_SIZE = window.width
const SCREEN_HEIGHT = window.height
var obstaclesToDisplay = null;

var exit;
var exitToDisplay = null
const PERSO_DOWN_STATIC = require('./Assets/Images/Characters/MainCharacter/perso_down_static.png')
const PERSO_DOWN_MOOVING_1 = require('./Assets/Images/Characters/MainCharacter/perso_down_mooving_1.png')
const PERSO_DOWN_MOOVING_2 = require('./Assets/Images/Characters/MainCharacter/perso_down_mooving_2.png')
const PERSO_LEFT_STATIC = require('./Assets/Images/Characters/MainCharacter/perso_left_static.png')
const PERSO_TOP_STATIC = require('./Assets/Images/Characters/MainCharacter/perso_top_static.png')
const PERSO_RIGHT_STATIC = require('./Assets/Images/Characters/MainCharacter/perso_right_static.png')

const BACKGROUND = require('./Assets/Images/BackGrounds/snow_background.png')
var current_image = PERSO_DOWN_STATIC

var currentLevel = 1

type Props = {};



export default class GameScreen extends React.Component {

    constructor(){
        super()

        this.state={
            isEverythingLoaded : false,
            position:0,
            shouldMoove : false,
            bottomY : 0.95,
            topY:null,
            rightX:0.95,
            leftX:null,

            currentX : 0,
            currentY : 0,

            futurX : null,
            futurY : null,
            duration : 1000
        }
        this.animatedHorizontalValue = new Animated.Value(0)
        this.animatedVerticalValue = new Animated.Value(0)
        this.animating = false
        console.log('la construction')





    }

    componentDidMount(){
        this.initialiseCurrentLevel()
    }

    initialiseCurrentLevel = () => {
        this.initializeObstacles()
        let initialPlayerPosition = getStartingPoint(currentLevel)
        console.log('initialPosition :    ' + initialPlayerPosition.top)
        this.setState({topY: initialPlayerPosition.top})
        this.setState({leftX: initialPlayerPosition.left})
        this.setState({currentX : initialPlayerPosition.left})
        this.setState({currentY : initialPlayerPosition.top})
        this.animatedHorizontalValue.setValue(0)
        this.animatedVerticalValue.setValue(0)
        this.initializeExit()
        console.log('coucou')
        this.setState({isEverythingLoaded: true})
    }



    mooveTheSquare(){
        this.animatedVerticalValue.setValue(0)
        Animated.timing(
            this.animatedVerticalValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => {
                console.log('i don\'t know!!')
            }
        )
    }

    handlePress(event) {
        if (!this.animating) {
            console.log('x ===' + event.pageX)
            console.log('y ===' + event.pageY)
            console.log('screenSIZElimitTop ===' + SCREEN_HEIGHT*0.20)
            console.log('screenSIZElimitbottom ===' + SCREEN_HEIGHT*0.80)
            this.animating = true
            if (event.pageX < SCREEN_GAME_SIZE*0.33 && event.pageY > SCREEN_HEIGHT*0.20 && event.pageY < SCREEN_HEIGHT*0.80) {
                console.log('plutot gauche')
                current_image = PERSO_LEFT_STATIC
                this.setLeftPath()
            }
            else if (event.pageY < SCREEN_HEIGHT*0.33 && event.pageX > SCREEN_GAME_SIZE*0.20 && event.pageX < SCREEN_GAME_SIZE * 0.80) {
                console.log('plutot haut')
                current_image = PERSO_TOP_STATIC
                this.setTopPath()
            }
            else if (event.pageX > SCREEN_GAME_SIZE*0.66 && event.pageY > SCREEN_HEIGHT*0.20 && event.pageY < SCREEN_HEIGHT*0.80) {
                console.log('plutot droite')
                current_image = PERSO_RIGHT_STATIC
                this.setRightPath()
            }
            else if (event.pageY > SCREEN_HEIGHT*0.66 && event.pageX > SCREEN_GAME_SIZE*0.20 && event.pageX < SCREEN_GAME_SIZE * 0.80) {
                console.log('plutot bas')
                current_image = PERSO_DOWN_STATIC
                this.setBottomPath()
            }
            else {
                console.log('plutot rien')
                this.animating = false}
        }
    }
    handleRelease(event){
        console.log('handleRelease')
        this.setState({shouldMoove : false})
    }

    setLeftPath=()=>{
        this.setState({leftX:0})
        var maxDistanceLeftX = 0

        for(let i = 0; i < obstacles.length; i++) {
            if (this.state.currentY == obstacles[i].top && this.state.currentX > obstacles[i].left) {
                if (obstacles[i].left >= maxDistanceLeftX) {
                    console.log('a droite')
                    this.setState({leftX: (obstacles[i].left + 0.05).toFixed(2)})

                    maxDistanceLeftX = obstacles[i].left
                }
            }
        }
        this.goToLeft()

    }
    setRightPath=()=>{
        this.setState({rightX:0.95})
        var maxDistanceRightX = SCREEN_GAME_SIZE
        for(let i = 0; i < obstacles.length; i++) {
            //console.log('x === ' + this.state.currentX + '??' + obstacles[i].left)
            //console.log('y === ' + this.state.currentY + '??' + obstacles[i].top)
            if (this.state.currentY == obstacles[i].top && this.state.currentX < obstacles[i].left) {
                if (obstacles[i].left < maxDistanceRightX) {
                    console.log('a gauche de l\'obstacle')

                    console.log('x === ' + this.state.currentX)
                    console.log('y === ' + this.state.currentY)
                    this.setState({rightX: (obstacles[i].left -0.05).toFixed(2)})
                    setTimeout(()=>{console.log('++++++++++++++++++++' + this.state.rightX)},1)
                    maxDistanceRightX = obstacles[i].left
                }
            }
        }
        this.goToRight()
    }

    setTopPath=()=>{

        this.setState({topY:0})
        var maxDistanceTopY = 0

        for(let i = 0; i < obstacles.length; i++) {
            if (this.state.currentX == obstacles[i].left && this.state.currentY > obstacles[i].top) {
                if (obstacles[i].top >= maxDistanceTopY) {
                    console.log('en dessous')
                    this.setState({topY: (obstacles[i].top + 0.05).toFixed(2)})

                    maxDistanceTopY = obstacles[i].top
                }
            }
        }
        this.goToTop()
    }

    setBottomPath=()=>{

        this.setState({bottomY:0.95})
        var maxDistanceBottomY = SCREEN_GAME_SIZE

        for(let i = 0; i < obstacles.length; i++) {
            if (this.state.currentX == obstacles[i].left && this.state.currentY < obstacles[i].top) {
                console.log('obstacle détécté')
                if (obstacles[i].top < maxDistanceBottomY) {
                    console.log('maxDistance :: == ' + maxDistanceBottomY)
                    console.log('x === ' + this.state.currentX)
                    console.log('y === ' + this.state.currentY)
                    console.log('en dessus')
                    this.setState({bottomY: (obstacles[i].top - 0.05).toFixed(2)})

                    maxDistanceBottomY = obstacles[i].top
                }
            }
        }
        this.goToBottom()
    }


    goToRight(){

        this.setState({leftX : this.state.currentX})
        setTimeout(()=>{this.animatedHorizontalValue.setValue(0)},0)

        setTimeout(()=>{

            Animated.timing(
                this.animatedHorizontalValue,
                {
                    toValue: 1,
                    duration: (this.state.rightX - this.state.leftX) * this.state.duration,
                    easing: Easing.linear
                }
            ).start(() => {
                    console.log('i don\'t know!!')
                    console.log('rightX :' + this.state.rightX)
                    this.setState({currentX : this.state.rightX})
                    this.animating = false
                    this.animationHasEnded()
                }
            )},200)
    }

    goToLeft(){

        this.setState({rightX : this.state.currentX})
        setTimeout(()=>{this.animatedHorizontalValue.setValue(1)},0)

        setTimeout(()=>{
            Animated.timing(
                this.animatedHorizontalValue,
                {
                    toValue: 0,
                    duration: (this.state.rightX - this.state.leftX) * this.state.duration,
                    easing: Easing.linear
                }
            ).start(() => {
                    this.setState({currentX : this.state.leftX})
                    console.log('i don\'t know!!')
                    this.animating = false
                    this.animationHasEnded()
                }
            )},200)
    }

    goToBottom(){
        this.setState({topY : this.state.currentY})
        setTimeout(()=>{this.animatedVerticalValue.setValue(0)},0)
        setTimeout(()=>{

            Animated.timing(
                this.animatedVerticalValue,
                {
                    toValue: 1,
                    duration: (this.state.bottomY - this.state.topY) * this.state.duration,
                    easing: Easing.linear
                }
            ).start(() => {
                    this.setState({currentY : this.state.bottomY})
                    console.log('i don\'t know!!')
                    this.animating = false
                    this.animationHasEnded()
                }
            )
        },200)
    }

    goToTop(){
        this.setState({bottomY : this.state.currentY})
        setTimeout(()=>{this.animatedVerticalValue.setValue(1)},0)
        console.log('tata, elle fait des flans')
        setTimeout(()=> {
            Animated.timing(
                this.animatedVerticalValue,
                {
                    toValue: 0,
                    duration: (this.state.bottomY - this.state.topY) * this.state.duration,
                    easing: Easing.linear
                }
            ).start(() => {
                    this.setState({currentY: this.state.topY})
                    console.log('i don\'t know!!')
                    this.animating = false
                    this.animationHasEnded()
                }
            )
        },200)
    }

    animationHasEnded(){

        if (this.state.currentX == exit.left && this.state.currentY == exit.top){
            currentLevel++
            console.log('partie gagnée')
            alert('partie gagnee')
            this.initialiseCurrentLevel()
        }
    }

    initializeExit(){
        let tempExit = getExit(currentLevel)
        console.log(tempExit)
        exit = tempExit
        exitToDisplay = <View style={{
            width:'5%',
            height:'5%',
            backgroundColor:'yellow',
            position:'absolute',
            top:tempExit.percentageTop,
            left:tempExit.percentageLeft,
        }}></View>
    }

    initializeObstacles  () {
        console.log('GENERAAAAAAATTTETTETEEEEE!!!!')
        //reinitializing obstacles list
        obstacles = []

        var map = getObstaclesDisposition(currentLevel)

        var temporaryObstaclesList = []
        for (let i =0; i < map.length; i++){
            let imageName = map[i].asset
            let imagePath = './Assets/Images/Obstacles/' + imageName + '.png'
            //let requirePath = require(imagePath)
            temporaryObstaclesList.push(<Image
                style={[styles.form2,{top:map[i].percentageTop, left:map[i].percentageLeft,}]}

                source={map[i].asset}
            ></Image>)
            obstacles.push(
                {
                    left: map[i].left,
                    top: map[i].top,
                }
            )
        }
        obstaclesToDisplay = temporaryObstaclesList

    }



    render() {


        if (this.state.isEverythingLoaded) {
            var top = this.animatedVerticalValue.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.topY * SCREEN_GAME_SIZE, this.state.bottomY * SCREEN_GAME_SIZE]
            })

            var left = this.animatedHorizontalValue.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.leftX * SCREEN_GAME_SIZE, this.state.rightX * SCREEN_GAME_SIZE]
            })
            return (
                <View

                    style={styles.superContainer}
                    onStartShouldSetResponder={(evt) => true}
                    onResponderGrant={(evt) => {

                        this.handlePress(evt.nativeEvent)
                    }}
                    onResponderRelease={(evt) => {


                    }}

                >
                    <TouchableOpacity
                    onPress={()=>{
                        currentLevel++
                        this.initialiseCurrentLevel()
                    }}
                    ><Text>Pass to next level</Text></TouchableOpacity>
                    <ImageBackground
                        source={BACKGROUND}
                        style={styles.container}
                    >

                        <Animated.View style={[styles.character, {left: left, top: top}]}>
                            <Image
                                source={current_image}
                                style={{width:20, height:20}}
                            />
                        </Animated.View>
                        {obstaclesToDisplay}
                        {exitToDisplay}
                    </ImageBackground>
                </View>
            );
        }
        else{
            return(
                <View><Text>Waiting...</Text></View>
            )
        }
    }
}

const styles = StyleSheet.create({
    superContainer:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        backgroundColor:'blue'
    },
    container: {
        //flex: 1,
        width:'100%',
        height: Dimensions.get('window').width,
        backgroundColor: '#ff353d',

    },
    character:{
        width:'5%', // 20 cases on x
        height:'5%', //
        backgroundColor: 'green',
        position:'absolute',
        zIndex: 2,
    },
    form1:{
        width:'5%', // 20 cases on x
        height:'5%', //
        backgroundColor: 'green',
        position:'absolute',
        left:0,

    },
    form2:{
        width:'5%',
        height:'5%',
        backgroundColor:'blue',
        position:'absolute',


    },

});
