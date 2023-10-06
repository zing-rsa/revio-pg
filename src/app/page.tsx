'use client'

import { useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react'

import Button from '@/components/button';
import { PayResponse } from './types'
import styles from './styles.module.css';
import api from '../api'

export default function Home() {

    const router = useRouter();

    const pay = useCallback(async () => {

        console.log('getting url')
        const res: AxiosResponse<PayResponse> = await api({
            method: "GET",
            url: "pay"
        });
        console.log('got url')
        
        router.push(res.data.checkout_url);
        console.log('redirected')
    }, []);

    return (
        <div className={styles.container}>
            <Button cb={pay} text={'Pay'}></Button>
            <Button cb={pay} text={'Pay custom'}></Button>
        </div>
    )
}
