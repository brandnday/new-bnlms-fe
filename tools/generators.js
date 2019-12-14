import moment from "moment";

export const generateColumns = array => {
  let arraylalala = [];
  array.map(element =>
    arraylalala.push({
      title: element.title,
      dataIndex: element.key,
      key: element.key,
      render: text => (
        <span>
          {element.format ? moment(text).format(element.format) : text}
        </span>
      )
    })
  );
  return arraylalala;
};
