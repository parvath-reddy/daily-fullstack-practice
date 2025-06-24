function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr;
    if (views < 1000000) {
        viewstr = Math.floor(views / 1000) + "K";
    } else {
        viewstr = Math.floor(views / 1000000) + "M";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="thumbnail">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewstr} views • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}

// Call the function properly (no dot at the end!)
createCard(
    "Introduction to Backend | Sigma Web Dev #2",
    "CodeWithHarry",
    540000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
);
