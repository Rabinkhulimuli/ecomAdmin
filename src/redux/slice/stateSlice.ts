import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface stateSliceType{
    title:string
    Icon:string
    subTitle:string
}
const initialState:stateSliceType={
    title:"Dashboard",
    Icon:"PiHouseThin",
    subTitle:"Create Product",
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
        },
        setSubTitle(state,action:PayloadAction<string>){
            state.subTitle=action.payload
        }
    }
})
export const {setTitle,setIcon,setSubTitle}= stateSlice.actions
export default stateSlice.reducer