import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { homePrice, downPaymentPercent, interestRate, loanTermYears } = body;

    const price = Number(homePrice) || 2500000;
    const downPct = Number(downPaymentPercent) || 20;
    const rate = Number(interestRate) || 6.5;
    const term = Number(loanTermYears) || 30;

    const downPaymentAmount = (price * downPct) / 100;
    const loanAmount = price - downPaymentAmount;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;

    const monthlyPayment =
      monthlyRate > 0
        ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        : loanAmount / numberOfPayments;

    return NextResponse.json({
      success: true,
      calculation: {
        homePrice: price,
        downPaymentAmount,
        loanAmount,
        monthlyPayment: Math.round(monthlyPayment),
        totalPayments: Math.round(monthlyPayment * numberOfPayments),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
