function loadSyllabus() {
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;
  const resultDiv = document.getElementById("result");

  fetch("syllabus.json")
    .then(res => res.json())
    .then(data => {
      const pdfPath = data?.[branch]?.[semester];
      if (pdfPath) {
        resultDiv.innerHTML = `
          ✅ Syllabus Found!<br><br>
          <a href="${pdfPath}" target="_blank">📥 View/Download PDF</a>
        `;
      } else {
        resultDiv.innerHTML = `❌ Syllabus not found for selected options.`;
      }
    });
}
