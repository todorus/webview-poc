window.checkBoxToggle = function(toggled, callback) {
    window.toggleMessageCallback = callback;
    var message = toggled ? 'Toggle Switch is on' : 'Toggle Switch is off';
    var executor = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.toggleMessageHandler
        ? window.webkit.messageHandlers.toggleMessageHandler : AndroidInterface;

    if (executor != undefined) {
        executor.postMessage(message);
    }
}