export const generateColumns = array => {
  let arraylalala = [];
  array.map(element =>
    arraylalala.push({
      title: element.title,
      dataIndex: element.key,
      key: element.key,
      render: text => <span>{text}</span>
    })
  );
  return arraylalala;
};