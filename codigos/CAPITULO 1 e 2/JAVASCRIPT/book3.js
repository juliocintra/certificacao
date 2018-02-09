function Book() {
    //just creates an empty book.
}
function Book(title, length, author) {
    this.title = title;
    this.Length = length;
    this.author = author;
}
Book.prototype = {
    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: "",
    currentPage: 0,
    title: "",
    flipTo: function FlipToAPage(pNum) {
        this.currentPage = pNum;
    },
    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },
    turnPageBackward: function turnBackward() {
        this.flipTo(this.currentPage--);
    }
};

var books = new Array(new Book(), new Book("First Edition",350,"Random"));