function start() {
    console.log('Request handler "start" was called');

    function sleep(milliseconds) {
        const startTime = new Date().getTime();
        while (new Date().getTime < startTime + milliseconds);
    }

    sleep(10000);
    return 'Hello START';
}

function upload() {
    console.log('Request handler "upload" was called');
    return 'Hello UPLOAD';
}

exports.start = start;
exports.upload = upload;
