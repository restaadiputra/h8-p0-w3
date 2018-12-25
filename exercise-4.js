var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(input) {
  // splice() function
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);

  // split()
  var date = input[3].split('/');
  
  switch (date[1]) {
  case '01':
    month = 'Januari';
    break;
  case '02':
    month = 'Februari';
    break;
  case '03':
    month = 'Maret';
    break;
  case '04':
    month = 'April';
    break;
  case '05':
    month = 'Mei';
    break;
  case '06':
    month = 'Juni';
    break;
  case '07':
    month = 'Juli';
    break;
  case '08':
    month = 'Agustus';
    break;
  case '09':
    month = 'September';
    break;
  case '10':
    month = 'Oktober';
    break;
  case '11':
    month = 'November';
    break;
  case '12':
    month = 'Desember';
    break;
  default:
    month = 'Salah Bulan'
    break;
  }
  console.log(month);
  
  // sort() function
  var dateInt = [parseInt(date[0]), parseInt(date[1]),parseInt(date[2])];
  console.log(dateInt.sort(function(value1, value2) {return value1 < value2}));

  // join() function
  console.log(date.join('-'));

  // slice() function
  console.log(input[1].slice(0,15))  
}