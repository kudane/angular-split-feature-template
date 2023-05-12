import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class AdminSearchService {
    dataRaw = {
        firstName: ""
    }

    readonly data$ = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });

    constructor() {
        this.data$.controls['firstName'].valueChanges.subscribe(a => {
            Object.assign({firstName: a})
        })
    }

    public setValues(json: any) {
        return this.data$.patchValue(json);
    }

    public getValues(): any {
        return this.dataRaw;
    }
}