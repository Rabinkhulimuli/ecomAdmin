import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface stateSliceType{
    title:string
    Icon:string
}
const initialState:stateSliceType={
    title:"Dashboard",
    Icon:"PiHouseThin"
}
const stateSlice=createSlice({
    name:"statetitle",
    initialState,
    reducers:{
        setTitle(state,action:PayloadAction<string>){
            state.title=action.payload
        },
        setIcon(state,action:PayloadAction<string>){
            state.Icon=action.payload
        }
    }
})
export const {setTitle,setIcon}= stateSlice.actions
export default stateSlice.reducer