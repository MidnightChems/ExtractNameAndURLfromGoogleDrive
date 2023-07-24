function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var c = s.getActiveCell();
  var fldr = DriveApp.getFolderById("ID HERE IN QUOTES");
  var files = fldr.getFiles();
  var names = [];
  while (files.hasNext()) {
    var f = files.next();
    var name = f.getName();
    var url = f.getUrl();
    names.push([name, url]);
  }
  s.getRange(c.getRow(), c.getColumn(), names.length, names[0].length).setValues(names);
}
