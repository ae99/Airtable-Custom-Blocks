const ownUrl = window.chrome.runtime.getURL("index.html");
setTimeout(
    () => {
        console.log(document.querySelectorAll("iframe"), ownUrl);
        for (const frame of document.querySelectorAll("iframe")) {
            const newFrame = document.createElement("iframe");                 // Create a <li> node
            newFrame.src = ownUrl;
            newFrame.style.cssText = frame.style.cssText;
            newFrame.classList.value = frame.classList.value;
            const parent = frame.parentElement;
            // frame.remove();
            parent.appendChild(newFrame);
        }
    }, 1000
)
