'use client'
import { init } from "./init"

// it is a reducer function.
export const appReducer = (currData = init, newData)=>{
    //  here we have to merge the data;
    switch (newData.type) {
        case "NAME_UPDATE":
            return currData={
                ...currData,
                name:newData.payload
            }
          
    
            case "LOC_UPDATE":
               return currData={
                    ...currData,
                    loc:newData.payload
                }
               
    }
    
    return currData;
}