import axios from "axios";

export const ApiInstance = axios.create({
    baseURL:'https://strapi-store-server.onrender.com/api',
})

const CurrencyFormater = ()=>{
    const moneyFormatter = new Intl.NumberFormat('en-Ghana',{
        style:"currency",
        currency:'GHC',
    }).format()
}

export const getNumberOfItems =(number)=>{
    return Array.from({length:number},(_,index)=>{
        const value=index+1
        return(
            <option value={value} key={value}>{value}</option>
        )
    })
}