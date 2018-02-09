var book = {
    ISBN: "55555555",
    Length: 560,
    genre: "programming",
    covering: "soft",
    author: "John Doe",
    currentPage: 5,
    title: "My Big Book of Wonderful Things",
    flipTo: function flipToAPage(pNum) {
        this.currentPage = pNum;
    },
    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },
    turnPageBackward: function turnBackward() {
        this.flipTo(this.currentPage--);
    }
}
