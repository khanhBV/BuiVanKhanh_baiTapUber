function DanhSachHoaDon () {
    this.arr = [];

    this.themHoaDon = function(hd) {
        this.arr.push(hd);
    };

    this.tinhTongTien = function() {
        var tong = 0;
        this.arr.forEach(function(item) {
            tong = parseFloat(item.thanhTien) + parseFloat(tong);
        });
        return tong;
    }
}