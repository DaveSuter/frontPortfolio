export class persona{
    id?: number;
    name: String;
    lastName: String;
    banner: String;
    avatar: String;
    title: String;
    province: String;
    country: String;
    about: String;

    constructor(name: String, lastName: String, banner: String, avatar: String, title: String, province: String, country: String, about: String){
        this.name = name;
        this.lastName = lastName;
        this.banner = banner;
        this.avatar = avatar;
        this.title = title;
        this.province = province;
        this.country = country;
        this.about = about;
    }
}