require 'httparty'
require 'sinatra'
require 'json'


set :port, 8080
get '/' do
    content_type :json
    { message: 'Hello, world!' }.to_json
  end
  

  
response = HTTParty.get('http://localhost:8080/')
puts response.body
