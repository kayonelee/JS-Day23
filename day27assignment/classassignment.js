class Job {
    constructor(name, industry, requiresDegree, field, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.salary = salary; // ------added another relevant properties per assignment
    }

    // ------methods------------
    getName() {
        return this.name;
    }
    getFieldAndIndustry() {
        return "Field: " +  this.field + " | " + "Industry: " + this.industry;
    }
    getSalary() {
        return "Average Salary: " + this.salary;
    }
    getSummary() {
        return `${this.name} has an average salary of ${this.salary} per year and falls within the ${this.industry} industry`;
    }
}

// ------create three different instances of the Job class
const job1 = new Job ("Elementary Teacher", "Education", true, "Teaching", "$50,000");
console.log(job1.getName());
console.log(job1.getFieldAndIndustry());

const job2 = new Job ("Sales Representative", "Real Estate", false, "Sales", "$95,000");
console.log(job2.getName());
console.log(job2.getFieldAndIndustry());

const job3 = new Job ("Clerk Member", "Retail", false, "Sales", "$35,000");
console.log(job3.getName());
console.log(job3.getFieldAndIndustry());


// extended subclass
class Career extends Job    {
    constructor(name, industry, requiresDegree, field, salary, yearsOfExperience, jobDescription)   {
        super(name, industry, requiresDegree, field, salary);
        this.jobDescription = jobDescription;
        this.yearsOfExperience = yearsOfExperience;
    }
    getJobDescription() {
        return this.jobDescription;
    }
    getYearsOfExperience() {
        return `Length of experience: ${this.yearsOfExperience}`;
    }
};
    let career1 = new Career("Elementary Teacher", "Education", true, "Teaching", "$50,000", "1", "Manage classrooms and implement school procedures");
    console.log(career1.getYearsOfExperience());
	console.log(career1.getJobDescription());
