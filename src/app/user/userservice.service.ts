import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Usermodel } from './usermodel';

const postHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Accept':'application/json'})
};
const getHttpOptions = {
  headers: new HttpHeaders({ 'Accept':'application/json'})
};

@Injectable()
export class UserserviceService {

  private pmSaveUserApiUrl = 'http://localhost:8085/pm/user';
  private pmListAllUserApiUrl = 'http://localhost:8085/pm/users';

  //user=new Usermodel();


  constructor(private http: HttpClient) { }

  saveUser(user: Usermodel): Observable<any> {
    console.log('inside saveEmployee()' + user.employeeId);
 
    console.log(this.http.post<Usermodel>(this.pmSaveUserApiUrl, user, postHttpOptions));
   
    /*.pipe(
      tap(id => this.log(`added emp with id=${id}`)),
      catchError(this.handleError<Emp>('saveEmp'))
    );*/
    return this.http.post(this.pmSaveUserApiUrl, user, postHttpOptions);
    //.map(this.extractData);
    //(response: Response) => response.json() as GithubUser
    //.map(success => success.status)
  }

  listUser(): Observable<Usermodel[]> {

    return this.http.get<Usermodel[]>(this.pmListAllUserApiUrl,getHttpOptions);
    // .pipe(
    // map(res: Response) => res.json().response);
    //  map(res => {
    //    return res.json().results.map(item => {
    //      return new Emp(
    //        item.id,
    //        item.name,
    //        item.age,
    //        item.gender
    //      );
    //    });
    //  });
  }

  private extractData(res: Response) {
       console.log("res=>"+res.json().firstName);
        let body = res.json();
        return body || {};
    }

}
