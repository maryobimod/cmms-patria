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

export default function realTimeLineChartData1(data: TicketListsType[]) {
  const dataAsc = data.sort((a, b) => new Date(a.deviceDate).getTime() - new Date(b.deviceDate).getTime());
  const dataLabels = [];

  dataAsc.forEach((item: TicketListsType) => {
    const time = dayjs.utc(item.deviceDate).format("HH:mm");
    if (!dataLabels.includes(time)) {
      dataLabels.push(time);
    }
  });

  const xDiff = dataLabels.length - 10;
  const x1 = xDiff <= 0 ? 0 : xDiff;
  const x2 = dataLabels.length;
  const lablesSliced = dataLabels.slice(x1, x2);
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

  lablesSliced.forEach(label => {
    // const labelValue = dayjs.utc(label).format("HH:mm:ss");
    labels.push(label);
    for (let i = 1; i <= 12; i++) {
      const dataByLabel = data.filter((item: TicketListsType) => item.pid === i && dayjs.utc(item.deviceDate).format("HH:mm") === label);

      switch (i) {
        case 1:
          const value1 = getValue(dataByLabel, pid1Value);
          pid1Value.push(Number(value1));
          break;
        case 2:
          const value2 = getValue(dataByLabel, pid2Value);
          pid2Value.push(Number(value2));
          break;
        case 3:
          const value3 = getValue(dataByLabel, pid3Value);
          pid3Value.push(Number(value3));
          break;
        case 4:
          const value4 = getValue(dataByLabel, pid4Value);
          pid4Value.push(Number(value4));
          break;
        case 5:
          const value5 = getValue(dataByLabel, pid5Value);
          pid5Value.push(Number(value5));
          break;
        case 6:
          const value6 = getValue(dataByLabel, pid6Value);
          pid6Value.push(Number(value6));
          break;
        case 7:
          const value7 = getValue(dataByLabel, pid7Value);
          pid7Value.push(Number(value7));
          break;
        case 8:
          const value8 = getValue(dataByLabel, pid8Value);
          pid8Value.push(Number(value8));
          break;
        case 9:
          const value9 = getValue(dataByLabel, pid9Value);
          pid9Value.push(Number(value9));
          break;
        case 10:
          const value10 = getValue(dataByLabel, pid10Value);
          pid10Value.push(Number(value10));
          break;
        case 11:
          const value11 = getValue(dataByLabel, pid11Value);
          pid11Value.push(Number(value11));
          break;
        case 12:
          const value12 = getValue(dataByLabel, pid12Value);
          pid12Value.push(Number(value12));
          break;
        default:
          break;
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