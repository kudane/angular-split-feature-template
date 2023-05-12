import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map } from "rxjs";

@Injectable()
export class AdminReportService {
    data$ = new Subject<any[]>();

    constructor(private httpclient: HttpClient) { }

    public getValueFormApi(params: any): void {
        this.httpclient.get("...", { params }).pipe(map(a => this.data$.next(a as [])));
    }
}