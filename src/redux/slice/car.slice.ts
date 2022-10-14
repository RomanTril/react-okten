import {createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interface";

interface IState{
    cars: ICar[]
}

const initialState:IState={
    cars:[]
}

const carSlice=createSlice({
    name:"carSlice",
    initialState,
    reducers:{},
    extraReducers:{}
})

const {reducer:carReducer,actions}=carSlice;

const carActions={

}

export {
    carActions,
    carReducer
}