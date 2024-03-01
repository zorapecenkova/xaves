function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const numVideos = 10; // Number of videos to display

    for (let i = 0; i < numVideos; i++) {
        const video = document.createElement("video");
        video.src = "your_video_source.mp4"; // Set your video source here
        video.controls = true;
        video.style.position = "absolute";
        video.style.left = Math.random() * 60 + "%"; // Random left position (up to 60% of container width)
        video.style.top = Math.random() * 60 + "%"; // Random top position (up to 60% of container height)
        video.style.width = Math.random() * 30 + 70 + "%"; // Random width (minimum 70% of original size)
        content.appendChild(video);
    }
});
