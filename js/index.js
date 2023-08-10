let dsnv = [];

let jsonData = localStorage.getItem("DSNV");
if (jsonData) {
  let list = JSON.parse(jsonData);
  dsnv = list.map(
    (el) =>
      new NhanVien(
        el.username,
        el.fullname,
        el.email,
        el.password,
        el.workingDay,
        el.basicSalary,
        el.position,
        el.workingHour
      )
  );
  renderDSNV(dsnv);
}

function themNhanVien() {
  let nv = layThongTinTuForm();
  console.log(nv);
  let isValid = checkValidate(
    nv.username,
    nv.fullname,
    nv.email,
    nv.password,
    nv.workingDay,
    nv.basicSalary,
    nv.position,
    nv.workingHour
  );
  if (!isValid) return;
  dsnv.push(nv);
  let jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
  renderDSNV(dsnv);
}

document.querySelector("#btnThemNV").addEventListener("click", themNhanVien);

function suaNhanVien(account) {
  let index = timViTri(account, dsnv);
  showThongTinLenForm(dsnv[index]);
}

function xoaNhanVien(account) {
  let index = timViTri(account, dsnv);
  dsnv.splice(index, 1);
  let jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
  renderDSNV(dsnv);
}

function capNhatNhanVien() {
  let nv = layThongTinTuForm();
  let isValid = checkValidate(
    nv.username,
    nv.fullname,
    nv.email,
    nv.password,
    nv.workingDay,
    nv.basicSalary,
    nv.position,
    nv.workingHour
  );
  if (!isValid) return;

  let index = timViTri(nv.username, dsnv);
  dsnv[index] = nv;
  renderDSNV(dsnv);
  let jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
}

document
  .querySelector("#btnCapNhat")
  .addEventListener("click", capNhatNhanVien);
