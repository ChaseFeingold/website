#!/usr/bin/env python3
import bottle

@bottle.route('/')
@bottle.route('/<name>')
def index(name='World'):
    the_message = f'Hello {name}!'
    return bottle.template('template', message=the_message)

bottle.run(host='0.0.0.0', port=8090)