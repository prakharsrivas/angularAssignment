import { Component, OnInit } from '@angular/core';
import { CountriesV2Service } from '../services/countries.v2.service';
import { Region, TableContent } from '../interface/common.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular Assignment';
  listOfRegion: Region = [
    { id: 0, name: 'Europe' },
    { id: 1, name: 'Asia' },
  ];
  listOfCountrie: any = [];
  selectedOptions: string = '';
  basedOnCountrieSelection: boolean = false;
  countrieDetails: boolean = false;
  tableContent: TableContent = [];

  constructor(private countriesV2Service: CountriesV2Service) {}

  ngOnInit() {
    console.log(this.countriesV2Service.getRegion);
  }

  enableCountriesList(selectedOptions: string) {
    this.getListOfCountries(this.listOfRegion[Number(selectedOptions)].name);
  }

  getListOfCountries(region: string) {
    this.countriesV2Service.getRegion(region).subscribe(
      (response) => {
        this.listOfCountrie = response;
      },
      (error) => {
        console.error('Request failed with error');
      },
      () => {
        this.basedOnCountrieSelection = true;
      }
    );
  }

  displayCountrieTable(countrieIndex: any) {
    this.showCountrieTable(this.listOfCountrie[countrieIndex]);
  }

  showCountrieTable(countrieDetails: any) {
    this.tableContent = countrieDetails;
    this.countrieDetails = true;
  }
}
