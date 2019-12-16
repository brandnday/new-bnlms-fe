import { callPost, callPostWithAuth } from "../common";
import moment from "moment";
import sortBy from "lodash/sortBy";
import { REPORT_BIRTHDAY_GET } from "../../constant/apiEndpoints";
import { selectSelectedChurch } from "../account/AccountReducer";
import { downloadCSV } from "../../tools/csvGenerator";
export const downloadBIrthdayReport = monthId => async (dispatch, getState) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(callPostWithAuth(REPORT_BIRTHDAY_GET, {
    monthId,
    churchId
  }));
  let csvData = [];
  if (monthId === 12) {
    csvData = res.rows.map(people => ({
      Name: people.name,
      Birthdate: moment(people.birthdate).format("DD MMM YYYY"),
      Birthmonth: moment(people.birthdate).format("MM")
    }));
    csvData = sortBy(csvData, "Birthmonth");
  } else {
    csvData = res.rows.map(people => ({
      Name: people.name,
      Birthdate: moment(people.birthdate).format("DD MMM YYYY")
    }));
  }
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "All Months"
  ];

  downloadCSV({
    filename: `Birthday ${monthName[monthId]}.csv`,
    data: csvData,
    columns: ["Name", "Birthdate"]
  });
};
