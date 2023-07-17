let data = localStorage.getItem('jsonData');
document.getElementById('json-display').innerHTML = `<pre id="code">${data}</pre>`;

function copyCode(){
    navigator.clipboard.writeText(document.getElementById('code').innerHTML);
    console.log('copied');
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}

function downloadJSON(){

    // Create a Blob with the JSON data
    var blob = new Blob([data], { type: "application/json" });

    // Create a temporary anchor element to download the JSON file
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "user_data.json";

    // Programmatically click the link to start the download
    link.click();

    // Clean up by revoking the Object URL
    URL.revokeObjectURL(link.href);
}