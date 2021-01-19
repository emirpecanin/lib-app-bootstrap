import { helper } from '@ember/component/helper';


export default helper( function formatter(params/*, hash*/) {
  let items = params[0].match(/\{(.*?)\}/g).map(item => JSON.parse(item)); // Parses string output to JSON object

  // Mapping key-value pairs to lists for cleaner output
  let itemList = items.map(item => {  
    let html  = '<table class="table table-bordered"><tbody>';
    for(const [key,val] of Object.entries(item)) {
      html+= `<tr>
                  <td>${key}</td>
                  <td>${val}</td>
              </tr>`
    }
    html += '</tbody></table>';
    return html;
  }).join('');
  return itemList;
});


