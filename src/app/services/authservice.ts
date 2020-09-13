
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { AdminDTO } from '../dtos/adminDTO';
import { MAIN_URL } from './addadminservice';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
const URL= "/api/v1/admins/login";
@Injectable()
export class Authservice {

    constructor(private http:HttpClient,private router:Router){}
    login(user:AdminDTO):Observable<boolean> {
      return this.http.post<boolean>(MAIN_URL + URL, user)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/main']);
          }
          return result;
        })
      )
    }
    isAuthenticated(): boolean{
      if (sessionStorage.getItem("token")){
        return sessionStorage.getItem("token") == 'false' ? false: true;
      }
    }
  
    logout(): void{
      sessionStorage.removeItem("token");
      this.router.navigate(['/login']);
    }
}
