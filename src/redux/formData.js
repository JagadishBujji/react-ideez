import {createSlice} from '@reduxjs/toolkit';

const initialState={
    formData:[]
}

const dataSlice=createSlice({
    name:"formData",
    initialState,
    reducers:{
        addData:(state,{payload})=>
        {
            state.formData=[...state.formData,payload];
        },
        updateData:(state,{payload})=>{
            const except=state.formData.filter((sts)=>{
                return sts.id!==payload.id
            })
            // console.log("excepit",except)
            // console.log("payloac",payload)
            const newDa=[...except,payload];
            // console.log("newdata",newDa)
            state.formData=newDa;
        }
    }
})

export const {addData,updateData}=dataSlice.actions;
export default dataSlice.reducer;