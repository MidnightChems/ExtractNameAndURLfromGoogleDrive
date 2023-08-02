function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var c = s.getActiveCell();
  var folderId = "ID HERE";
  var fldr = DriveApp.getFolderById(folderId);
  var files = fldr.getFiles();
  var links = [];
  
  while (files.hasNext()) {
    var file = files.next();
    var name = file.getName();
    var fileId = file.getId(); // Get the file ID
    var downloadLink = "https://drive.google.com/uc?id=" + fileId + "&export=download";
    links.push([name, downloadLink]);
  }
  
  s.getRange(c.getRow(), c.getColumn(), links.length, links[0].length).setValues(links);
}
