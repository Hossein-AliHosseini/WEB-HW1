document.addEventListener("DOMContentLoaded", function () {
    // Function to evaluate a formula
    function evaluateFormula(formulaElement) {
        const evaluator = formulaElement.getAttribute("evaluator");
        const inputs = evaluator.split(/[\+\-\*\/\(\)\s]/).filter(id => id.trim() !== "");
        let expression = evaluator;

        // Check if all inputs are valid numbers
        let isValid = true;
        inputs.forEach(inputId => {
            const inputElement = document.getElementById(inputId);
            if (inputElement) {
                const value = inputElement.value.trim();
                if (value === "" || isNaN(value)) {
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            return "Invalid Formula";
        }

        // Replace input IDs with their values in the expression
        inputs.forEach(inputId => {
            const inputElement = document.getElementById(inputId);
            if (inputElement) {
                const value = parseFloat(inputElement.value) || 0;
                expression = expression.replace(inputId, value);
            }
        });

        try {
            const result = eval(expression);
            return isNaN(result) ? "Invalid Formula" : result;
        } catch (e) {
            return "Invalid Formula";
        }
    }

    // Function to update all formula results
    function updateResults() {
        const formulaElements = document.querySelectorAll("formula");
        formulaElements.forEach((formulaElement, index) => {
            const resultElement = document.getElementById(`result${index + 1}`);
            if (resultElement) {
                resultElement.value = evaluateFormula(formulaElement);
            }
        });
    }

    // Attach event listeners to all input fields
    const inputFields = document.querySelectorAll("input");
    inputFields.forEach(input => {
        input.addEventListener("input", updateResults);
    });

    // Initial calculation
    updateResults();
});