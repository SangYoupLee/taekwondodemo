# Google Apps Script (무료) 설정

Apps Script는 브라우저에서 직접 호출 시 CORS 이슈가 생길 수 있습니다.
이 프로젝트는 **Vercel 서버리스 프록시**를 통해 호출하므로 JSONP가 필요 없습니다.

## 사용 방법
1) 구글 시트 생성 후 `확장 프로그램 > Apps Script`
2) 아래 코드 붙여넣기
3) `배포 > 새 배포`에서 웹 앱으로 배포
   - 실행 사용자: 본인
   - 접근 권한: 모든 사용자
4) 배포 URL을 `.env`에 설정
   - `VITE_FORM_ENDPOINT`
   - `VITE_FORM_READ_ENDPOINT`
5) `.env`의 `FORM_ACCESS_TOKEN` 값과
   아래 스크립트의 `ACCESS_TOKEN` 값을 동일하게 맞추기

```javascript
const SHEET_NAME = "submissions";
const ACCESS_TOKEN = "CHANGE_ME_SECRET";
const HEADERS = [
  "timestamp",
  "locale",
  "submissionId",
  "name",
  "birthdate",
  "gender",
  "nationality",
  "division",
  "weightClass",
  "team",
  "coach",
  "email",
  "phone",
  "emergency",
  "stay",
  "notes"
];

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function ensureHeader(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const headerExists = firstRow.some((value) => value);
  if (!headerExists) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function findSubmissionById(sheet, submissionId) {
  if (!submissionId) return false;
  const values = sheet.getRange(2, 1, sheet.getLastRow(), HEADERS.length).getValues();
  const idIndex = HEADERS.indexOf("submissionId");
  return values.some((row) => String(row[idIndex] || "") === String(submissionId));
}

function doPost(e) {
  const sheet = getSheet();
  ensureHeader(sheet);

  const data = JSON.parse(e.postData.contents || "{}");
  if (ACCESS_TOKEN && data.accessToken !== ACCESS_TOKEN) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "UNAUTHORIZED" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (findSubmissionById(sheet, data.submissionId)) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "DUPLICATE" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const row = [
    new Date(),
    data.locale || "",
    data.submissionId || "",
    data.name || "",
    data.birthdate || "",
    data.gender || "",
    data.nationality || "",
    data.division || "",
    data.weightClass || "",
    data.team || "",
    data.coach || "",
    data.email || "",
    data.phone || "",
    data.emergency || "",
    data.stay || "",
    data.notes || ""
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  if (ACCESS_TOKEN && e.parameter.token !== ACCESS_TOKEN) {
    return outputPayload({ ok: false, error: "UNAUTHORIZED" });
  }

  const sheet = getSheet();
  ensureHeader(sheet);
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).map((row) => {
    const item = {};
    HEADERS.forEach((key, index) => {
      item[key] = row[index];
    });
    return item;
  });

  return outputPayload({ ok: true, rows });
}

function outputPayload(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```
