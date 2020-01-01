import { callPost, callPostWithAuth } from "../common";
import moment from "moment";
import sortBy from "lodash/sortBy";
import {
  REPORT_BIRTHDAY_GET,
  REPORT_SERVICE_GET,
  REPORT_MONTHLYPERSERVICE_GET,
  REPORT_YEARLYPERSERVICE_GET,
  REPORT_FOLLOWUP_GET,
  REPORT_POINT_GET
} from "../../constant/apiEndpoints";
import { selectSelectedChurch } from "../account/AccountReducer";
import { downloadCSV } from "../../tools/csvGenerator";
import { selectTermList } from "../term-manager/TermManagerReducer";
export const downloadBIrthdayReport = monthId => async (dispatch, getState) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(REPORT_BIRTHDAY_GET, {
      monthId,
      churchId
    })
  );
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

export const downloadPerServiceReport = (date, serviceId) => async (
  dispatch,
  getState
) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(REPORT_SERVICE_GET, {
      date: moment(date).format("YYYY-MM-DD"),
      serviceId,
      churchId
    })
  );
  let csvData = [];
  csvData = res.rows.map((people, INDEX) => ({
    Name: people.name,
    Time: people.time,
    "Service Name": people.servicename,
    Date: moment(people.date).format("DD MMM YYYY"),
    AttendanceStatus: people.attendancestatus === "G" ? "Attend" : "Late"
  }));
  csvData = sortBy(csvData, "time");
  downloadCSV({
    filename: `Attendance ${date}.csv`,
    data: csvData,
    columns: ["Name", "Time", "Date", "AttendanceStatus", "Service Name"]
  });
};

export const downloadMonthlyReport = date => async (dispatch, getState) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(REPORT_MONTHLYPERSERVICE_GET, {
      date: moment(date).format("YYYY-MM"),
      churchId
    })
  );
  let csvData = [];
  csvData = res.rows.map((service, INDEX) => ({
    Name: service.name,
    "Total Attendance": service.totalattendance,
    "Service Name": service.servicename,
    Date: moment(service.date).format("DD MMM YYYY")
  }));
  csvData = sortBy(csvData, "time");
  downloadCSV({
    filename: `Monthly Report ${moment(date).format("MMMM YYYY")}.csv`,
    data: csvData,
    columns: ["Date", "Service Name", "Total Attendance"]
  });
};

export const downloadYearlyReport = date => async (dispatch, getState) => {
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(REPORT_YEARLYPERSERVICE_GET, {
      year: date,
      churchId
    })
  );
  let csvData = [];
  csvData = res.rows.map((service, INDEX) => ({
    Name: service.name,
    "Total Attendance": service.totalattendance,
    "Service Name": service.servicename,
    "Total Week": service.totalweek,
    Date: moment(service.monthdate).format("MMM YYYY")
  }));
  csvData = sortBy(csvData, "time");
  downloadCSV({
    filename: `Yearly Report ${date}.csv`,
    data: csvData,
    columns: ["Date", "Service Name", "Total Attendance", "Total Week"]
  });
};

export const downloadPointReportPerTerm = termId => async (
  dispatch,
  getState
) => {
  const selectedTerm = selectTermList(getState()).find(
    term => term.id === termId
  );
  const startDate = moment(selectedTerm.startdate).format("YYYY-MM-DD");
  const endDate = moment(selectedTerm.enddate).format("YYYY-MM-DD");
  const churchId = selectSelectedChurch(getState());
  const res = await dispatch(
    callPostWithAuth(REPORT_POINT_GET, {
      endDate,
      startDate,
      churchId
    })
  );
  let csvData = [];
  csvData = res.rows.map((service, INDEX) => ({
    Name: `${service.name} (${service.nickname})`,
    Birthday: moment(service.birthdate).format("DD MMM YYYY"),
    "Point":service.point
  }));
  csvData = sortBy(csvData, "time");
  downloadCSV({
    filename: `Point Report ${startDate} - ${endDate}.csv`,
    data: csvData,
    columns: ["Name", "Birthday", "Point"]
  });
};

export const downloadFollowUpReport = (date, range) => async (
  dispatch,
  getState
) => {
  const churchId = selectSelectedChurch(getState());
  const dateRange = moment()
    .subtract(range, "days")
    .format("YYYY-MM-DD");
  const res = await dispatch(
    callPostWithAuth(REPORT_FOLLOWUP_GET, {
      date: moment(date).format("YYYY-MM-DD"),
      range: dateRange,
      churchId
    })
  );
  let csvData = [];
  csvData = res.rows.map((service, INDEX) => ({
    Name: `${service.name} (${service.nickname})`,
    Birthday: moment(service.birthdate).format("DD MMM YYYY"),
    "Last Attend": moment(service.lastattendance).format("DD MMM YYYY")
  }));
  csvData = sortBy(csvData, "time");
  downloadCSV({
    filename: `Follow Up Report ${moment()
      .subtract(range, "days")
      .format("DD MMM YYYY")}-${moment().format("DD MMM YYYY")}.csv`,
    data: csvData,
    columns: ["Name", "Birthday", "Last Attend"]
  });
};
