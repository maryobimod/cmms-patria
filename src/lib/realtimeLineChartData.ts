import TicketListsType from "@/models/TicketListsType";
import dayjs from "dayjs";

function getValue(dataByLabel: TicketListsType[], pidValue: number[]) {
  let value = pidValue.length ? pidValue[pidValue.length - 1] : 0;
  if (dataByLabel.length) {
    value = dataByLabel[0].value;
    if (value === 0) {
      value = pidValue.length ? pidValue[pidValue.length - 1] : 0;
    }
  }
 
  return value.toFixed(2);
}

const setValue = (dataPID: TicketListsType[]) => {
  let value = 0;
  dataPID.forEach(pid => value += pid.value);
  if (value > 0) {
    value = value/dataPID.length;
  }

  return value.toFixed(2);
}

export default function realTimeLineChartData(data: TicketListsType[]) {
  // const dataAsc = data.sort((a, b) => new Date(a.deviceDate).getTime() - new Date(b.deviceDate).getTime());
  const dataLabels = [];

  data.forEach((item: TicketListsType) => {
    const timePerMinute = dayjs.utc(item.deviceDate).format("YYYY-MM-DD HH:mm");
    if (!dataLabels.includes(timePerMinute)) {
      dataLabels.push(timePerMinute);
    }
  });

  const diffLength = dataLabels.length - 8;
  const x1 = diffLength > 0 ? diffLength : 0;
  const dataLablesSliced = dataLabels.sort().slice(x1, dataLabels.length);
  const labels = [];
  const pid1Value = [];
  const pid2Value = [];
  const pid3Value = [];
  const pid4Value = [];
  const pid5Value = [];
  const pid6Value = [];
  const pid7Value = [];
  const pid8Value = [];
  const pid9Value = [];
  const pid10Value = [];
  const pid11Value = [];
  const pid12Value = [];

  dataLablesSliced.sort().forEach(time => {
    if (time) {
      const label = time.split(" ");
      labels.push(label[1])

      for (let i = 1; i <= 12; i++) {
        const dataPID = data.filter(item => (item.pid === i) && (dayjs.utc(item.deviceDate).format("YYYY-MM-DD HH:mm") == time));
        const value = setValue(dataPID);

        switch (i) {
          case 1:
            pid1Value.push(Number(value));
            break;
          case 2:
            pid2Value.push(Number(value));
            break;
          case 3:
            pid3Value.push(Number(value));
            break;
          case 4:
            pid4Value.push(Number(value));
            break;
          case 5:
            pid5Value.push(Number(value));
            break;
          case 6:
            pid6Value.push(Number(value));
            break;
          case 7:
            pid7Value.push(Number(value));
            break;
          case 8:
            pid8Value.push(Number(value));
            break;
          case 9:
            pid9Value.push(Number(value));
            break;
          case 10:
            pid10Value.push(Number(value));
            break;
          case 11:
            pid11Value.push(Number(value));
            break;
          case 12:
            pid12Value.push(Number(value));
            break;
          default:
            break;
        }
      }
    }
  });

  const result = {
    labels,
    pid1Value,
    pid2Value,
    pid3Value,
    pid4Value,
    pid5Value,
    pid6Value,
    pid7Value,
    pid8Value,
    pid9Value,
    pid10Value,
    pid11Value,
    pid12Value
  }

  return result;
}