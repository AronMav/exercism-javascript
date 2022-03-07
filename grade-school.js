//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

    constructor() {
        this._school = {};
    }

    roster() {
        let copySchool = {}
        for (let key of Object.keys(this._school)) {
            copySchool[key] = Array.from(this._school[key]);
        }
        return copySchool;
    }

    add(value, index) {
        for (let key of Object.keys(this._school)) {
            if (this._school[key].includes(value)) {
                this._school[key] = this._school[key].filter(f => { return f !== value })
            }
        }

        if (this._school[index] == undefined) {
            this._school[index] = [value];
        } else {
            this._school[index].push(value);
            this._school[index].sort();
        }
    }

    grade(index) {
        return this._school[index] == undefined ? [] : this.roster()[index]
    }

}
