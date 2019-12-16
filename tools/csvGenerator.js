import Papa from "papaparse";

// usage
// downloadCSV({ 
//   filename: 'filename.csv',
//   data: [{'a': '1', 'b': 2'}],
//   columns: ['a','b']
// });

export const downloadCSV = args => {
  let filename = args.filename || "export.csv";
  let columns = args.columns || null;

  let csv = Papa.unparse({ data: args.data, fields: columns });
  if (csv == null) return;

  var blob = new Blob([csv]);
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveBlob(blob, args.filename);
  else {
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob, { type: "text/plain" });
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
