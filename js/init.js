/* JavaScript code */

var cam_video_id = "camsource"

window.addEventListener('DOMContentLoaded', function() {
    // Assign the <video> element to a variable
    var video = document.getElementById(cam_video_id);
    var options = {
        "audio": false,
        "video": true
    };
    // Replace the source of the video element with the stream from the camera
    navigator.mediaDevices.getUserMedia(options)
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err) { console.log(err) });
    // getUserMedia(options, function(stream) {
    //     video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
    // }, function(error) {
    //     console.log(error)
    // });
    // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
    // getUserMedia({video: true}, successCallback, errorCallback);
}, false);

$(document).ready(function() {
    if (!navigator.mediaDevices.getUserMedia) return;
    cam = camera(cam_video_id);
    cam.start()
})
