require 'sinatra'
require 'sinatra/cors'
require_relative 'models/fluorescent_simulation'
require_relative 'routes/simulate'

set :allow_origin, "*"
set :allow_methods, "GET,HEAD,POST,OPTIONS"
set :allow_headers, "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept, if-modified-since"
set :expose_headers, "location,link"
set :server, 'puma'
set :bind, '0.0.0.0'