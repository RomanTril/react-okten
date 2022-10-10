import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../service"

const initialState={
    posts:[],
    choosePost:null,
    error:null,
    loading:false,

}

const getAll=createAsyncThunk(
    "postSlice/getAll",
    async (_,{rejectedWithValue})=>{
        try {
            const {data}=await postsService.getAll();
            return data
        }catch (e){
             rejectedWithValue(e.response.data)
        }
    }
)


const postSlice=createSlice(
    {
        name:"postSlice",
        initialState,
        reducers:{
            setPost: (state, action) => {
                state.choosePost = action.payload
            },
            deletePost: (state, action) => {
                const index = state.posts.find(post => post.id===action.payload)
                state.posts.splice(index,1)
            }
        },
        extraReducers:builder =>
            builder
                .addCase(getAll.fulfilled,(state,action)=>{
                    state.posts=action.payload
                    state.loading=false
                })
                .addCase(getAll.rejected,(state,action)=>{
                    state.error=action.payload
                    state.loading=false
                })
                .addCase(getAll.pending,(state,action)=>{
                     state.loading=true
                })

    })
const{reducer:postReducer,actions:{setPost,deletePost}}=postSlice;

const postsActions={
    getAll,
    setPost,
    deletePost
}

export {
    postsActions,
    postReducer
}



