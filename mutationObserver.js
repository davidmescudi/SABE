window.mutationLogs = [];

// Wait until baseline DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // MutationObserver to monitor DOM changes
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            const logEntry = {
                type: mutation.type,
                target: mutation.target.outerHTML,
                addedNodes: Array.from(mutation.addedNodes).map(node => node.outerHTML),
                removedNodes: Array.from(mutation.removedNodes).map(node => node.outerHTML),
                attributeName: mutation.attributeName
            };
            // Store log entry
            window.mutationLogs.push(logEntry);
        });
    });
    
    // Observe the entire document
    observer.observe(document, {
        childList: true,
        attributes: true,
        subtree: true
    });
})
