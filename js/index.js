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
