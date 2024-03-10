import axios from "axios";
import { useEffect, useState } from "react";
import {getUsername} from '../Helper/helper'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN; 



export default function useFetch(query){
    const[getData, setData] = useState({isLoading : false, apiData: undefined, status : null, serverError: null})

    useEffect(()=>{
        if(!query) return;

        const fetchdata = async () => {
            try{
                setData(prev => ({ ...prev, isLoading: true}))

                const { username } = !query ? await getUsername() : '';

                const { data, status } = !query ? await axios.get(`/api/user/${username}`) : await axios.get(`/api/${query}`);

                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}))
                    setData(prev => ({ ...prev, apiData : data, status : status}))
                }

                setData(prev => ({ ...prev, isLoading: false}))

            }catch(error){
                setData(prev => ({ ...prev, isLoading: false,  serverError: error }))

            }
        }
        fetchdata()
    },[query])

    return [getData, setData];

}