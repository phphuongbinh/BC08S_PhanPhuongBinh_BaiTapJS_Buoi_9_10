let dsnv = [];

let jsonData = localStorage.getItem("DSNV");
if (jsonData) {
  let list = JSON.parse(jsonData);
  dsnv = list.map(
    (el) =>
      new NhanVien(
        el.account,
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
    nv.account,
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
  document.getElementById("tknv").disabled = true;
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
    nv.account,
    nv.fullname,
    nv.email,
    nv.password,
    nv.workingDay,
    nv.basicSalary,
    nv.position,
    nv.workingHour
  );
  if (!isValid) return;
  let index = timViTri(nv.account, dsnv);
  dsnv[index] = nv;
  let jsonData = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", jsonData);
  renderDSNV(dsnv);
  document.querySelector("#btnCapNhat").dataset.dismiss = "modal";
  document.getElementById("tknv").disabled = false;
}

document
  .querySelector("#btnCapNhat")
  .addEventListener("click", capNhatNhanVien);

document.getElementById("btnDong").addEventListener("click", function () {
  document.getElementById("tknv").disabled = false;
  console.log("close");
});
