import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Database, getDatabase, onValue, ref, set } from 'firebase/database'
import { Client } from 'src/assets/shared/interfaces/clients';
import { UtilsService } from 'src/assets/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  createNewUserSpotify: FormGroup;
  db: Database;
  clients: Client[] = [];

  constructor(
    private _fb: FormBuilder,
    private _utilsSvc: UtilsService
  ) {
    this.createNewUserSpotify = this._fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      date: []
    });

    this.db = getDatabase();
    this.loadListDatabase();
  }

  loadListDatabase(): void {
    const clientsDb = ref(this.db, '/clients');
    onValue(clientsDb, (client => {
      const currentClient: Client = client.val();
      this.clients.push(currentClient);
    }));
  }

  setInfoUser(): void {
console.log(this.createNewUserSpotify.value);

const conf = this.createNewUserSpotify.value;

    const uuid = this._utilsSvc.generateId();
  const clients = ref(this.db, 'clients/' + uuid);

  set(clients, {
    ...conf
      });

  }

}
