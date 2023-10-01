function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const PAYE_RATES = [
      { range: [0, 24000], rate: 0.1 },
      { range: [24001, 32333], rate: 0.25 },
      { range: [32334, 500000], rate: 0.3 },
      { range: [500001,  800000], rate: 0.32 },
      { range: [800001, Infinity], rate: 0.35 },
    ];
    const NHIF_RATES = {
        min: 150,
        max: 1700,
      };
      const NSSF_RATE_EMPLOYEE = 0.06;
      const NSSF_RATE_EMPLOYER = 0.06;
    
      // Calculate gross salary
      const grossSalary = basicSalary + benefits;
    
      // Calculate PAYE (Tax)
      let payee = 0;
      for (const rate of PAYE_RATES) {
        if (grossSalary >= rate.range[0]) {
          const taxableAmount = Math.min(grossSalary, rate.range[1]) - rate.range[0];
          payee += taxableAmount * rate.rate;
        } else {
          break;
        }
      }
    
      // Calculate NHIF deductions
      let NHIFDeductions = Math.min(grossSalary * NHIF_RATES.max, NHIF_RATES.max);
    
      // Calculate NSSF deductions for both employee and employer
      const nssfEmployeeDeductions = grossSalary * NSSF_RATE_EMPLOYEE;
      const nssfEmployerDeductions = grossSalary * NSSF_RATE_EMPLOYER;
    
      // Calculate net salary
      const netSalary = grossSalary - payee - nhifDeductions - nssfEmployeeDeductions;
    
      // results
      return {
        grossSalary,
        payee,
        NHIFDeductions,
        nssfEmployeeDeductions,
        nssfEmployerDeductions,
        netSalary,
      };
    }