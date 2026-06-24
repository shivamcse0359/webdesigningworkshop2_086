
function calculateResult() {

    let numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects (greater than 0).");
        return;
    }

    let totalMarks = 0;
    let marksArray = [];

    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks for Subject " + i);
            return;
        }

        marksArray.push(mark);
        totalMarks += mark;
    }

    let averageMarks = totalMarks / numSubjects;
    averageMarks = parseFloat(averageMarks.toFixed(2));

    let grade;
    let gradeClass;

    if (averageMarks >= 90) {
        grade = "A";
        gradeClass = "grade-A";
    } else if (averageMarks >= 75) {
        grade = "B";
        gradeClass = "grade-B";
    } else if (averageMarks >= 60) {
        grade = "C";
        gradeClass = "grade-C";
    } else if (averageMarks >= 40) {
        grade = "D";
        gradeClass = "grade-D";
    } else {
        grade = "F";
        gradeClass = "grade-F";
    }

    let resultStatus;
    let resultClass;

    if (averageMarks >= 40) {
        resultStatus = "PASS";
        resultClass = "pass";
    } else {
        resultStatus = "FAIL";
        resultClass = "fail";
    }

    let resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = `
        <h2>📊 Result Summary</h2>
        <p>Total Marks: ${totalMarks}</p>
        <p>Average Marks: ${averageMarks}</p>
        <p>Grade: ${grade}</p>
        <p>Result: ${resultStatus}</p>
    `;

    resultBox.classList.remove("d-none");
}