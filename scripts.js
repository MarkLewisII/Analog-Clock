function updateTime() {
    //Grab current time
    var currentdate = new Date();
    let seconds = currentdate.getSeconds();
    let minutes = currentdate.getMinutes();
    let hours= currentdate.getHours() % 12;

    // let timeText = `${hours}:${minutes}:${seconds}`;
    let timeText = currentdate.toLocaleTimeString();
    const digitalclock = document.getElementById('digitalclock');

    if (digitalclock) {
        digitalclock.textContent = timeText;
    }
}

updateTime();


const updateInterval = setInterval(updateTime, 1000);
// function SplitCurrentTime(currentTime) {
//     //Split time into Hours, Minutes, Seconds
// }

//Convert Hours, Minutes, and Seconds into angle on circle for clock hands rotation
function hourHandRotation() {
    
} 

function minuteHandRotation() {
    
}

function secondHandRotation() {
    
} 