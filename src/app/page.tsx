'use client'

import { useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react'

import Button from '@/components/button';
import { PayResponse } from './types'
import api from '../api'
import './main.css'

export default function Home() {

    const router = useRouter();

    const checkout = useCallback(async () => {

        console.log('getting url')
        const res: AxiosResponse<PayResponse> = await api({
            method: "GET",
            url: "pay"
        });
        console.log('got url')
        
        router.push(res.data.checkout_url);
        console.log('redirected')
    }, []);

    
    const checkoutCustom = useCallback(async () => {

        const res: AxiosResponse<PayResponse> = await api({
            method: "GET",
            url: "pay"
        });

        router.push(`/checkout?id=${res.data.checkout_url.split('/')[res.data.checkout_url.split('/').length-2]}`);
    }, []);

    return (
        <div className="container">
            <Button cb={checkout} text={'Checkout'}></Button>
            <Button cb={checkoutCustom} text={'Checkout custom'}></Button>
        </div>
    )
}
