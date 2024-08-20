//BÀI TẬP 1
function diemCongKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "X": {
      return 0;
    }
    case "A": {
      return 2;
    }
    case "B": {
      return 1;
    }
    case "C": {
      return 0.5;
    }
  }
}
function diemCongDoiTuong(doiTuong) {
  switch (doiTuong) {
    case 0: {
      return 0;
    }
    case 1: {
      return 2.5;
    }
    case 2: {
      return 1.5;
    }
    case 3: {
      return 1;
    }
  }
}
document.getElementById("ketQua").onclick = function () {
  let khuVuc = document.getElementById("khuVuc").value;
  let diemCongKhuVuc1 = diemCongKhuVuc(khuVuc);
  console.log(diemCongKhuVuc1);

  let obJect = document.getElementById("obJect").value * 1;
  let diemCongDoiTuong1 = diemCongDoiTuong(obJect);
  console.log(diemCongDoiTuong1);
  let diemChuan = document.getElementById("diemChuan").value * 1;
  console.log(diemChuan);
  let diemTong = 0;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  diemTong =
    diemMon1 + diemMon2 + diemMon3 + diemCongDoiTuong1 + diemCongKhuVuc1;
  console.log(diemTong);
  let thiDau = "<p>bạn đã đậu</p>";
  let thiRot = "<p>bạn đã rớt</p>";
  let result = 0;
  result = diemTong >= diemChuan ? thiDau : thiRot;
  document.querySelector(".ketQua1").innerHTML = result;
};
// BÀI TẬP 2
let giaKWDau = 500;
let giaKWTu50Toi100 = 650;
let giaKWTu100Toi200 = 850;
let giaKWTu200Toi350 = 1100;
let GiaKWTu350TroDi = 1300;
function tinhTienDien(soKW) {
  let toTal = 0;
  if (soKW < 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else if (soKW <= 50) {
    toTal = giaKWDau * soKW;
    return toTal;
  } else if (50 < soKW && soKW <= 100) {
    toTal = 50 * giaKWDau + (soKW - 50) * giaKWTu50Toi100;
    return toTal;
  } else if (100 < soKW && soKW <= 200) {
    toTal =
      50 * giaKWDau + 50 * giaKWTu50Toi100 + (soKW - 100) * giaKWTu100Toi200;
    return toTal;
  } else if (200 < soKW && soKW <= 350) {
    toTal =
      50 * giaKWDau +
      50 * giaKWTu50Toi100 +
      100 * giaKWTu100Toi200 +
      (soKW - 200) * giaKWTu200Toi350;
    return toTal;
  } else {
    toTal =
      50 * giaKWDau +
      50 * giaKWTu50Toi100 +
      100 * giaKWTu100Toi200 +
      150 * giaKWTu200Toi350 +
      (soKW - 350) * GiaKWTu350TroDi;
    return toTal;
  }
}
document.getElementById("tinhTien").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;

  let soKW = document.getElementById("soKW").value * 1;
  let tinhTien = tinhTienDien(soKW);
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `<p> Họ tên: ${hoTen}; tiền điện : ${tinhTien}`;
};
// Bài tập 3
document.getElementById("tinhThue").onclick = function () {
  let hoTen = document.getElementById("hovaTen").value;
  let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuthuoc").value * 1;
  let ThuNhapChiuThue = 0;
  ThuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
  let tienThuePhaiDong = 0;
  if (ThuNhapChiuThue < 0) {
    tienThuePhaiDong = 0;
  } else if (0 < ThuNhapChiuThue && ThuNhapChiuThue < 60e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 5) / 100;
  } else if (60e6 < ThuNhapChiuThue && ThuNhapChiuThue < 120e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 10) / 100;
  } else if (120e6 < ThuNhapChiuThue && ThuNhapChiuThue < 210e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 15) / 100;
  } else if (210e6 < ThuNhapChiuThue && ThuNhapChiuThue < 384e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 20) / 100;
  } else if (384e6 < ThuNhapChiuThue && ThuNhapChiuThue < 624e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 25) / 100;
  } else if (624e6 < ThuNhapChiuThue && ThuNhapChiuThue < 960e6) {
    tienThuePhaiDong = (ThuNhapChiuThue * 30) / 100;
  } else {
    tienThuePhaiDong = (ThuNhapChiuThue * 35) / 100;
  }
  let tienTe = tienThuePhaiDong.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".ketQua3"
  ).innerHTML = `<p>Họ tên : ${hoTen}, tiền thuế thu nhập cá nhân : ${tienTe}`;
};
// Bài tập 4

const nhaDan = "nhaDan";
const doanhNghiep = "DoanhNghiep";

function tiendoanhNghiep(soKetNoi) {
  let tongTienKetNoi = 0;
  if (soKetNoi <= 10) {
    tongTienKetNoi = 75;
    return tongTienKetNoi;
  } else {
    let tienKetNoi = 75;
    for (i = 10; i < soKetNoi; i++) {
      tienKetNoi += 5;
      // console.log(tienKetNoi);
    }
    tongTienKetNoi = tienKetNoi;
    return tongTienKetNoi;
  }
}
function anHiendiv() {
  let x = document.getElementById("mySelect").value;
  // console.log(x);
  if (x == doanhNghiep) {
    document.getElementById("soKetNoi1").style.display = "block";
  } else {
    document.getElementById("soKetNoi1").style.display = "none";
  }
}
document.getElementById("tinhTienCap").onclick = function () {
  let loaiKH = document.getElementById("mySelect").value;
  let maKH = document.getElementById("maKH").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let tienKNDN = tiendoanhNghiep(soKetNoi);
  let toTal = 0;
  if (loaiKH == 0) {
    alert("xin vui lòng chọn loại khách hàng");
  } else if (loaiKH == nhaDan) {
    toTal = 4.5 + 20.5 + 7.5 * soKenh;
  } else {
    toTal = 15 + tienKNDN + 50 * soKenh;
  }
  let tienTe = toTal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Mã Khách Hàng ${maKH}; Tiền cáp: ${tienTe}`;
};
