# serve-redirect
A super simple HTTP redirection server

## Usage 

`$ npx serve-redirect --port 8080 --target https://www.google.com`

### Optional Arguments

- port   - port service will listen on (default 8080)
- ip     - IP address service will listen on (default 0.0.0.0)
- target - url requests will redirect to (default https://www.google.com)
- code   - http response code to use (default 301)
