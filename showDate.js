class showDate{
    
    constructor(d){
        this.d=d;
    }
    getDateString(){
        return this.d.toDateString()
    }
    getLocaleDateString(){
        return this.d.toLocaleDateString()
    }
    getUTCString(){
        return this.d.toUTCString()
    }
    
}
module.exports= showDate