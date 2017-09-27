export class User {
    public username: string;
    public password: string;
    public id: number;
    public grant_type = 'password';
    public confirmPassword: string;
    public role: String;
}
