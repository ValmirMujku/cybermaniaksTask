import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export type SubmitFormType = {
    id?:number | undefined,
    name:string | undefined,
    surname:string | undefined,
    address:string | undefined,
    city:string | undefined,
    country:string | undefined,
    email:string | undefined,
    phoneNumber:number | undefined | string,

}

export interface ISubmitForm{
    forms:SubmitFormType[]
}

 const InitialState:ISubmitForm={
    forms:[] as SubmitFormType[]
 }

//GET-METHOD-REDUX
 export const getFormsAsync = createAsyncThunk(
    'forms/getFormsAsync',
    async ()=> {
        const resp = await axios({
            method: "GET",
            url: "http://localhost:3500/forms",
        });
        if (resp.status === 201){
            return resp.data;
            
        } 
    }
);

//POST-METHOD-REDUX
export const addFormAsync = createAsyncThunk(
    'forms/addFormAsync',
    async(payload:SubmitFormType)=>{
      console.log(payload);
        const resp = await axios({
            method:'POST',
            url:'http://localhost:3500/forms',
            headers:{
                'Content-Type':'application/json',
            },
            data: payload
        });
    console.log(resp);
        if (resp.status === 201){
           return resp.data;
        }
    }
)

//PUT-METHOD-REDUX
export const modifyFormAsync  = createAsyncThunk (
    'forms/modifyFormAsync', 
    async(modTask:SubmitFormType) => {
 
        const resp = await axios({
            method:'PUT',
            url:`http://localhost:3500/forms/${modTask.id}`,
            headers:{
                'Content-Type':'application/json',
            },
            data: modTask 
            }); 
        if (resp.status === 201) {
            return resp.data;
        }
    }
) ;

//DELETE-METHOD-REDUX
export const deletFormAsync = createAsyncThunk(
    'forms/deletFormAsync',
    async(payload:number)=>{
 
        const resp = await axios({
            method:'DELETE',
            url:`http://localhost:3500/forms/:${payload}`,
            data:{
                id:payload,
            },
        });

        if(resp.status===201){
            return payload;
        }
    }
)

 export const formSlice = createSlice({
    name:'forms',
    initialState:InitialState,

    reducers:{

    },

    extraReducers:(builder)=>{
        builder.addCase(getFormsAsync.fulfilled,(state,action)=>{
            state.forms = action.payload;
        })
        builder.addCase(addFormAsync.fulfilled, (state,action)=>{
            state.forms.push(action.payload);
        })
        builder.addCase(deletFormAsync.fulfilled, (state,action)=>{
            state.forms = state.forms.filter((item)=>item.id !== action.payload);
        })
        builder.addCase(modifyFormAsync.fulfilled,(state, action)=>{
            const idx = state.forms.find((one)=>one.id === action.payload.id) || 0;

            return {
                ...state, tasks: state.forms.splice(idx as number, 1, action.payload)
            }
         })
    }
 });

 export default formSlice.reducer;

 export const forms = (state:RootState)=>state.forms.forms;