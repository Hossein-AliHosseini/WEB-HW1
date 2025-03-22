document.addEventListener("DOMContentLoaded", function () {
    function evaluateTotalCost(fee, count, discount) {
        return (count * fee - discount).toFixed(2);
    }

    function evaluateProfit(fee, count, costPrice, discount) {
        return (count * fee - count * costPrice - discount).toFixed(2);
    }

    function evaluateTax(fee, count, taxRate) {
        return (count * fee * taxRate).toFixed(2);
    }

    function updateResults() {
        // Total Cost Calculation
        const fee1 = parseFloat(document.getElementById("fee1")?.value);
        const count1 = parseFloat(document.getElementById("count1")?.value);
        const discount1 = parseFloat(document.getElementById("discount1")?.value);
        const result1 = document.getElementById("result1");
        if (result1 && !isNaN(fee1) && !isNaN(count1) && !isNaN(discount1)) {
            result1.value = evaluateTotalCost(fee1, count1, discount1);
        } else if (result1) {
            result1.value = "Invalid Formula";
        }

        // Profit Calculation
        const fee2 = parseFloat(document.getElementById("fee2")?.value);
        const count2 = parseFloat(document.getElementById("count2")?.value);
        const costPrice2 = parseFloat(document.getElementById("cost_price2")?.value);
        const discount2 = parseFloat(document.getElementById("discount2")?.value);
        const result2 = document.getElementById("result2");
        if (result2 && !isNaN(fee2) && !isNaN(count2) && !isNaN(costPrice2) && !isNaN(discount2)) {
            result2.value = evaluateProfit(fee2, count2, costPrice2, discount2);
        } else if (result2) {
            result2.value = "Invalid Formula";
        }

        // Tax Calculation
        const fee3 = parseFloat(document.getElementById("fee3")?.value);
        const count3 = parseFloat(document.getElementById("count3")?.value);
        const taxRate3 = parseFloat(document.getElementById("tax_rate3")?.value);
        const result3 = document.getElementById("result3");
        if (result3 && !isNaN(fee3) && !isNaN(count3) && !isNaN(taxRate3)) {
            result3.value = evaluateTax(fee3, count3, taxRate3);
        } else if (result3) {
            result3.value = "Invalid Formula";
        }
    }

    // Attach event listeners to all input fields
    const inputFields = document.querySelectorAll("input");
    inputFields.forEach(input => {
        input.addEventListener("input", updateResults);
    });

    // Initial calculation
    updateResults();
});