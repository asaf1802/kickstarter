import { AuthService } from './../auth.service';
import { ProfileService } from './../profile.service';
import { ClassifyService } from './../classify.service';
import { Component, OnInit } from '@angular/core';
interface mainCategory {
  value: string;
  viewValue: string;
}
interface subCategory {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  selectedmainCategory!: string;
  selectSubcategory!: string;
  selectedCurrency!: string;
  selectedCountry!: string;
  selectedDuration!: string;
  selectedAmount!: string;
  selectedName!: string;
  result!:string;
  userId!:any;
  saveProject = false;
  saveSucceed = false;
  result12!:string;
  result20!:string;
  result30!:string;
  result40!:string;
  result50!:string;
  result60!:string;
  result70!:string;
  result80!:string;
  result92!:string;


  classify(){
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,this.selectedDuration,this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'12',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result12=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'20',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result20=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'30',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result30=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'40',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result40=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'50',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result50=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'60',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result60=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'70',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result70=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'80',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result80=res;
      }
    )
    this.classifyService.classify(this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,'90',this.selectedAmount).subscribe(
      res =>{
        console.log(res);
        this.result92=res;
      }
    )
  }

  addProject(){
    this.ProfileService.addProject(this.userId,this.selectedName,this.selectedmainCategory,this.selectSubcategory,this.selectedCurrency,this.selectedCountry,this.selectedDuration,this.selectedAmount,this.result)
  }

  subCategory: subCategory[]=[];
  /*------------currency----------*/
  country: mainCategory[] = [
    {value: 'AU', viewValue: 'Australia'},
    {value: 'AT', viewValue: 'Austria'},
    {value: 'BE', viewValue: 'Belgium'},
    {value: 'CA', viewValue: 'Canada'},
    {value: 'DK', viewValue: 'Denmark'},
    {value: 'FR', viewValue: 'France'},
    {value: 'DE', viewValue: 'Germany'},
    {value: 'HK', viewValue: 'Hong Kong'},
    {value: 'IE', viewValue: 'Ireland'},
    {value: 'IT', viewValue: 'Italy'},
    {value: 'JP', viewValue: 'Japan'},
    {value: 'LU', viewValue: 'Luxembourg'},
    {value: 'MX', viewValue: 'Mexico'},
    {value: 'NL', viewValue: 'Netherlands'},
    {value: 'NZ', viewValue: 'New Zealand'},
    {value: 'NO', viewValue: 'Norway'},
    {value: 'SG', viewValue: 'Singapore'},
    {value: 'ES', viewValue: 'Spain'},
    {value: 'SE', viewValue: 'Sweden'},
    {value: 'CH', viewValue: 'Switzerland'},
    {value: 'GB', viewValue: 'United Kingdom'},
    {value: 'US', viewValue: 'United States'},
  ];
  /*------------currency----------*/
  currency: mainCategory[] = [
    {value: 'AUD', viewValue: 'AUD'},
    {value: 'CAD', viewValue: 'CAD'},
    {value: 'CHF', viewValue: 'CHF'},
    {value: 'DKK', viewValue: 'DKK'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'GBP', viewValue: 'GBP'},
    {value: 'HKD', viewValue: 'HKD'},
    {value: 'JPY', viewValue: 'JPY'},
    {value: 'MXN', viewValue: 'MXN'},
    {value: 'NOK', viewValue: 'NOK'},
    {value: 'NZD', viewValue: 'NZD'},
    {value: 'SEK', viewValue: 'SEK'},
    {value: 'SGD', viewValue: 'SGD'},
    {value: 'USD', viewValue: 'USD'},
  ];
  /*------------main Category----------*/
  mainCategory: mainCategory[] = [
    {value: 'Art', viewValue: 'Art'},
    {value: 'Comics', viewValue: 'Comics'},
    {value: 'Crafts', viewValue: 'Crafts'},
    {value: 'Dance', viewValue: 'Dance'},
    {value: 'Design', viewValue: 'Design'},
    {value: 'Fashion', viewValue: 'Fashion'},
    {value: 'Film & Video', viewValue: 'Film & Video'},
    {value: 'Food', viewValue: 'Food'},
    {value: 'Games', viewValue: 'Games'},
    {value: 'Journalism', viewValue: 'Journalism'},
    {value: 'Music', viewValue: 'Music'},
    {value: 'Photography', viewValue: 'Photography'},
    {value: 'Publishing', viewValue: 'Publishing'},
    {value: 'Technology', viewValue: 'Technology'},
    {value: 'Theater', viewValue: 'Theater'},
  ];
  /*------------publishing----------*/
  categoryPublishing: subCategory[]=[
    {value: 'Poetry', viewValue: 'Poetry'},
    {value: 'Nonfiction', viewValue: 'Nonfiction'},
    {value: 'Art Books', viewValue: 'Art Books'},
    {value: 'Fiction', viewValue: 'Fiction'},
    {value: 'Publishing', viewValue: 'Publishing'},
    {value: 'Radio & Podcasts', viewValue: 'Radio & Podcasts'},
    {value: 'Periodicals', viewValue: 'Periodicals'},
    {value: 'Young Adult', viewValue: 'Young Adult'},
    {value: 'Anthologies', viewValue: 'Anthologies'},
    {value: 'Childrens Books', viewValue: 'Childrens Books'},
    {value: 'Zines', viewValue: 'Zines'},
    {value: 'Academic', viewValue: 'Academic'},
    {value: 'Translations', viewValue: 'Translations'},
    {value: 'Calendars', viewValue: 'Calendars'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Literary Journals', viewValue: 'Literary Journals'},
    {value: 'Letterpress', viewValue: 'Letterpress'},
    {value: 'Literary Spaces', viewValue: 'Literary Spaces'},
  ];
  /*------------FilmVideo----------*/
  categoryFilmVideo: subCategory[]=[
    {value: 'Narrative Film', viewValue: 'Narrative Film'},
    {value: 'Webseries', viewValue: 'Webseries'},
    {value: 'Animation', viewValue: 'Animation'},
    {value: 'Documentary', viewValue: 'Documentary'},
    {value: 'Family', viewValue: 'Family'},
    {value: 'Film & Video', viewValue: 'Film & Video'},
    {value: 'Shorts', viewValue: 'Shorts'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Action', viewValue: 'Action'},
    {value: 'Thrillers', viewValue: 'Thrillers'},
    {value: 'Movie Theatersimation', viewValue: 'Movie Theaters'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Science Fiction', viewValue: 'Science Fiction'},
    {value: 'Music Videos', viewValue: 'Music Videos'},
    {value: 'Experimental', viewValue: 'Experimental'},
    {value: 'Festivals', viewValue: 'Festivals'},
    {value: 'Television', viewValue: 'Television'},
    {value: 'Romance', viewValue: 'Romance'},
  ];

   /*------------music----------*/
  categoryMusic: subCategory[]=[
    {value: 'Music', viewValue: 'Music'},
    {value: 'Indie Rock', viewValue: 'Indie Rock'},
    {value: 'Pop', viewValue: 'Pop'},
    {value: 'Rock', viewValue: 'Rock'},
    {value: 'Jazz', viewValue: 'Jazz'},
    {value: 'Electronic Music', viewValue: 'Electronic Music'},
    {value: 'Metal', viewValue: 'Metal'},
    {value: 'Hip-Hop', viewValue: 'Hip-Hop'},
    {value: 'World Music', viewValue: 'World Music'},
    {value: 'Latin', viewValue: 'Latin'},
    {value: 'Punk', viewValue: 'Punk'},
    {value: 'Classical Music', viewValue: 'Classical Music'},
    {value: 'Country & Folk', viewValue: 'Country & Folk'},
    {value: 'R&B', viewValue: 'R&B'},
    {value: 'Blues', viewValue: 'Blues'},
    {value: 'Faith', viewValue: 'Faith'},
    {value: 'Kids', viewValue: 'Kids'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Chiptune', viewValue: 'Chiptune'},
  ];
    /*------------food----------*/
    categoryFood: subCategory[]=[
      {value: 'Restaurants', viewValue: 'Restaurants'},
      {value: 'Food', viewValue: 'Food'},
      {value: 'Drinks', viewValue: 'Drinks'},
      {value: 'Food Trucks', viewValue: 'Food Trucks'},
      {value: 'Cookbooks', viewValue: 'Cookbooks'},
      {value: 'Vegan', viewValue: 'Vegan'},
      {value: 'Farmers Markets', viewValue: 'Farmers Markets'},
      {value: 'Events', viewValue: 'Events'},
      {value: 'Spaces', viewValue: 'Spaces'},
      {value: 'Community Gardens', viewValue: 'Community Gardens'},
      {value: 'Farms', viewValue: 'Farms'},
      {value: 'Bacon', viewValue: 'Bacon'},
      {value: 'Small Batch', viewValue: 'Small Batch'},
    ];
     /*------------crafts----------*/
     categoryCrafts: subCategory[]=[
      {value: 'Crafts', viewValue: 'Crafts'},
      {value: 'DIY', viewValue: 'DIY'},
      {value: 'Weaving', viewValue: 'Weaving'},
      {value: 'Stationery', viewValue: 'Stationery'},
      {value: 'Knitting', viewValue: 'Knitting'},
      {value: 'Embroidery', viewValue: 'Embroidery'},
      {value: 'Woodworking', viewValue: 'Woodworking'},
      {value: 'Letterpress', viewValue: 'Letterpress'},
      {value: 'Candles', viewValue: 'Candles'},
      {value: 'Pottery', viewValue: 'Pottery'},
      {value: 'Glass', viewValue: 'Glass'},
      {value: 'Crochet', viewValue: 'Crochet'},
      {value: 'Printing', viewValue: 'Printing'},
      {value: 'Taxidermy', viewValue: 'Taxidermy'},
      {value: 'Quilts', viewValue: 'Quilts'},
    ];
     /*------------games----------*/
     categoryGames: subCategory[]=[
      {value: 'Games', viewValue: 'Games'},
      {value: 'Tabletop Games', viewValue: 'Tabletop Games'},
      {value: 'Video Games', viewValue: 'Video Games'},
      {value: 'Mobile Games', viewValue: 'Mobile Games'},
      {value: 'Playing Cards', viewValue: 'Playing Cards'},
      {value: 'Puzzles', viewValue: 'Puzzles'},
      {value: 'Live Games', viewValue: 'Live Games'},
      {value: 'Gaming Hardware', viewValue: 'Gaming Hardware'},
    ];
    /*------------design----------*/
    categoryDesign: subCategory[]=[
      {value: 'Design', viewValue: 'Design'},
      {value: 'Product Design', viewValue: 'Product Design'},
      {value: 'Architecture', viewValue: 'Architecture'},
      {value: 'Graphic Design', viewValue: 'Graphic Design'},
      {value: 'Typography', viewValue: 'Typography'},
      {value: 'Interactive Design', viewValue: 'Interactive Design'},
      {value: 'Civic Design', viewValue: 'Civic Design'},
    ];
     /*------------comics----------*/
     categoryComics: subCategory[]=[
      {value: 'Comic Books', viewValue: 'Comic Books'},
      {value: 'Comics', viewValue: 'Comics'},
      {value: 'Anthologies', viewValue: 'Anthologies'},
      {value: 'Graphic Novels', viewValue: 'Graphic Novels'},
      {value: 'Webcomics', viewValue: 'Webcomics'},
      {value: 'Events', viewValue: 'Events'},
    ];
     /*------------fashion----------*/
     categoryFashion: subCategory[]=[
      {value: 'Fashion', viewValue: 'Fashion'},
      {value: 'Childrenswear', viewValue: 'Childrenswear'},
      {value: 'Accessories', viewValue: 'Accessories'},
      {value: 'Ready-to-wear', viewValue: 'Ready-to-wear'},
      {value: 'Jewelry', viewValue: 'Jewelry'},
      {value: 'Footwear', viewValue: 'Footwear'},
      {value: 'Pet Fashion', viewValue: 'Pet Fashion'},
      {value: 'Couture', viewValue: 'Couture'},
    ];
    
    /*------------theater----------*/
    categoryTheater: subCategory[]=[
      {value: 'Theater', viewValue: 'Theater'},
      {value: 'Festivals', viewValue: 'Festivals'},
      {value: 'Experimental', viewValue: 'Experimental'},
      {value: 'Plays', viewValue: 'Plays'},
      {value: 'Musical', viewValue: 'Musical'},
      {value: 'Immersive', viewValue: 'Immersive'},
      {value: 'Spaces', viewValue: 'Spaces'},
      {value: 'Comedy', viewValue: 'Comedy'},
    ]; 
    /*------------art----------*/
    categoryArt: subCategory[]=[
      {value: 'Public Art', viewValue: 'Public Art'},
      {value: 'Illustration', viewValue: 'Illustration'},
      {value: 'Art', viewValue: 'Art'},
      {value: 'Painting', viewValue: 'Painting'},
      {value: 'Performance Art', viewValue: 'Performance Art'},
      {value: 'Ceramics', viewValue: 'Ceramics'},
      {value: 'Sculpture', viewValue: 'Sculpture'},
      {value: 'Mixed Media', viewValue: 'Mixed Media'},
      {value: 'Digital Art', viewValue: 'Digital Art'},
      {value: 'Installations', viewValue: 'Installations'},
      {value: 'Conceptual Art', viewValue: 'Conceptual Art'},
      {value: 'Textiles', viewValue: 'Textiles'},
      {value: 'Video Art', viewValue: 'Video Art'},
    ];
     /*------------photography----------*/
     categoryPhotography: subCategory[]=[
      {value: 'Photography', viewValue: 'Photography'},
      {value: 'People', viewValue: 'People'},
      {value: 'Photobooks', viewValue: 'Photobooks'},
      {value: 'Fine Art', viewValue: 'Fine Art'},
      {value: 'Animals', viewValue: 'Animals'},
      {value: 'Places', viewValue: 'Places'},
      {value: 'Nature', viewValue: 'Nature'},
    ];
    /*------------technology----------*/
    categoryTechnology: subCategory[]=[
      {value: 'Hardware', viewValue: 'Hardware'},
      {value: 'Software', viewValue: 'Software'},
      {value: 'Web', viewValue: 'Web'},
      {value: 'Gadgets', viewValue: 'Gadgets'},
      {value: 'Technology', viewValue: 'Technology'},
      {value: 'Flight', viewValue: 'Flight'},
      {value: 'Makerspaces', viewValue: 'Makerspaces'},
      {value: 'Apps', viewValue: 'Apps'},
      {value: 'Fabrication Tools', viewValue: 'Fabrication Tools'},
      {value: 'Sound', viewValue: 'Sound'},
      {value: 'Wearables', viewValue: 'Wearables'},
      {value: 'DIY Electronics', viewValue: 'DIY Electronics'},
      {value: 'Camera Equipment', viewValue: 'Camera Equipment'},
      {value: '3D Printing', viewValue: '3D Printing'},
      {value: 'Space Exploration', viewValue: 'Space Exploration'},
      {value: 'Robots', viewValue: 'Robots'},
    ];
    /*------------dance----------*/
    categoryDance: subCategory[]=[
      {value: 'Dance', viewValue: 'Dance'},
      {value: 'Performances', viewValue: 'Performances'},
      {value: 'Spaces', viewValue: 'Spaces'},
      {value: 'Workshops', viewValue: 'Workshops'},
      {value: 'Residencies', viewValue: 'Residencies'},
    ];
      /*------------journalism----------*/
    categoryJournalism: subCategory[]=[
      {value: 'Audio', viewValue: 'Audio'},
      {value: 'Print', viewValue: 'Print'},
      {value: 'Journalism', viewValue: 'Journalism'},
      {value: 'Video', viewValue: 'Video'},
      {value: 'Web', viewValue: 'Web'},
      {value: 'Photo', viewValue: 'Photo'},
    ];

  constructor(private classifyService:ClassifyService,private ProfileService:ProfileService, public authServise:AuthService) { }

  ngOnInit(): void {
    this.authServise.getUser().subscribe(
      user =>{
        this.userId = user?.uid;
      }
    )
  }

  updateSubCategory(categoryName:string){
    switch (categoryName){
      case 'Publishing':
        this.subCategory=this.categoryPublishing;
        break;
      case 'Film & Video':
        this.subCategory=this.categoryFilmVideo;
        break;
      case 'Music':
        this.subCategory=this.categoryMusic;
        break;
      case 'Food':
        this.subCategory=this.categoryFood;
        break;
      case 'Crafts':
        this.subCategory=this.categoryCrafts;
        break;
      case 'Games':
        this.subCategory=this.categoryGames;
        break; 
      case 'Design':
        this.subCategory=this.categoryDesign;
        break; 
      case 'Comics':
        this.subCategory=this.categoryComics;
        break; 
      case 'Fashion':
            this.subCategory=this.categoryFashion;
            break; 
      case 'Theater':
        this.subCategory=this.categoryTheater;
        break; 
      case 'Art':
        this.subCategory=this.categoryArt;
        break; 
      case 'Photography':
        this.subCategory=this.categoryPhotography;
        break;
      case 'Technology':
        this.subCategory=this.categoryTechnology;
        break;
      case 'Dance':
        this.subCategory=this.categoryDance;
        break;
      case 'Journalism':
        this.subCategory=this.categoryJournalism;
        break;
      default:
        this.subCategory=[];
        break;
    }
  }


}
