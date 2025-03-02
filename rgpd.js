document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const downloadBtn = document.getElementById("download-btn");
    const deleteBtn = document.getElementById("delete-btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Vos modifications ont été enregistrées.");
    });

    downloadBtn.addEventListener("click", function () {
        const userData = {
            nom: document.getElementById("name").value,
            email: document.getElementById("email").value
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "mes_donnees.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
            alert("Votre compte a été supprimé.");
        }
    });
});
