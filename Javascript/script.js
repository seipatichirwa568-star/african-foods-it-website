// AFRICAN FOODS IT WEBSITE
// Shared JavaScript for the manually updated pages.

// ACCEPTABLE USE CHECKLIST
// Only run this feature on a page that contains the checklist.
const checkboxes = document.querySelectorAll(".policy-checkbox");
const progressText = document.getElementById("checklist-progress");
const resetButton = document.getElementById("reset-checklist");

if (checkboxes.length > 0 && progressText && resetButton) {
    progressText.hidden = false;
    resetButton.hidden = false;

    function updateProgress() {
        let completed = 0;

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                completed++;
            }
        });

        progressText.textContent =
            completed + " of " + checkboxes.length + " items checked.";

        if (completed === checkboxes.length) {
            progressText.textContent +=
                " Checklist complete. Revisit any guidance you are unsure about.";
        }
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", updateProgress);
    });

    resetButton.addEventListener("click", function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        updateProgress();
    });

    updateProgress();
}


// PRINT POLICY
// Other policy pages can use a button with the same ID.
const printButton = document.getElementById("print-policy");

if (printButton) {
    printButton.hidden = false;

    printButton.addEventListener("click", function () {
        window.print();
    });
}


// PRINT EXPANDABLE EXAMPLES
// Open examples before printing and restore them afterwards.
let previousStates = [];

window.addEventListener("beforeprint", function () {
    const examples = document.querySelectorAll(".example-card");

    previousStates = [];

    examples.forEach(function (example) {
        previousStates.push({
            element: example,
            wasOpen: example.open
        });

        example.open = true;
    });
});

window.addEventListener("afterprint", function () {
    previousStates.forEach(function (item) {
        item.element.open = item.wasOpen;
    });

    previousStates = [];
});