const { supabase } = require('../src/config/supabase');

// Setup test database before all tests
beforeAll(async () => {
  // Test Supabase connection
  try {
    const { error } = await supabase.from('repositories').select('id').limit(1);
    if (error && error.code !== '42P01') {
      throw error;
    }
    console.log('Test setup: Supabase connected');
  } catch (error) {
    console.error('Test setup failed:', error.message);
  }
});

// Clean up after each test
afterEach(async () => {
  // Clean up test data if needed
  try {
    // Example: Delete test users created during tests
    // await supabase.from('users').delete().eq('email', 'like', '%test%');
  } catch (error) {
    console.error('Test cleanup failed:', error.message);
  }
});

// Teardown after all tests
afterAll(async () => {
  // Supabase doesn't need explicit disconnection
  console.log('Test teardown complete');
});
