function layThongTinTuForm() {
  let _account = document.getElementById("tknv").value * 1;
  let _fullname = document.getElementById("name").value;
  let _email = document.getElementById("email").value;
  let _password = document.getElementById("password").value;
  let _workingDay = document
    .getElementById("datepicker")
    .value.split("-")
    .join("/");
  let _basicSalary = document.getElementById("luongCB").value * 1;
  let _position = document.getElementById("chucvu").value;
  let _workingHour = document.getElementById("gioLam").value * 1;
  return new NhanVien(
    _account,
    _fullname,
    _email,
    _password,
    _workingDay,
    _basicSalary,
    _position,
    _workingHour
  );
}

function renderDSNV(dsnv) {
  let contentHTML = "";
  dsnv.forEach((el) => {
    let contentTr = `
        <tr>
            <td>${el.account}</td>
            <td>${el.fullname}</td>
            <td>${el.email}</td>
            <td>${el.workingDay}</td>
            <td>${el.position}</td>
            <td>${el.tinhTongLuong()}</td>
            <td>${el.xepLoai()}</td>
            <td class="d-flex border-bottom-0">
            <button class="btn btn-info mx-1" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${
              el.account
            }')">
            <i class="fa fa-pencil-square"></i>
            </button>
            <button class="btn btn-danger mx-1" onclick="xoaNhanVien('${
              el.account
            }')">
            <i class="fa fa-trash" ></i>
            </button>
            </td>
            
        </tr>
        `;
    contentHTML += contentTr;
  });
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function timViTri(account, dsnv) {
  return dsnv.findIndex((el) => el.account == account);
}

function showThongTinLenForm(nv) {
  document.getElementById("tknv").value = nv.account;
  document.getElementById("name").value = nv.fullname;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.password;
  document.getElementById("datepicker").value = nv.workingDay;
  document.getElementById("luongCB").value = nv.basicSalary.toLocaleString();
  document.getElementById("chucvu").value = nv.position;
  document.getElementById("gioLam").value = nv.workingHour;
}
