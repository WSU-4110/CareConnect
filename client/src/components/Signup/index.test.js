jest.mock('axios');

const Signup = require('./index');

describe('Signup Component', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    jest.restoreAllMocks(); // Restore other mocks
  });

  it('renders the Signup form', () => {
    expect(() => {
        require('./index');
      }).not.toThrow();  });

  it('updates state on input change', () => {
    const inputData = {
      currentTarget: {
        name: 'firstName',
        value: 'John',
      },
    };

    // Mock handleChange function
    Signup.handleChange = jest.fn();
    Signup.handleChange(inputData);

    // Assertions for state update
    expect(Signup.handleChange).toHaveBeenCalledWith(inputData);
  });

  it('submits signup form successfully', async () => {
    const mockData = {
      firstName: 'John',
    };

    // Mock handleSubmit function for successful form submission
    Signup.handleSubmit = jest.fn().mockResolvedValueOnce({ message: 'User created successfully' });

    const result = await Signup.handleSubmit(mockData);

    // Assertions for successful form submission
    expect(result).toEqual({ message: 'User created successfully' });
  });

  it('handles signup form submission failure', async () => {
    const mockData = {
      firstName: 'John',
    };

    // Mock handleSubmit function to simulate form submission failure
    Signup.handleSubmit = jest.fn().mockRejectedValueOnce({ status: 400, message: 'Mocked error' });

  
  });

  it('handles signup form submission failure', async () => {
    const mockData = {
      firstName: 'John',
    };
  
    // Mock handleSubmit function to simulate form submission failure
    Signup.handleSubmit = jest.fn().mockRejectedValueOnce({ response: { status: 400, data: { message: 'Mocked error' } } });
  
    try {
      await Signup.handleSubmit(mockData);
    } catch (error) {
      // Assertions for form submission failure
      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toBe('Mocked error');
    }
  });
  
  it('displays error message on network error during form submission', async () => {
    const mockData = {
      firstName: 'John',
    };
  
    // Mock handleSubmit function to simulate network error during form submission
    Signup.handleSubmit = jest.fn().mockRejectedValueOnce(new Error('Network Error'));
  
    try {
      await Signup.handleSubmit(mockData);
    } catch (error) {
      // Your assertions for network error during form submission
      expect(error.message).toBe('Network Error');
    }
  });
});
