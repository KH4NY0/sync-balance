'use client'

import React from 'react'
import CountUp from "react-countup";


const AnimatedCountUp = ({ amount }: { amount: number}) => {
    return (
        <strong className="w-full">
            <CountUp
                decimals={2}
                decimal=","
                prefix="R"
                end={amount} />
        </strong>
    )
}

export default AnimatedCountUp