import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../service"

const initialState={
    users:[],
    chooseUser:null,
    loading:false,
    error:null,
    email:null
}

const getAll=createAsyncThunk(
    "userSlice/getAll",
    async (_,{rejectedWithValue})=>{
        try {
            const {data}= await usersService.getAll();
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)

const getByUser=createAsyncThunk(
    "userSlice/getByUser",
    async ({id},{rejectedWithValue})=>{
        try {
            const {data}= await usersService.getByUser(id)
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice=createSlice(
    {
        name:"userSlice",
        initialState,
        reducers:{
            setUser:(state, action)=>{
                state.chooseUser=action.payload
            },
            deleteUser:(state, action)=>{
                const index=state.users.findIndex(user=>user.id=action.payload)
                state.users.splice(index,1)
            }
        },
        extraReducers:builder =>
            builder
                .addCase(getAll.fulfilled,(state,action)=>{
                    state.users=action.payload
                    state.loading=false
                })
                .addCase(getAll.rejected, (state, action)=>{
                    state.error=action.payload
                    state.loading=false
                })
                .addCase(getAll.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(getByUser.fulfilled,(state, action)=>{
                    state.email=action.payload
                })
    })

const {reducer:userReducer,actions:{setUser,deleteUser}}=userSlice;

const userAction={
    getAll,
    setUser,
    getByUser,
    deleteUser
};

export {
    userReducer,
    userAction
}
