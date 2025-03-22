document.addEventListener("DOMContentLoaded", function () {
    function evaluateQuadratic(a, b, c) {
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return "No real roots";
        }
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Roots: ${root1.toFixed(2)}, ${root2.toFixed(2)}`;
    }

    function evaluatePythagorean(a, b) {
        const c = Math.sqrt(a * a + b * b);
        return `Hypotenuse: ${c.toFixed(2)}`;
    }

    function evaluateCircleArea(r) {
        const area = Math.PI * r * r;
        return `Area: ${area.toFixed(2)}`;
    }

    function updateResults() {
        // Quadratic Formula
        const a = parseFloat(document.getElementById("a")?.value);
        const b = parseFloat(document.getElementById("b")?.value);
        const c = parseFloat(document.getElementById("c")?.value);
        const result1 = document.getElementById("result1");
        if (result1 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            result1.value = evaluateQuadratic(a, b, c);
        } else if (result1) {
            result1.value = "Invalid Formula";
        }

        // Pythagorean Theorem
        const sideA = parseFloat(document.getElementById("sideA")?.value);
        const sideB = parseFloat(document.getElementById("sideB")?.value);
        const result2 = document.getElementById("result2");
        if (result2 && !isNaN(sideA) && !isNaN(sideB) && sideA > 0 && sideB > 0) {
            result2.value = evaluatePythagorean(sideA, sideB);
        } else if (result2) {
            result2.value = "Invalid Formula";
        }

        // Area of a Circle
        const radius = parseFloat(document.getElementById("radius")?.value);
        const result3 = document.getElementById("result3");
        if (result3 && !isNaN(radius) && radius > 0) {
            result3.value = evaluateCircleArea(radius);
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