var hoaDon ;
var dsHoaDon = new DanhSachHoaDon();;


function getElement(id) {
  return document.getElementById(id);
}

function setEle(id, value) {
  getElement(id).innerHTML = value;
}

function checkNullValue(_value) {
  if (_value === "") {
    return -1;
  }
}

function checkKm(_km) {
  if (_km < 0) {
    alert("please input number of km more than zero!!");
    return -1;
  }
  if (_km === 0) {
    return 0;
  }
  if (_km > 0 && _km <= 20) {
    return 1;
  }
  if (_km > 20) {
    return 2;
  }
}

function checkType(km) {
  var gia = 0,
    giaCho = 0,
    typeTX = "";
  var rsCheckKm = checkKm(km);
  if (getElement("uberX").checked) {
    giaCho = 2000;
    typeTX = "uberX";
    if (rsCheckKm === 0) {
      gia = 8000;
    } else if (rsCheckKm === 1) {
      gia = 12000;
    } else if (rsCheckKm === 2) {
      gia = 10000;
    }
  } else if (getElement("uberSUV").checked) {
    giaCho = 3000;
    typeTX = "uberSUV";

    if (rsCheckKm === 0) {
      gia = 9000;
    } else if (rsCheckKm === 1) {
      gia = 14000;
    } else if (rsCheckKm === 2) {
      gia = 12000;
    }
  } else if (getElement("uberBlack").checked) {
    giaCho = 4000;
    typeTX = "uberBlack";
    if (rsCheckKm === 0) {
      gia = 10000;
    } else if (rsCheckKm === 1) {
      gia = 16000;
    } else if (rsCheckKm === 2) {
      gia = 14000;
    }
  } else {
    return -1;
  }

  return [gia, giaCho, typeTX];
}

function tinhTien(soKm, gia, thoiGianCho, giaTGCho) {
  var rs;
  if (checkKm(soKm) === 0) {
    return (rs = parseFloat(gia) + parseFloat(thoiGianCho * giaTGCho));
  }

  return (rs = parseFloat(soKm * gia) + parseFloat(thoiGianCho * giaTGCho));
}

function xuatHoaDon() {
    taoBang();
}

function taoBang() {
  var content = "";
  console.log(dsHoaDon);
  //forEach
  dsHoaDon.arr.forEach(function (item) {
      console.log(item);
    content += `
              <tr>
                  <td>${item.chiTiet}</td>
                  <td>${item.suDung}</td>
                  <td>${item.donGia}</td>
                  <td>${item.thanhTien}</td>
              </tr>
          `;
  });
  content += `
            <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>${dsHoaDon.tinhTongTien()}</td>
            </tr>
  `;
  getElement("table_money").style.display = "block";
  getElement("bodyTable").innerHTML = content;
}

function main() {
  var soKm = getElement("soKM").value;
  var tgCho = getElement("tgCho").value;
  if (checkNullValue(soKm) == -1) {
    alert("Please input number km more than or equal zero !!!");
    return;
  } else if (checkNullValue(tgCho) === -1) {
    alert("Please input number delay time more than or equal zero !!!");
    return;
  }
  var kq = checkType(soKm);
  if (kq === -1) {
    alert("Please choose taxi Type!");
  } else {
    var tien = tinhTien(soKm, kq[0], tgCho, kq[1]);
    setEle("xuatTien", tien);
    hoaDon = new HoaDon(kq[2], soKm, kq[0], tien);
    dsHoaDon.themHoaDon(hoaDon);
    getElement("divThanhTien").style.display = "block";
    console.log(kq);
    console.log(tien);
    return dsHoaDon;
  }
}
