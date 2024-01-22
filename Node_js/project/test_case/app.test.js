const request = require('supertest');
const app = require('./index');
const mysql = require('mysql2/promise');

const mockedQuery = jest.fn();
const mockedPool = {
  query: mockedQuery
};

beforeAll(() => {
  jest.mock('mysql2/promise', () => ({
    createPool: jest.fn(() => mockedPool)
  }));
});



describe('Express API', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    it('should return student details for a valid roll number', async () => {
        let mock_res = { "Emp_NO": 2, "Emp_Name": "Suresh", "Emp_Add": "GNoida", "Emp_Phone": "98565498465", "Dept_No": "0072", "Dept_Name": "Sales", "Salary": "75000", "Job_ID": null }

        mockedQuery.mockResolvedValueOnce([[mock_res]])
                const response = await request(app).get('/api/student/2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mock_res);
        // expect(mysql.createPool).toHaveBeenCalled();
        expect(mockedQuery).toHaveBeenCalledWith('SELECT * FROM EMPLOYEE WHERE Emp_No = ?', ['2']);
    });
});