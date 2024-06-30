function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const NHIF_THRESHOLD = 6000;
    const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1400, 1500];
    const NSSF_RATE_EMPLOYEE = 0.06;
    const NSSF_RATE_EMPLOYER = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    if (grossSalary <= NHIF_THRESHOLD) {
        nhifDeduction = NHIF_RATES[0];
    } else if (grossSalary > NHIF_THRESHOLD && grossSalary <= 8000) {
        nhifDeduction = NHIF_RATES[1];
    } else if (grossSalary > 8000 && grossSalary <= 12000) {
        nhifDeduction = NHIF_RATES[2];
    } else if (grossSalary > 12000 && grossSalary <= 15000) {
        nhifDeduction = NHIF_RATES[3];
    } else if (grossSalary > 15000 && grossSalary <= 20000) {
        nhifDeduction = NHIF_RATES[4];
    } else if (grossSalary > 20000 && grossSalary <= 25000) {
        nhifDeduction = NHIF_RATES[5];
    } else if (grossSalary > 25000 && grossSalary <= 30000) {
        nhifDeduction = NHIF_RATES[6];
    } else if (grossSalary > 30000 && grossSalary <= 35000) {
        nhifDeduction = NHIF_RATES[7];
    } else if (grossSalary > 35000 && grossSalary <= 40000) {
        nhifDeduction = NHIF_RATES[8];
    } else if (grossSalary > 40000 && grossSalary <= 45000) {
        nhifDeduction = NHIF_RATES[9];
    } else if (grossSalary > 45000 && grossSalary <= 50000) {
        nhifDeduction = NHIF_RATES[10];
    } else if (grossSalary > 50000 && grossSalary <= 60000) {
        nhifDeduction = NHIF_RATES[11];
    } else if (grossSalary > 60000 && grossSalary <= 70000) {
        nhifDeduction = NHIF_RATES[12];
    } else {
        nhifDeduction = NHIF_RATES[13];
    }

    // Calculate NSSF deduction (employee)
    const nssfDeductionEmployee = grossSalary * NSSF_RATE_EMPLOYEE;

    // Calculate PAYE using KRA tax brackets
    let paye = 0;
    if (grossSalary <= 12298) {
        paye = 0.1 * grossSalary;
    } else if (grossSalary > 12298 && grossSalary <= 23885) {
        paye = 0.15 * (grossSalary - 12298) + 1229.8;
    } else if (grossSalary > 23885 && grossSalary <= 35472) {
        paye = 0.2 * (grossSalary - 23885) + 2621.05;
    } else if (grossSalary > 35472 && grossSalary <= 47059) {
        paye = 0.25 * (grossSalary - 35472) + 4453.55;
    } else {
        paye = 0.3 * (grossSalary - 47059) + 9457.55;
    }

    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeductionEmployee;

    // Output results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const NHIF_THRESHOLD = 6000;
    const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1400, 1500];
    const NSSF_RATE_EMPLOYEE = 0.06;
    const NSSF_RATE_EMPLOYER = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    if (grossSalary <= NHIF_THRESHOLD) {
        nhifDeduction = NHIF_RATES[0];
    } else if (grossSalary > NHIF_THRESHOLD && grossSalary <= 8000) {
        nhifDeduction = NHIF_RATES[1];
    } else if (grossSalary > 8000 && grossSalary <= 12000) {
        nhifDeduction = NHIF_RATES[2];
    } else if (grossSalary > 12000 && grossSalary <= 15000) {
        nhifDeduction = NHIF_RATES[3];
    } else if (grossSalary > 15000 && grossSalary <= 20000) {
        nhifDeduction = NHIF_RATES[4];
    } else if (grossSalary > 20000 && grossSalary <= 25000) {
        nhifDeduction = NHIF_RATES[5];
    } else if (grossSalary > 25000 && grossSalary <= 30000) {
        nhifDeduction = NHIF_RATES[6];
    } else if (grossSalary > 30000 && grossSalary <= 35000) {
        nhifDeduction = NHIF_RATES[7];
    } else if (grossSalary > 35000 && grossSalary <= 40000) {
        nhifDeduction = NHIF_RATES[8];
    } else if (grossSalary > 40000 && grossSalary <= 45000) {
        nhifDeduction = NHIF_RATES[9];
    } else if (grossSalary > 45000 && grossSalary <= 50000) {
        nhifDeduction = NHIF_RATES[10];
    } else if (grossSalary > 50000 && grossSalary <= 60000) {
        nhifDeduction = NHIF_RATES[11];
    } else if (grossSalary > 60000 && grossSalary <= 70000) {
        nhifDeduction = NHIF_RATES[12];
    } else {
        nhifDeduction = NHIF_RATES[13];
    }

    // Calculate NSSF deduction (employee)
    const nssfDeductionEmployee = grossSalary * NSSF_RATE_EMPLOYEE;

    // Calculate PAYE using KRA tax brackets
    let paye = 0;
    if (grossSalary <= 12298) {
        paye = 0.1 * grossSalary;
    } else if (grossSalary > 12298 && grossSalary <= 23885) {
        paye = 0.15 * (grossSalary - 12298) + 1229.8;
    } else if (grossSalary > 23885 && grossSalary <= 35472) {
        paye = 0.2 * (grossSalary - 23885) + 2621.05;
    } else if (grossSalary > 35472 && grossSalary <= 47059) {
        paye = 0.25 * (grossSalary - 35472) + 4453.55;
    } else {
        paye = 0.3 * (grossSalary - 47059) + 9457.55;
    }

    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeductionEmployee;

    // Output results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}


calculateNetSalary(60000, 10000); 



