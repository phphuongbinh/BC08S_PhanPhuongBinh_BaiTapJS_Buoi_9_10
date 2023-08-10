function NhanVien(
  _username,
  _fullname,
  _email,
  _password,
  _workingDay,
  _basicSalary,
  _position,
  _workingHour
) {
  this.username = _username;
  this.fullname = _fullname;
  this.email = _email;
  this.password = _password;
  this.workingDay = _workingDay;
  this.basicSalary = _basicSalary;
  this.position = _position;
  this.workingHour = _workingHour;
  this.tinhTongLuong = function () {
    if (this.position === "Giám đốc") {
      return this.basicSalary * 3;
    } else if (this.position === "Trưởng phòng") {
      return this.basicSalary * 2;
    } else {
      return this.basicSalary;
    }
  };
  this.xepLoai = function () {
    if (this.workingHour >= 192) {
      return "NVXX";
    } else if (this.workingHour >= 176) {
      return "NVG";
    } else if (this.workingHour >= 160) {
      return "NVK";
    } else {
      return "NVTB";
    }
  };
}
