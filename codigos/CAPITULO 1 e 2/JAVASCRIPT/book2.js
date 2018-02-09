function Book() {
    this.ISBN = "55555555";
    this.Length = 560;
    this.genre = "programming";
    this.covering = "soft";
    this.author = "John Doe";
    this.currentPage = 5,
        this.flipTo = function FlipToAPage(pNum) {
            this.currentPage = pNum;
        },
        this.turnPageForward = function turnForward() {
            this.flipTo(this.currentPage++);
        },
        this.turnPageBackward = function turnBackward() {
            this.flipTo(this.currentPage--);
        }
}
var books = new Array(new Book(), new Book(), new Book());
books[0].Length
