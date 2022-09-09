import { AxiosResponse } from 'node_modules/axios/index.d';
import { useEffect, useState } from 'react';


export const useFetch = (service: Promise<AxiosResponse<any, any>>) => {
    const [responseData, setResponseData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {    
        (async()=> {
            try {
            const result = await service
            setResponseData(result.data.results)
            } catch(err) {
                console.log('fetch Error', err)
            } finally {
                setIsLoading(false)
            }
        })()
        
    },[service])
    return {
        responseData,
        isLoading,
    }


}