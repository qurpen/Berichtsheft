class User {
    constructor(id, password, role){
        this.id = id;
        this.password = password;
        this.role = role;
    }

    resetPassword(newPassword){
        if(newPassword !== this.password){
            this.password = newPassword;
            console.log('Password was successfuly changed.');
        }
        else{
            console.log('There was a problem changing the password.');
        }
    }
}



class Report{
    constructor(id, year, week){
        this.id = id;
        this.year = year;
        this.week = week;
        this.activities = []
        this.status = "in Bearbeitung"
    }

    addActivity(activity){
        if(activity instanceof Activity && activity.isValid){
            this.activities.push(activity)
        }
        else{
           console.log('Ein Problem ist aufgetreten.'); 
        }   
    }
}


class Activity{
    constructor(date, content, duration){
        this.date = date;
        this.content = content;
        this.duration = duration;
        this.isValid = false;
    }

    checkIsValid(){
         if (
            this.date instanceof Date && !isNaN(this.date.getTime()) && // Gültiges Datum
            typeof this.content === "string" && this.content.trim().length > 0 && // Nicht-leerer Text
            typeof this.duration === "number" && this.duration > 0 // Positive Zahl für Dauer
        ) {
            return true;
        }
        return false;
    }
}



export default User;