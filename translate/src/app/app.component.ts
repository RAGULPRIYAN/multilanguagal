import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from './service.service';
import { SelectItem } from 'primeng/api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  languageOptions: any[] | undefined = [];
  selectedLanguages:any;

 


  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title = 'translate';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl','tn']);
    translate.setDefaultLang('en');
   
   
  }
  ngOnInit(): void {
   
    this.languageOptions = this.translate.getLangs().map(language => ({ label: language, value: language }));
    console.log(this.languageOptions,"jffnjrenfrje")
    const storedLanguage = localStorage.getItem('selectedLanguage');
    console.log(storedLanguage,"storedlang")
    if (storedLanguage) {
      // Use the stored language from localStorage
      this.selectedLanguages = storedLanguage;
      this.translate.use(this.selectedLanguages); // Apply the stored language
    } else {
      // No stored language, use the current language
      this.selectedLanguages = this.translate.currentLang;
    }
  }

  switchLang(lang: string) {
    console.log(lang,"current language")
    this.translate.use(lang);
    // localStorage.setItem('selectedLanguage', lang);
  }
}
