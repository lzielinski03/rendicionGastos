import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {RendicionPage} from '../rendicion/rendicion';
import {ExtendedHttp} from './../../services/ExtendedHttp';
import {UserService} from './../../services/UserService';

@Component({
	templateUrl: 'build/pages/rendiciones/rendiciones.html'
})
export class RendicionesPage {

	processes: any;

	constructor(
		private navCtrl: NavController,
		private loading: LoadingController,
		private user: UserService,
		private http: ExtendedHttp) {
	}

	ionViewWillEnter() {
		let load = this.loading.create();
		load.present();

		this.http.get('/api/instance').subscribe(
			res => this.processes = res.json(),
			err => console.log(err),
			() => load.dismiss()
		);
	}

	goToRendicion(rendicion) {
		this.navCtrl.push(RendicionPage, {
			rendicion: rendicion
		});
	}
}

