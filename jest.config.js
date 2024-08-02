export default {
    testEnvironment: 'node',                  
    verbose: true, 
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },                           
    testMatch: ['**/tests/**/*.test.js'],     
    coverageDirectory: 'coverage',            
    collectCoverage: true,                    
    collectCoverageFrom: [
      '**/src/**/*.js',                       
      '!**/node_modules/**',                  
      '!**/tests/**'                          
    ], 
    testTimeout: 10000,                       
}
  