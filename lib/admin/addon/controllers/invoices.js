import Controller from '@ember/controller';

export default class InvoiceController extends Controller {


  get formattedData(){
    console.log(this.model);
  }
}