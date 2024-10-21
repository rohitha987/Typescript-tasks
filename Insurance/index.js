function calculateInsurancePremium(policy) {
    var premium = 100;
    if (policy.age < 25) {
        premium += 50;
    }
    else if (policy.age > 50) {
        premium += 30;
    }
    switch (policy.healthStatus) {
        case 'excellent':
            premium -= 20;
            break;
        case 'good':
            break;
        case 'average':
            premium += 20;
            break;
        case 'poor':
            premium += 50;
            break;
    }
    if (policy.coverageAmount > 100000) {
        premium += (policy.coverageAmount - 100000) * 0.001;
    }
    return premium;
}
var policy = {
    age: 35,
    healthStatus: 'excellent',
    coverageAmount: 150000
};
var pre = calculateInsurancePremium(policy);
console.log("Insurance premium: ".concat(pre));
