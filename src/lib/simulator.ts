export interface InvestmentOptions {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  isAnnualRate: boolean;
  timePeriod: number;
  isYears: boolean;
}

function calculateMonthlyRate(
  interestRate: number,
  isAnnualRate: boolean
): number {
  return isAnnualRate
    ? Math.pow(1 + interestRate / 100, 1 / 12) - 1
    : interestRate / 100;
}

function calculateTotalMonths(timePeriod: number, isYears: boolean): number {
  return isYears ? timePeriod * 12 : timePeriod;
}

export function calculateFinalAmount(options: InvestmentOptions): number {
  const {
    initialValue,
    monthlyValue,
    interestRate,
    isAnnualRate,
    timePeriod,
    isYears,
  } = options;
  const monthlyRate = calculateMonthlyRate(interestRate, isAnnualRate);
  const totalMonths = calculateTotalMonths(timePeriod, isYears);

  return (
    initialValue * Math.pow(1 + monthlyRate, totalMonths) +
    (monthlyValue * (Math.pow(1 + monthlyRate, totalMonths) - 1)) / monthlyRate
  );
}

// // Exemplo de uso:
// const options: InvestmentOptions = {
//   initialValue: 1000,
//   monthlyValue: 200,
//   interestRate: 5,
//   isAnnualRate: true,
//   timePeriod: 2,
//   isYears: true,
// };

// console.log('Final Amount:', calculateFinalAmount(options));
