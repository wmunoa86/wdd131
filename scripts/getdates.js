const currentYear = document.querySelector("#currentyear");
const getModification = document.querySelector("#lastModified");

//Format Date and Time
function formatDate(date) {
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    
    return `${mm}/${dd}/${yyyy} ${hh}:${min}:${ss}`;
};

let lastModification = new Date(document.lastModified);
const today = new Date();

const formattedDate = formatDate(lastModification);

currentYear.innerHTML = `${today.getFullYear()}`;
getModification.innerHTML = `Last Modification: ${formattedDate}`;


