class Employee {
    public readonly workerNum: number;
    public firstName: string;
    public lastName: string;
    public salary: number;

    public constructor(workerNum: number, firstName: string, lastName: string, salary: number) {
        this.workerNum = workerNum;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}