function Taxi(_loaiTaxi, _soKm, _thoiGianCho, _gia, _giaTGCho) {
    this.loaiTaxi = _loaiTaxi;
    this.soKm = _soKm;
    this.thoiGianCho = _thoiGianCho;
    this.gia = _gia;
    this.giaTGCho = _giaTGCho;

    this.tinhTien = function() {
        var rs = parseFloat(this.soKm * this.gia) + parseFloat(this.thoiGianCho * this.giaTGCho);
        return rs;
    }   
}