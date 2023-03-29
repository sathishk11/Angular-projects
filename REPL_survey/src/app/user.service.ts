import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserWrapper } from './model/outputdo';
import { UserInput } from './model/userinput';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private employeeLoginCheckURL = 'http://mplr.net7.co.in/api/REPL/Employee/LoginCheck';

  constructor(private http: HttpClient) { }

  getUser(userInput: UserInput): Observable<UserWrapper> {
    return this.http.post<UserWrapper>(this.employeeLoginCheckURL, userInput);
  }
  // getUserJson(userInput: UserInput): Observable<UserWrapper> {
  //   return this.jsonp.post<UserWrapper>(this.employeeLoginCheckURL, userInput);
// }
  }
