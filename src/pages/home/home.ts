import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { toast } from './toast.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [toast]
})
export class HomePage {
  public countries;
  public selectedValue;
  public fuel;
  public selectedFuel;
  public loading;
  public selectedItem;
  public hifuel = ['Petrol', 'Diesel', 'CNG'];
  public showPrice;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private http: Http, public _toast: toast, public alertCtrl: AlertController) {

  }


  GetCities(): Observable<any> {
    return this.http.get("http://fuelpriceindia.herokuapp.com/cities")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  GetFuels(): Observable<any> {
    return this.http.get("http://fuelpriceindia.herokuapp.com/fuel_types")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  CallPrice(city, fuel): Observable<any> {
    return this.http.get("http://fuelpriceindia.herokuapp.com//price?city=" + city + "&fuel_type=" + fuel)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  ionViewDidLoad() {
    this.GetCities().subscribe((data) => {
      console.log(data.cities)
      this.countries = data.cities;
      this.selectedValue = this.countries[0];
    }, (err) => {
      console.log(err)
    });
  }

  GetPrice(event, fuel) {
    // this.presentLoadingCustom()
    this.CallPrice(this.selectedValue, fuel).subscribe((data) => {
      // this.loading.dismiss();
      console.log(data)
      this.showPrice = data[fuel];
      console.log(this.showPrice)

      // this.showConfirm(data.city, data[fuel], fuel);
    }, (err) => {
      console.log(err)
    });

  }

  // showConfirm(city, price, Fuel) {
  //   let confirm = this.alertCtrl.create({
  //     title: 'In ' + city,
  //     message: 'The ' + Fuel + ' price is ' + price,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
    this.loading.present();
  }


  onCountoEnd() {
    console.log('ended')
  }
}
