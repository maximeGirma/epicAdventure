export const corner_NE = require('./Assets/Images/Obstacles/corner_NE.png')
export const corner_NO = require('./Assets/Images/Obstacles/corner_NO.png')
export const corner_SE = require('./Assets/Images/Obstacles/corner_SE.png')
export const corner_SO = require('./Assets/Images/Obstacles/corner_SO.png')
export const empty = require('./Assets/Images/Obstacles/empty.png')
export const end_bottom = require('./Assets/Images/Obstacles/end_bottom.png')
export const end_left = require('./Assets/Images/Obstacles/end_left.png')
export const end_right = require('./Assets/Images/Obstacles/end_right.png')
export const end_top = require('./Assets/Images/Obstacles/end_top.png')
export const horizontal_both = require('./Assets/Images/Obstacles/horizontal_both.png')
export const horizontal_bottom = require('./Assets/Images/Obstacles/horizontal_bottom.png')
export const horizontal_top = require('./Assets/Images/Obstacles/horizontal_top.png')
export const ice_wall = require('./Assets/Images/Obstacles/ice_wall.png')
export const jointure_NE = require('./Assets/Images/Obstacles/jointure_NE.png')
export const jointure_NO = require('./Assets/Images/Obstacles/jointure_NO.png')
export const jointure_SE = require('./Assets/Images/Obstacles/jointure_SE.png')
export const jointure_SO = require('./Assets/Images/Obstacles/jointure_SO.png')
export const square = require('./Assets/Images/Obstacles/square.png')
export const vertical_both = require('./Assets/Images/Obstacles/vertical_both.png')
export const vertical_left = require('./Assets/Images/Obstacles/vertical_left.png')
export const vertical_right = require('./Assets/Images/Obstacles/vertical_right.png')



