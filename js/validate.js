const accountErr = document.querySelector("#tbTKNV");
const nameErr = document.querySelector("#tbTen");
const emailErr = document.querySelector("#tbEmail");
const passwordErr = document.querySelector("#tbMatKhau");
const positionErr = document.querySelector("#tbChucVu");
const salaryErr = document.querySelector("#tbLuongCB");
const hourErr = document.querySelector("#tbGiolam");

function checkValidate(
  username,
  fullname,
  email,
  password,
  workingDay,
  basicSalary,
  position,
  workingHour
) {
  let isCheck = true;

  console.log(!isNaN(username));
  //   Check Account
  if (username == 0) {
    setErr(accountErr, "Tài khoản không được để trống");
    isCheck = false;
  } else if (isNaN(username)) {
    setErr(accountErr, "Vui lòng nhập đúng định dạng");
  } else if (username.toString().length < 4 || username.toString().length > 6) {
    setErr(accountErr, "Tài khoản chỉ từ 4 - 6 ký số");
    isCheck = false;
  } else {
    accountErr.classList.remove("d-block");
  }

  //   Kiểm tra tên nhân viên
  if (fullname.length == 0) {
    setErr(nameErr, "Tên không được để trống");
    isCheck = false;
  } else if (!isName(fullname)) {
    setErr(nameErr, "Tên không hợp lệ");
    isCheck = false;
  } else {
    nameErr.classList.remove("d-block");
  }

  //   Kiểm tra email

  if (email.length == 0) {
    setErr(emailErr, "Email không được để trống");
    isCheck = false;
  } else if (!isEmail(email)) {
    setErr(emailErr, "Email không hợp lệ");
    isCheck = false;
  } else {
    emailErr.classList.remove("d-block");
  }

  //   Kiểm tra mật khẩu

  if (password.length == 0) {
    setErr(passwordErr, "Password không được để trống");
    isCheck = false;
  } else if (!isPassword(password)) {
    setErr(passwordErr, "Password từ 6 kí tự, có ít nhất 1 chữ in hoa, 1 số");
    isCheck = false;
  } else {
    passwordErr.classList.remove("d-block");
  }
  //   Kiểm tra lương cơ bản

  if (basicSalary == 0) {
    setErr(salaryErr, "Lương cơ bản không được để trống");
    isCheck = false;
  } else if (isNaN(basicSalary)) {
    setErr(salaryErr, "Vui lòng nhập đúng định dạng");
  } else if (basicSalary < 1000000 || basicSalary > 20000000) {
    setErr(salaryErr, "Vui lòng nhập lương từ 1tr đến 20tr");
    isCheck = false;
  } else {
    salaryErr.classList.remove("d-block");
  }
  //   Kiểm tra chức vụ

  if (position == "") {
    setErr(positionErr, "Chức vụ không được để trống");
    isCheck = false;
  } else {
    positionErr.classList.remove("d-block");
  }
  //   Kiểm tra số giờ làm

  if (workingHour == 0) {
    setErr(hourErr, "Số giờ làm không được để trống");
    isCheck = false;
  } else if (isNaN(workingHour)) {
    setErr(hourErr, "Vui lòng nhập đúng định dạng");
  } else if (workingHour < 80 || workingHour > 200) {
    setErr(hourErr, "Vui lòng nhập giờ từ 80h đến 200h");
    isCheck = false;
  } else {
    hourErr.classList.remove("d-block");
  }

  return isCheck;
}

function setErr(spanErr, msg) {
  spanErr.innerText = msg;
  spanErr.classList.add("d-block");
}

function isName(name) {
  return /^[a-zA-Z ]+$/.test(name);
}

function isEmail(email) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
}
