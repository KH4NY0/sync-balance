import React from 'react';
import AnimatedCountUp from "@/components/AnimatedCountUp";
import DoughnutChart from "@/components/DoughnutChart";

interface TotalBalanceBoxProps {
    accounts: Array<{ id: number; name: string; balance: number }>;
    totalBanks: number;
    totalCurrentBalance: number;
}

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
                                                             accounts = [],
                                                             totalBanks,
                                                             totalCurrentBalance,
                                                         }) => {

    return (
        <section className="total-balance">
           <div className="total-balance-chart">
                <DoughnutChart  accounts ={accounts=[]}/>
           </div>

            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total current balance
                    </p>

                    <p className="total-balance-amount flex-center gap[-2">
                        <AnimatedCountUp amount={totalCurrentBalance} />
                    </p>

                </div>

            </div>
        </section>
    );
};

export default TotalBalanceBox;
