document.getElementById("save").addEventListener("click", function () {
  const hostname = document.getElementById("hostname").value;
  const autoRedirect = document.getElementById("autoRedirect").checked;
  chrome.storage.sync.set(
    { pipedHostname: hostname, autoRedirect: autoRedirect },
    function () {
      alert("Options saved");
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["pipedHostname", "autoRedirect"], function (data) {
    document.getElementById("hostname").value =
      data.pipedHostname || "piped.kavin.rocks";
    document.getElementById("autoRedirect").checked =
      data.autoRedirect !== undefined ? data.autoRedirect : true;
  });
});