export const getObstaclesDisposition =(level)=>{
    switch (level){
        case 1 : return [
            {
                left : 0.00,
                top : 0.00,
                percentageLeft : '0%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.05,
                percentageLeft : '0%',
                percentageTop : '5%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.10,
                percentageLeft : '0%',
                percentageTop : '10%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.15,
                percentageLeft : '0%',
                percentageTop : '15%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.20,
                percentageLeft : '0%',
                percentageTop : '20%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.25,
                percentageLeft : '0%',
                percentageTop : '25%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.30,
                percentageLeft : '0%',
                percentageTop : '30%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.35,
                percentageLeft : '0%',
                percentageTop : '35%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.40,
                percentageLeft : '0%',
                percentageTop : '40%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.45,
                percentageLeft : '0%',
                percentageTop : '45%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.50,
                percentageLeft : '0%',
                percentageTop : '50%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.55,
                percentageLeft : '0%',
                percentageTop : '55%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.60,
                percentageLeft : '0%',
                percentageTop : '60%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.65,
                percentageLeft : '0%',
                percentageTop : '65%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.70,
                percentageLeft : '0%',
                percentageTop : '70%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.75,
                percentageLeft : '0%',
                percentageTop : '75%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.80,
                percentageLeft : '0%',
                percentageTop : '80%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.85,
                percentageLeft : '0%',
                percentageTop : '85%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.90,
                percentageLeft : '0%',
                percentageTop : '90%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.95,
                percentageLeft : '0%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.05,
                top : 0.20,
                percentageLeft : '5%',
                percentageTop : '20%',
                asset : horizontal_top,
            },

            {
                left : 0.05,
                top : 0.25,
                percentageLeft : '5%',
                percentageTop : '25%',
                asset : vertical_right,
            },

            {
                left : 0.05,
                top : 0.30,
                percentageLeft : '5%',
                percentageTop : '30%',
                asset : corner_SE,
            },

            {
                left : 0.05,
                top : 0.95,
                percentageLeft : '5%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.10,
                top : 0.00,
                percentageLeft : '10%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.10,
                top : 0.20,
                percentageLeft : '10%',
                percentageTop : '20%',
                asset : horizontal_both,
            },

            {
                left : 0.10,
                top : 0.95,
                percentageLeft : '10%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.15,
                top : 0.00,
                percentageLeft : '15%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.15,
                top : 0.20,
                percentageLeft : '15%',
                percentageTop : '20%',
                asset : end_right,
            },

            {
                left : 0.15,
                top : 0.95,
                percentageLeft : '15%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.20,
                top : 0.00,
                percentageLeft : '20%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.20,
                top : 0.95,
                percentageLeft : '20%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.25,
                top : 0.00,
                percentageLeft : '25%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.25,
                top : 0.25,
                percentageLeft : '25%',
                percentageTop : '25%',
                asset : square,
            },

            {
                left : 0.25,
                top : 0.90,
                percentageLeft : '25%',
                percentageTop : '90%',
                asset : end_top,
            },

            {
                left : 0.25,
                top : 0.95,
                percentageLeft : '25%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.30,
                top : 0.00,
                percentageLeft : '30%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.30,
                top : 0.15,
                percentageLeft : '30%',
                percentageTop : '15%',
                asset : square,
            },

            {
                left : 0.30,
                top : 0.95,
                percentageLeft : '30%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.35,
                top : 0.00,
                percentageLeft : '35%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.35,
                top : 0.65,
                percentageLeft : '35%',
                percentageTop : '65%',
                asset : end_top,
            },

            {
                left : 0.35,
                top : 0.70,
                percentageLeft : '35%',
                percentageTop : '70%',
                asset : end_bottom,
            },

            {
                left : 0.35,
                top : 0.95,
                percentageLeft : '35%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.40,
                top : 0.00,
                percentageLeft : '40%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.40,
                top : 0.45,
                percentageLeft : '40%',
                percentageTop : '45%',
                asset : end_top,
            },

            {
                left : 0.40,
                top : 0.50,
                percentageLeft : '40%',
                percentageTop : '50%',
                asset : vertical_both,
            },

            {
                left : 0.40,
                top : 0.55,
                percentageLeft : '40%',
                percentageTop : '55%',
                asset : end_bottom,
            },

            {
                left : 0.40,
                top : 0.80,
                percentageLeft : '40%',
                percentageTop : '80%',
                asset : square,
            },

            {
                left : 0.40,
                top : 0.95,
                percentageLeft : '40%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.45,
                top : 0.00,
                percentageLeft : '45%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.45,
                top : 0.65,
                percentageLeft : '45%',
                percentageTop : '65%',
                asset : square,
            },

            {
                left : 0.45,
                top : 0.95,
                percentageLeft : '45%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.50,
                top : 0.00,
                percentageLeft : '50%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.50,
                top : 0.95,
                percentageLeft : '50%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.55,
                top : 0.00,
                percentageLeft : '55%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.55,
                top : 0.95,
                percentageLeft : '55%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.60,
                top : 0.00,
                percentageLeft : '60%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.60,
                top : 0.10,
                percentageLeft : '60%',
                percentageTop : '10%',
                asset : end_left,
            },

            {
                left : 0.60,
                top : 0.40,
                percentageLeft : '60%',
                percentageTop : '40%',
                asset : square,
            },

            {
                left : 0.60,
                top : 0.95,
                percentageLeft : '60%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.65,
                top : 0.00,
                percentageLeft : '65%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.65,
                top : 0.05,
                percentageLeft : '65%',
                percentageTop : '5%',
                asset : vertical_left,
            },

            {
                left : 0.65,
                top : 0.10,
                percentageLeft : '65%',
                percentageTop : '10%',
                asset : horizontal_bottom,
            },

            {
                left : 0.65,
                top : 0.60,
                percentageLeft : '65%',
                percentageTop : '60%',
                asset : end_top,
            },

            {
                left : 0.65,
                top : 0.65,
                percentageLeft : '65%',
                percentageTop : '65%',
                asset : corner_SO,
            },

            {
                left : 0.65,
                top : 0.95,
                percentageLeft : '65%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.70,
                top : 0.00,
                percentageLeft : '70%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.70,
                top : 0.05,
                percentageLeft : '70%',
                percentageTop : '5%',
                asset : empty,
            },

            {
                left : 0.70,
                top : 0.10,
                percentageLeft : '70%',
                percentageTop : '10%',
                asset : horizontal_bottom,
            },

            {
                left : 0.70,
                top : 0.35,
                percentageLeft : '70%',
                percentageTop : '35%',
                asset : square,
            },

            {
                left : 0.70,
                top : 0.65,
                percentageLeft : '70%',
                percentageTop : '65%',
                asset : end_right,
            },

            {
                left : 0.70,
                top : 0.95,
                percentageLeft : '70%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.75,
                top : 0.00,
                percentageLeft : '75%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.75,
                top : 0.05,
                percentageLeft : '75%',
                percentageTop : '5%',
                asset : vertical_right,
            },

            {
                left : 0.75,
                top : 0.10,
                percentageLeft : '75%',
                percentageTop : '10%',
                asset : corner_SE,
            },

            {
                left : 0.75,
                top : 0.70,
                percentageLeft : '75%',
                percentageTop : '70%',
                asset : square,
            },

            {
                left : 0.75,
                top : 0.90,
                percentageLeft : '75%',
                percentageTop : '90%',
                asset : end_top,
            },

            {
                left : 0.75,
                top : 0.95,
                percentageLeft : '75%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.80,
                top : 0.00,
                percentageLeft : '80%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.80,
                top : 0.80,
                percentageLeft : '80%',
                percentageTop : '80%',
                asset : end_top,
            },

            {
                left : 0.80,
                top : 0.85,
                percentageLeft : '80%',
                percentageTop : '85%',
                asset : end_bottom,
            },

            {
                left : 0.80,
                top : 0.95,
                percentageLeft : '80%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.85,
                top : 0.00,
                percentageLeft : '85%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.85,
                top : 0.95,
                percentageLeft : '85%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.90,
                top : 0.00,
                percentageLeft : '90%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.90,
                top : 0.15,
                percentageLeft : '90%',
                percentageTop : '15%',
                asset : end_left,
            },

            {
                left : 0.90,
                top : 0.25,
                percentageLeft : '90%',
                percentageTop : '25%',
                asset : end_left,
            },

            {
                left : 0.90,
                top : 0.50,
                percentageLeft : '90%',
                percentageTop : '50%',
                asset : end_left,
            },

            {
                left : 0.90,
                top : 0.65,
                percentageLeft : '90%',
                percentageTop : '65%',
                asset : end_left,
            },

            {
                left : 0.90,
                top : 0.95,
                percentageLeft : '90%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.00,
                percentageLeft : '95%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.05,
                percentageLeft : '95%',
                percentageTop : '5%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.10,
                percentageLeft : '95%',
                percentageTop : '10%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.15,
                percentageLeft : '95%',
                percentageTop : '15%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.20,
                percentageLeft : '95%',
                percentageTop : '20%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.25,
                percentageLeft : '95%',
                percentageTop : '25%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.30,
                percentageLeft : '95%',
                percentageTop : '30%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.35,
                percentageLeft : '95%',
                percentageTop : '35%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.40,
                percentageLeft : '95%',
                percentageTop : '40%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.45,
                percentageLeft : '95%',
                percentageTop : '45%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.50,
                percentageLeft : '95%',
                percentageTop : '50%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.55,
                percentageLeft : '95%',
                percentageTop : '55%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.60,
                percentageLeft : '95%',
                percentageTop : '60%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.65,
                percentageLeft : '95%',
                percentageTop : '65%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.70,
                percentageLeft : '95%',
                percentageTop : '70%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.75,
                percentageLeft : '95%',
                percentageTop : '75%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.80,
                percentageLeft : '95%',
                percentageTop : '80%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.85,
                percentageLeft : '95%',
                percentageTop : '85%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.95,
                percentageLeft : '95%',
                percentageTop : '95%',
                asset : ice_wall,
            },

        ]

        case 2 : return [
            {
                left : 0.00,
                top : 0.00,
                percentageLeft : '0%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.05,
                percentageLeft : '0%',
                percentageTop : '5%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.10,
                percentageLeft : '0%',
                percentageTop : '10%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.15,
                percentageLeft : '0%',
                percentageTop : '15%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.20,
                percentageLeft : '0%',
                percentageTop : '20%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.25,
                percentageLeft : '0%',
                percentageTop : '25%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.30,
                percentageLeft : '0%',
                percentageTop : '30%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.35,
                percentageLeft : '0%',
                percentageTop : '35%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.40,
                percentageLeft : '0%',
                percentageTop : '40%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.45,
                percentageLeft : '0%',
                percentageTop : '45%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.50,
                percentageLeft : '0%',
                percentageTop : '50%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.55,
                percentageLeft : '0%',
                percentageTop : '55%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.60,
                percentageLeft : '0%',
                percentageTop : '60%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.65,
                percentageLeft : '0%',
                percentageTop : '65%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.70,
                percentageLeft : '0%',
                percentageTop : '70%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.75,
                percentageLeft : '0%',
                percentageTop : '75%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.80,
                percentageLeft : '0%',
                percentageTop : '80%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.85,
                percentageLeft : '0%',
                percentageTop : '85%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.90,
                percentageLeft : '0%',
                percentageTop : '90%',
                asset : ice_wall,
            },

            {
                left : 0.00,
                top : 0.95,
                percentageLeft : '0%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.05,
                top : 0.00,
                percentageLeft : '5%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.05,
                top : 0.05,
                percentageLeft : '5%',
                percentageTop : '5%',
                asset : empty,
            },

            {
                left : 0.05,
                top : 0.10,
                percentageLeft : '5%',
                percentageTop : '10%',
                asset : empty,
            },

            {
                left : 0.05,
                top : 0.15,
                percentageLeft : '5%',
                percentageTop : '15%',
                asset : horizontal_bottom,
            },

            {
                left : 0.05,
                top : 0.30,
                percentageLeft : '5%',
                percentageTop : '30%',
                asset : horizontal_top,
            },

            {
                left : 0.05,
                top : 0.35,
                percentageLeft : '5%',
                percentageTop : '35%',
                asset : horizontal_bottom,
            },

            {
                left : 0.05,
                top : 0.80,
                percentageLeft : '5%',
                percentageTop : '80%',
                asset : end_right,
            },

            {
                left : 0.05,
                top : 0.95,
                percentageLeft : '5%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.10,
                top : 0.00,
                percentageLeft : '10%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.10,
                top : 0.05,
                percentageLeft : '10%',
                percentageTop : '5%',
                asset : vertical_right,
            },

            {
                left : 0.10,
                top : 0.10,
                percentageLeft : '10%',
                percentageTop : '10%',
                asset : vertical_right,
            },

            {
                left : 0.10,
                top : 0.15,
                percentageLeft : '10%',
                percentageTop : '15%',
                asset : corner_SE,
            },

            {
                left : 0.10,
                top : 0.30,
                percentageLeft : '10%',
                percentageTop : '30%',
                asset : horizontal_top,
            },

            {
                left : 0.10,
                top : 0.35,
                percentageLeft : '10%',
                percentageTop : '35%',
                asset : horizontal_bottom,
            },

            {
                left : 0.10,
                top : 0.95,
                percentageLeft : '10%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.15,
                top : 0.00,
                percentageLeft : '15%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.15,
                top : 0.30,
                percentageLeft : '15%',
                percentageTop : '30%',
                asset : corner_NE,
            },

            {
                left : 0.15,
                top : 0.35,
                percentageLeft : '15%',
                percentageTop : '35%',
                asset : corner_SE,
            },

            {
                left : 0.15,
                top : 0.95,
                percentageLeft : '15%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.20,
                top : 0.00,
                percentageLeft : '20%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.20,
                top : 0.95,
                percentageLeft : '20%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.25,
                top : 0.00,
                percentageLeft : '25%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.25,
                top : 0.75,
                percentageLeft : '25%',
                percentageTop : '75%',
                asset : corner_NO,
            },

            {
                left : 0.25,
                top : 0.80,
                percentageLeft : '25%',
                percentageTop : '80%',
                asset : corner_SO,
            },

            {
                left : 0.25,
                top : 0.95,
                percentageLeft : '25%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.30,
                top : 0.00,
                percentageLeft : '30%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.30,
                top : 0.75,
                percentageLeft : '30%',
                percentageTop : '75%',
                asset : horizontal_top,
            },

            {
                left : 0.30,
                top : 0.80,
                percentageLeft : '30%',
                percentageTop : '80%',
                asset : horizontal_bottom,
            },

            {
                left : 0.30,
                top : 0.95,
                percentageLeft : '30%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.35,
                top : 0.00,
                percentageLeft : '35%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.35,
                top : 0.25,
                percentageLeft : '35%',
                percentageTop : '25%',
                asset : square,
            },

            {
                left : 0.35,
                top : 0.75,
                percentageLeft : '35%',
                percentageTop : '75%',
                asset : corner_NE,
            },

            {
                left : 0.35,
                top : 0.80,
                percentageLeft : '35%',
                percentageTop : '80%',
                asset : horizontal_bottom,
            },

            {
                left : 0.35,
                top : 0.95,
                percentageLeft : '35%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.40,
                top : 0.00,
                percentageLeft : '40%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.40,
                top : 0.80,
                percentageLeft : '40%',
                percentageTop : '80%',
                asset : end_right,
            },

            {
                left : 0.40,
                top : 0.95,
                percentageLeft : '40%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.45,
                top : 0.00,
                percentageLeft : '45%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.45,
                top : 0.60,
                percentageLeft : '45%',
                percentageTop : '60%',
                asset : corner_NO,
            },

            {
                left : 0.45,
                top : 0.65,
                percentageLeft : '45%',
                percentageTop : '65%',
                asset : vertical_left,
            },

            {
                left : 0.45,
                top : 0.70,
                percentageLeft : '45%',
                percentageTop : '70%',
                asset : corner_SO,
            },

            {
                left : 0.45,
                top : 0.95,
                percentageLeft : '45%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.50,
                top : 0.00,
                percentageLeft : '50%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.50,
                top : 0.40,
                percentageLeft : '50%',
                percentageTop : '40%',
                asset : end_top,
            },

            {
                left : 0.50,
                top : 0.45,
                percentageLeft : '50%',
                percentageTop : '45%',
                asset : vertical_both,
            },

            {
                left : 0.50,
                top : 0.50,
                percentageLeft : '50%',
                percentageTop : '50%',
                asset : vertical_both,
            },

            {
                left : 0.50,
                top : 0.55,
                percentageLeft : '50%',
                percentageTop : '55%',
                asset : vertical_left,
            },

            {
                left : 0.50,
                top : 0.60,
                percentageLeft : '50%',
                percentageTop : '60%',
                asset : empty,
            },

            {
                left : 0.50,
                top : 0.65,
                percentageLeft : '50%',
                percentageTop : '65%',
                asset : vertical_right,
            },

            {
                left : 0.50,
                top : 0.70,
                percentageLeft : '50%',
                percentageTop : '70%',
                asset : corner_SE,
            },

            {
                left : 0.50,
                top : 0.95,
                percentageLeft : '50%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.55,
                top : 0.00,
                percentageLeft : '55%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.55,
                top : 0.05,
                percentageLeft : '55%',
                percentageTop : '5%',
                asset : vertical_left,
            },

            {
                left : 0.55,
                top : 0.10,
                percentageLeft : '55%',
                percentageTop : '10%',
                asset : corner_SO,
            },

            {
                left : 0.55,
                top : 0.55,
                percentageLeft : '55%',
                percentageTop : '55%',
                asset : horizontal_top,
            },

            {
                left : 0.55,
                top : 0.60,
                percentageLeft : '55%',
                percentageTop : '60%',
                asset : horizontal_bottom,
            },

            {
                left : 0.55,
                top : 0.80,
                percentageLeft : '55%',
                percentageTop : '80%',
                asset : square,
            },

            {
                left : 0.55,
                top : 0.95,
                percentageLeft : '55%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.60,
                top : 0.00,
                percentageLeft : '60%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.60,
                top : 0.05,
                percentageLeft : '60%',
                percentageTop : '5%',
                asset : empty,
            },

            {
                left : 0.60,
                top : 0.10,
                percentageLeft : '60%',
                percentageTop : '10%',
                asset : horizontal_bottom,
            },

            {
                left : 0.60,
                top : 0.55,
                percentageLeft : '60%',
                percentageTop : '55%',
                asset : horizontal_top,
            },

            {
                left : 0.60,
                top : 0.60,
                percentageLeft : '60%',
                percentageTop : '60%',
                asset : horizontal_bottom,
            },

            {
                left : 0.60,
                top : 0.95,
                percentageLeft : '60%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.65,
                top : 0.00,
                percentageLeft : '65%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.65,
                top : 0.05,
                percentageLeft : '65%',
                percentageTop : '5%',
                asset : vertical_right,
            },

            {
                left : 0.65,
                top : 0.10,
                percentageLeft : '65%',
                percentageTop : '10%',
                asset : corner_SE,
            },

            {
                left : 0.65,
                top : 0.55,
                percentageLeft : '65%',
                percentageTop : '55%',
                asset : horizontal_top,
            },

            {
                left : 0.65,
                top : 0.60,
                percentageLeft : '65%',
                percentageTop : '60%',
                asset : horizontal_bottom,
            },

            {
                left : 0.65,
                top : 0.95,
                percentageLeft : '65%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.70,
                top : 0.00,
                percentageLeft : '70%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.70,
                top : 0.55,
                percentageLeft : '70%',
                percentageTop : '55%',
                asset : horizontal_top,
            },

            {
                left : 0.70,
                top : 0.60,
                percentageLeft : '70%',
                percentageTop : '60%',
                asset : horizontal_bottom,
            },

            {
                left : 0.70,
                top : 0.95,
                percentageLeft : '70%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.75,
                top : 0.00,
                percentageLeft : '75%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.75,
                top : 0.50,
                percentageLeft : '75%',
                percentageTop : '50%',
                asset : corner_NO,
            },

            {
                left : 0.75,
                top : 0.55,
                percentageLeft : '75%',
                percentageTop : '55%',
                asset : empty,
            },

            {
                left : 0.75,
                top : 0.60,
                percentageLeft : '75%',
                percentageTop : '60%',
                asset : horizontal_bottom,
            },

            {
                left : 0.75,
                top : 0.95,
                percentageLeft : '75%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.80,
                top : 0.00,
                percentageLeft : '80%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.80,
                top : 0.50,
                percentageLeft : '80%',
                percentageTop : '50%',
                asset : corner_NE,
            },

            {
                left : 0.80,
                top : 0.55,
                percentageLeft : '80%',
                percentageTop : '55%',
                asset : vertical_right,
            },

            {
                left : 0.80,
                top : 0.60,
                percentageLeft : '80%',
                percentageTop : '60%',
                asset : corner_SE,
            },

            {
                left : 0.80,
                top : 0.95,
                percentageLeft : '80%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.85,
                top : 0.00,
                percentageLeft : '85%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.85,
                top : 0.95,
                percentageLeft : '85%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.90,
                top : 0.00,
                percentageLeft : '90%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.90,
                top : 0.95,
                percentageLeft : '90%',
                percentageTop : '95%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.00,
                percentageLeft : '95%',
                percentageTop : '0%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.05,
                percentageLeft : '95%',
                percentageTop : '5%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.10,
                percentageLeft : '95%',
                percentageTop : '10%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.15,
                percentageLeft : '95%',
                percentageTop : '15%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.20,
                percentageLeft : '95%',
                percentageTop : '20%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.25,
                percentageLeft : '95%',
                percentageTop : '25%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.30,
                percentageLeft : '95%',
                percentageTop : '30%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.35,
                percentageLeft : '95%',
                percentageTop : '35%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.40,
                percentageLeft : '95%',
                percentageTop : '40%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.45,
                percentageLeft : '95%',
                percentageTop : '45%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.50,
                percentageLeft : '95%',
                percentageTop : '50%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.55,
                percentageLeft : '95%',
                percentageTop : '55%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.60,
                percentageLeft : '95%',
                percentageTop : '60%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.65,
                percentageLeft : '95%',
                percentageTop : '65%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.70,
                percentageLeft : '95%',
                percentageTop : '70%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.80,
                percentageLeft : '95%',
                percentageTop : '80%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.85,
                percentageLeft : '95%',
                percentageTop : '85%',
                asset : ice_wall,
            },

            {
                left : 0.95,
                top : 0.95,
                percentageLeft : '95%',
                percentageTop : '95%',
                asset : ice_wall,
            },

        ]

        default : return false
    }
}

export const getStartingPoint = (level) =>{
    switch (level){
        case 1 : return {

            left : 0.05,
            top : 0.00,
            asset : empty}


        case 2 : return {

            left : 0.95,
            top : 0.90,
            asset : empty}


        default : return false
    }
}

export const getExit =  (level) =>{
    switch (level){
        case 1 : return {

            left : 0.95,
            top : 0.90,
            percentageLeft : '95%',
            percentageTop : '90%',
            asset : empty,
        }


        case 2 : return {

            left : 0.95,
            top : 0.75,
            percentageLeft : '95%',
            percentageTop : '75%',
            asset : empty,
        }


        default : return false
    }
}
