import {createStore}  from "redux";

const initialstate={user:{
    username:'ss',
    wallet:25000
}}
const updatewallett='updatewallet'
const action=(updatewallet)=>{
    {
        type:updatewallett,
        payload : amount
    }
};

function reducer((state=initialstate),action){
    switch(action.type){
        case 'updatewallet':{
            return{

                user:{
                    state.user.username :state.user.username,
                    state.user.wallet :tate.user.wallet-action.payload
                }
            }
        }

    }

}

const store=createStore(reducer);

export default store;