function csv2json(csvFileName, valueFieldName, callback) {
  d3.csv(csvFileName, function(error, data) {
    var returnObj = {'parent': 'null', 'children': []};
    data.forEach(function(d) {
      returnObj['name'] = d.province;
      returnObj['children'].push({
        'name': d.country,
        'value': d[valueFieldName],
        'parent': 'Top Level',
        'icon': '../PIC/FLAGS/' + d.country + '.png'
      });
    });
    callback(returnObj);
  });
}

function csv2jsonForGdp(csvFileName, callback) {
  csv2json(csvFileName, 'gdp_pc', callback);
}

function csv2jsonForUnem(csvFileName, callback) {
  csv2json(csvFileName, 'unem', callback);
}
