'use client'

import { useSearchParams } from "next/navigation"

import { Button } from '@/components';
import './checkout.css';

export default function Checkout() {

    const params = useSearchParams();
    const id = params.get('id');

    return <div className={"container"}>
        <form className="checkout-form" action={`https://gate.reviopay.com/p/${id}/`} method="POST" >
            <label>CardHolder Name</label>
            <input className="form-input" type="text" id="cardholder_name" name="cardholder_name" />
            <br/>

            <label >Card number:</label>
            <input className="form-input" type="text" id="card_number" name="card_number" />
            <br/>

            <label>Expires:</label>
            <input className="form-input" type="text" id="expires" name="expires"  />
            <br/>

            <label>CVC:</label>
            <input className="form-input" type="text" id="cvc" name="cvc"  />
            <br/>

            <Button submit={true} text="Pay" cb={() => {}}></Button>
        </form>
    </div>
}