var feedContent = [];
var feed = document.getElementById('feedList');

class Post {

    constructor(title, image, caption, id) {
        this.title = title;
        this.image = image;
        this.caption = caption;
        this.id = id;
    }

    show() {
        console.log(this.title + "\n" + this.image + "\n" + this.caption + "\n" + this.id);
    }

    addtoFeed() {
        feedContent.push(this);
    }


};



var kyle = new Post('hello world',
    'url', 'hello world', '34322');

kyle.show();
kyle.addtoFeed();

// feedContent.push(kyle);


for (var i = 0; i < feedContent.length; i++) {
    current = feedContent[i];
    var para = document.createElement("li");
    var node = document.createTextNode("<h4>" + current.title + "</h4>" + '<img src="' + current.image + '" alt="not loaded">' + "<p>" + current.caption + "</p>");
    para.appendChild(node);
    feed.appendChild(para);

}