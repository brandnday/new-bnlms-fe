import React from "react";
import { CookiesProvider } from "react-cookie";
export const AuthWrapper =(BasePage)=>{
  
    return (
      <div>
        <BasePage/>
      </div>
    );
}