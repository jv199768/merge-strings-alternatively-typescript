let totalUnsatisfied: number = 0; // Track total unsatisfied customers if the owner is grumpy
let totalCustomers: number = 0; // Track total number of customers served satisfactorily
let windowUnsatisfied: number = 0; // Track unsatisfied customers in the current 'minutes' window
let maxIncrease: number = 0; // Maximum increase in satisfied customers possible by not being grumpy for 'minutes' duration

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    totalUnsatisfied = 0;
    totalCustomers = 0;
    windowUnsatisfied = 0;
    maxIncrease = 0;

    const n: number = customers.length;
    // Initial calculations without utilizing the special technique
    for (let i = 0; i < n; i++) {
        totalUnsatisfied += customers[i] * grumpy[i];
        totalCustomers += customers[i];
    }

    // Using a sliding window to find the best time to apply the technique
    for (let i = 0; i < n; i++) {
        windowUnsatisfied += customers[i] * grumpy[i];
        let endTime: number = i - minutes;

        if (endTime >= 0) {
            maxIncrease = Math.max(maxIncrease, totalCustomers - (totalUnsatisfied - windowUnsatisfied));
            windowUnsatisfied -= customers[endTime] * grumpy[endTime];
        }
    }
    // Handle the last possible window to make sure we don't miss the chance of optimizing at the end
    maxIncrease = Math.max(maxIncrease, totalCustomers - (totalUnsatisfied - windowUnsatisfied));

    // The result is the best scenario where the technique is applied in the optimal window
    return maxIncrease;
}
