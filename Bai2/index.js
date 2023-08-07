class Novel {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getAuthor() {
        return 'Author: ' + this.author
    }
}

const test = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Ngọc Ánh")
console.log(test.getAuthor())