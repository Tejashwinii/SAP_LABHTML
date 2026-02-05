let students = [];

function addStudent() {
    const name = document.getElementById("name").value.trim();
    const marks = Number(document.getElementById("marks").value);
    const error = document.getElementById("error");

    if (name === "" || isNaN(marks)) {
        error.textContent = "Please enter valid student details.";
        return;
    }

    if (marks < 0 || marks > 100) {
        error.textContent = "Marks must be between 0 and 100.";
        return;
    }

    error.textContent = "";

    const grade = calculateGrade(marks);

    students.push({ name, marks, grade });
    renderTable();

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 60) return "C";
    else if (marks >= 40) return "D";
    else return "Fail";
}

function renderTable() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].marks}</td>
                <td>${students[i].grade}</td>
            </tr>
        `;
    }
}

