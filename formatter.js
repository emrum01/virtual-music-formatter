function encodeText(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function decode(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function getValueFromSheet(sheet, rowNum) {
  rowNum = Number(rowNum);
  console.log(typeof rowNum);

  return sheet.getRange(rowNum, 1).getValue();
}

function setValueToSheet(sheet, rowNum, value) {
  return sheet.getRange(rowNum, 2, 1, 1).setValue(value);
}

function formatter(text) {
  textList = text.split("");
  textListLength = textList.length;
  for (let i = 0; i < textListLength; i++) {
    if (textList[i] === "-") {
      textList[i] = "";
    } else if (textList[i] === "Ø") {
      textList[i] = "fl";
    } else if (textList[i] === "Æ") {
      textList[i] = "fi";
    } else if (textList[i] === "®") {
      textList[i] = "ff";
    }
  }
  newText = textList.join("");
  console.log(newText);
  return newText;
}

function GetActiveRow(objSheet) {
  var objRow = objSheet.getActiveCell().getRow();
  return objRow;
}

function main() {
  var objSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = objSpreadsheet.getActiveSheet();
  activeRow = GetActiveRow(sheet);
  console.log(activeRow);

  if (sheet.getActiveCell().getColumn() === 1) {
    text = getValueFromSheet(sheet, activeRow);
    console.log(text);
    encodedText = encodeText(text);
    formattedText = formatter(encodedText);

    valueToSet = decode(formattedText);

    setValueToSheet(sheet, activeRow, valueToSet);
    return;
  } else {
    return;
  }
}
