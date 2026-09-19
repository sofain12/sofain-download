let count =
localStorage.getItem("downloads") || 0;


count++;


localStorage.setItem(
"downloads",
count
);


document.getElementById("downloads")
.innerHTML =
"تحميلات اليوم: " + count;
